import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background md:flex">
      <Sidebar />
      <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-12">{children}</main>
    </div>
  );
}
