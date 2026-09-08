import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getPerson, siteUrl } from "@/lib/content";
import { personDescription } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  const person = getPerson();
  const description = personDescription();

  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: `${person.name} — ${person.headline}`,
      template: `%s — ${person.name}`,
    },
    description,
    openGraph: {
      title: `${person.name} — ${person.headline}`,
      description,
      type: "website",
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  const person = getPerson();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader person={person} />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter person={person} />
      </body>
    </html>
  );
}
