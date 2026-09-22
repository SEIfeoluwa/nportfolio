import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ledgerSerif = Source_Serif_4({
  variable: "--font-ledger-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ifeoluwa Adebisi | Portfolio",
  description: "Software engineer portfolio.",
  icons: {
    icon: "/favicon copy.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ledgerSerif.variable} antialiased`}
      >
        <header className="border-b-4 border-double border-rule-strong bg-paper-elevated">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <Link href="/" className="font-serif text-lg font-semibold text-ink">
              Ifeoluwa Adebisi
            </Link>
            <div className="ledger-label flex items-center gap-6 text-xs text-ink-muted">
              <Link href="/#projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="/#experience" className="hover:text-accent">
                Experience
              </Link>
              <Link href="/#skills" className="hover:text-accent">
                Skills
              </Link>
              <Link href="/#contact" className="hover:text-accent">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
