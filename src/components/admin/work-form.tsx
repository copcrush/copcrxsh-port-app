"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useId, useState } from "react";

import { ImageUploader } from "@/components/admin/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createWork,
  deleteWork,
  updateWork,
  workToFormValues,
} from "@/features/works/mutations";
import type { Work, WorkFormValues } from "@/features/works/types";
import { slugify } from "@/features/works/types";

type WorkFormProps = {
  work?: Work;
};

const emptyValues: WorkFormValues = {
  title: "",
  slug: "",
  description: "",
  tags: [],
  body: "",
  highlights: "",
  published: false,
  cover_image_url: null,
  live_url: "",
};

export function WorkForm({ work }: WorkFormProps) {
  const router = useRouter();
  const formId = useId();
  const [values, setValues] = useState<WorkFormValues>(
    work ? workToFormValues(work) : emptyValues,
  );
  const [workId] = useState(() => work?.id ?? crypto.randomUUID());
  const [slugTouched, setSlugTouched] = useState(Boolean(work));
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function updateField<K extends keyof WorkFormValues>(
    key: K,
    value: WorkFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      if (work) {
        await updateWork(work.id, values);
      } else {
        await createWork(values, workId);
      }
      router.push("/admin/works");
      router.refresh();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to save work.",
      );
      setIsPending(false);
    }
  }

  async function handleDelete() {
    if (!work) return;
    const confirmed = window.confirm(
      `Delete “${work.title}”? This cannot be undone.`,
    );
    if (!confirmed) return;

    setError(null);
    setIsDeleting(true);

    try {
      await deleteWork(work.id);
      router.push("/admin/works");
      router.refresh();
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to delete work.",
      );
      setIsDeleting(false);
    }
  }

  return (
    <form className="mt-8 max-w-2xl space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor={`${formId}-title`}>Title</Label>
        <Input
          id={`${formId}-title`}
          value={values.title}
          required
          onChange={(event) => {
            const title = event.target.value;
            updateField("title", title);
            if (!slugTouched) {
              updateField("slug", slugify(title));
            }
          }}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-slug`}>Slug</Label>
        <Input
          id={`${formId}-slug`}
          value={values.slug}
          required
          pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
          onChange={(event) => {
            setSlugTouched(true);
            updateField("slug", slugify(event.target.value));
          }}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-description`}>Short description</Label>
        <Textarea
          id={`${formId}-description`}
          value={values.description}
          required
          onChange={(event) => updateField("description", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-tags`}>Tags (comma-separated)</Label>
        <Input
          id={`${formId}-tags`}
          value={values.tags.join(", ")}
          placeholder="Next.js, Supabase, Design"
          onChange={(event) =>
            updateField(
              "tags",
              event.target.value
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
            )
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-live-url`}>Live preview URL</Label>
        <Input
          id={`${formId}-live-url`}
          type="url"
          inputMode="url"
          placeholder="https://example.vercel.app"
          value={values.live_url}
          onChange={(event) => updateField("live_url", event.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Shown as a Go Live button so HR can open the live site in one click.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-body`}>Case study body</Label>
        <Textarea
          id={`${formId}-body`}
          className="min-h-48"
          value={values.body}
          onChange={(event) => updateField("body", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${formId}-highlights`}>
          Highlights (one per line)
        </Label>
        <Textarea
          id={`${formId}-highlights`}
          value={values.highlights}
          onChange={(event) => updateField("highlights", event.target.value)}
        />
      </div>

      <ImageUploader
        workId={workId}
        value={values.cover_image_url}
        onChange={(url) => updateField("cover_image_url", url)}
      />

      <label className="flex items-center gap-3 text-sm font-medium">
        <input
          type="checkbox"
          className="size-4 accent-[var(--primary)]"
          checked={values.published}
          onChange={(event) => updateField("published", event.target.checked)}
        />
        Published
      </label>

      {error ? (
        <p role="alert" className="text-sm text-primary">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isPending || isDeleting}>
          {isPending ? "Saving…" : work ? "Save changes" : "Create work"}
        </Button>
        {work ? (
          <Button
            type="button"
            variant="outline"
            disabled={isPending || isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? "Deleting…" : "Delete"}
          </Button>
        ) : null}
      </div>
    </form>
  );
}
