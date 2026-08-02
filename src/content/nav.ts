/** Single source of truth for site navigation labels + hrefs. */
export const siteNav = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const hireCta = {
  href: "/hire",
  label: "Contact Us",
} as const;

/** Optional candy tones for decorative quick-link chips (order matches siteNav length-1 without Services). */
export const quickLinkTones = [
  "bg-ocean-blue",
  "bg-golden-pollen",
  "bg-primary",
  "bg-candy-orange",
] as const;
