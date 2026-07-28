import type { Tables, TablesInsert, TablesUpdate } from "@/types/database.types";

export type Work = Tables<"works">;
export type WorkInsert = TablesInsert<"works">;
export type WorkUpdate = TablesUpdate<"works">;

export type WorkContent = {
  body?: string;
  highlights?: string[];
};

export type WorkFormValues = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  body: string;
  highlights: string;
  published: boolean;
  cover_image_url: string | null;
};

export function parseWorkContent(content: Work["content"]): WorkContent {
  if (!content || typeof content !== "object" || Array.isArray(content)) {
    return {};
  }

  const record = content as Record<string, unknown>;
  const body = typeof record.body === "string" ? record.body : undefined;
  const highlights = Array.isArray(record.highlights)
    ? record.highlights.filter((item): item is string => typeof item === "string")
    : undefined;

  return { body, highlights };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
