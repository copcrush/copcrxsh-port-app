import { notFound } from "next/navigation";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  notFound();
}
