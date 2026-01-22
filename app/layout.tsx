import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-lg font-semibold text-zinc-900">
                Ifeoluwa Adebisi
              </Link>
              <a
                href="https://github.com/SEIfeoluwa"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/seii/"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-zinc-700">
              <Link href="/" className="hover:text-zinc-900">
                Home
              </Link>
              <Link href="/contact" className="hover:text-zinc-900">
                Contact Me!
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
