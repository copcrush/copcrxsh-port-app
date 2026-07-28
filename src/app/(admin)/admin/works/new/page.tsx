import { WorkForm } from "@/components/admin/work-form";

export default function NewWorkPage() {
  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">
        Works
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold">Add work</h1>
      <WorkForm />
    </div>
  );
}
