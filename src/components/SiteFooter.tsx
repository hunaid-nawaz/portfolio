import type { Person } from "@/lib/types";
import { Container } from "./Container";

export function SiteFooter({ person }: { person: Person }) {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="heading text-xl">
            {person.shortName.toUpperCase()}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            {person.headline} · {person.roleLabel} · {person.company}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href={person.linkedin}
            className="text-muted transition hover:text-accent"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {person.github ? (
            <a
              href={person.github}
              className="text-muted transition hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          <a
            href={`mailto:${person.email}`}
            className="text-muted transition hover:text-accent"
          >
            {person.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
