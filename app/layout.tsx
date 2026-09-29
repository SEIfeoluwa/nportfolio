import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ifeoluwa Adebisi | Portfolio",
  description: "Software engineer portfolio.",
  icons: {
    icon: "/favicon copy.ico",
  },
};

const navLinks = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <header className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-6 px-6 pt-10 sm:px-10">
          <Link href="/" className="text-sm font-medium text-ink">
            Ifeoluwa Adebisi
          </Link>
          <nav className="flex items-baseline gap-6 text-sm text-ink-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
