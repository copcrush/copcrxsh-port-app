"use client";

import { createClient } from "@/lib/supabase/client";
import type { Work, WorkFormValues, WorkUpdate } from "@/features/works/types";
import { parseWorkContent } from "@/features/works/types";

function toPayload(values: WorkFormValues) {
  const highlights = values.highlights
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const liveUrl = values.live_url.trim();

  return {
    title: values.title.trim(),
    slug: values.slug.trim(),
    description: values.description.trim(),
    tags: values.tags,
    cover_image_url: values.cover_image_url,
    live_url: liveUrl.length > 0 ? liveUrl : null,
    published: values.published,
    content: {
      body: values.body.trim(),
      highlights,
    },
    updated_at: new Date().toISOString(),
  };
}

export async function createWork(
  values: WorkFormValues,
  id?: string,
): Promise<Work> {
  const supabase = createClient();
  const payload = {
    ...toPayload(values),
    ...(id ? { id } : {}),
  };

  const { data, error } = await supabase
    .from("works")
    .insert(payload)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateWork(
  id: string,
  values: WorkFormValues,
): Promise<Work> {
  const supabase = createClient();
  const payload: WorkUpdate = toPayload(values);

  const { data, error } = await supabase
    .from("works")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteWork(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from("works").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export function workToFormValues(work: Work): WorkFormValues {
  const content = parseWorkContent(work.content);

  return {
    title: work.title,
    slug: work.slug,
    description: work.description,
    tags: work.tags,
    body: content.body ?? "",
    highlights: (content.highlights ?? []).join("\n"),
    published: work.published,
    cover_image_url: work.cover_image_url,
    live_url: work.live_url ?? "",
  };
}
