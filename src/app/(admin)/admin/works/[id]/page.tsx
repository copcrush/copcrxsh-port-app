import { notFound } from "next/navigation";

export default async function EditWorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params;
  notFound();
}
