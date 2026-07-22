import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { inter, spaceGrotesk } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "COPCRXSH — Full-Stack Developer",
    template: "%s — COPCRXSH",
  },
  description:
    "Full-stack developer building fast, reliable web products from interface to infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
