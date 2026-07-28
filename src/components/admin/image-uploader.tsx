"use client";

import Image from "next/image";
import { type ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { uploadWorkImage } from "@/features/storage/upload";

type ImageUploaderProps = {
  workId: string;
  value: string | null;
  onChange: (url: string | null) => void;
};

export function ImageUploader({ workId, value, onChange }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const url = await uploadWorkImage(file, workId);
      onChange(url);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to upload image.",
      );
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-3">
      <Label htmlFor="cover-image">Cover image</Label>
      {value ? (
        <div className="relative aspect-video overflow-hidden rounded-md border bg-muted">
          <Image
            src={value}
            alt="Work cover preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      ) : (
        <div className="grid aspect-video place-items-center rounded-md border border-dashed text-sm text-muted-foreground">
          No cover image yet
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        <label className="inline-flex">
          <input
            id="cover-image"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleChange}
            disabled={isUploading}
          />
          <span className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-border bg-transparent px-4 text-sm font-medium hover:bg-muted">
            {isUploading ? "Uploading…" : value ? "Replace image" : "Upload image"}
          </span>
        </label>
        {value ? (
          <Button
            type="button"
            variant="ghost"
            onClick={() => onChange(null)}
            disabled={isUploading}
          >
            Remove
          </Button>
        ) : null}
      </div>
      {error ? (
        <p role="alert" className="text-sm text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
