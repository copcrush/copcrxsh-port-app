import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/works", label: "Works" },
];

export function Sidebar() {
  return (
    <aside className="border-b bg-card p-5 md:min-h-screen md:w-64 md:border-r md:border-b-0 md:p-8">
      <Link
        href="/"
        className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="COPCRXSH home"
      >
        <BrandMark />
      </Link>
      <nav className="mt-8" aria-label="Admin navigation">
        <ul className="flex gap-2 md:flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
