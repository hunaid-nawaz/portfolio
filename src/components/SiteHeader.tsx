"use client";

import Link from "next/link";
import { useState } from "react";
import type { Person } from "@/lib/types";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export function SiteHeader({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="heading text-lg">
          {person.shortName.toUpperCase()}
          <span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${person.email}`}
              className="rounded-full border border-line px-4 py-1.5 text-foreground transition hover:border-accent hover:text-accent"
            >
              Email me
            </a>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-background md:hidden">
          <Container className="flex flex-col gap-4 py-5 text-base">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a href={`mailto:${person.email}`} className="text-accent">
              Email me
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
