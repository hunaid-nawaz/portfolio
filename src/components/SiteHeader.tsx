"use client";

import Link from "next/link";
import { useState } from "react";
import type { Person } from "@/lib/types";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { mailtoHref, telHref } from "@/lib/links";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case studies" },
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
          <nav className="hidden items-center gap-5 text-sm text-accent lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-hover"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={mailtoHref(person)}
              className="rounded-full border border-accent px-4 py-1.5 text-accent transition-colors hover:border-hover hover:bg-hover hover:text-background"
            >
              Email me
            </a>
            {person.phone ? (
              <a
                href={telHref(person)}
                className="rounded-full border border-accent px-4 py-1.5 text-accent transition-colors hover:border-hover hover:bg-hover hover:text-background"
              >
                Call
              </a>
            ) : null}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:border-hover hover:bg-hover hover:text-background lg:hidden"
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
        <div className="border-t border-line bg-background lg:hidden">
          <Container className="flex flex-col gap-4 py-5 text-base">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-accent transition-colors hover:text-hover"
              >
                {link.label}
              </Link>
            ))}
            <a href={mailtoHref(person)} className="text-accent transition-colors hover:text-hover">
              Email me
            </a>
            {person.phone ? (
              <a href={telHref(person)} className="text-accent transition-colors hover:text-hover">
                {person.phone}
              </a>
            ) : null}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
