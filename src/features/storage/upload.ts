"use client";

import { createClient } from "@/lib/supabase/client";

const WORK_IMAGES_BUCKET = "work-images";

export async function uploadWorkImage(file: File, workId: string) {
  const supabase = createClient();
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "bin";
  const path = `${workId}/${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from(WORK_IMAGES_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return supabase.storage.from(WORK_IMAGES_BUCKET).getPublicUrl(path).data
    .publicUrl;
}

export async function deleteWorkImage(path: string) {
  const supabase = createClient();
  const { error } = await supabase.storage
    .from(WORK_IMAGES_BUCKET)
    .remove([path]);

  if (error) {
    throw new Error(error.message);
  }
}
