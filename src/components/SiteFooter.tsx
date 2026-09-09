import type { Person } from "@/lib/types";
import { telHref } from "@/lib/links";
import { Container } from "./Container";

export function SiteFooter({ person }: { person: Person }) {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/90 backdrop-blur-md">
      <Container className="flex min-w-0 flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <div className="flex min-w-0 items-baseline gap-3">
          <p className="heading shrink-0 text-base sm:text-lg">
            {person.shortName.toUpperCase()}
            <span className="text-accent">.</span>
          </p>
          <p className="hidden truncate text-sm text-muted md:block">
            {person.headline}, {person.roleLabel}, {person.company}
          </p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={person.linkedin}
            className="text-accent transition-colors hover:text-hover"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {person.github ? (
            <a
              href={person.github}
              className="text-accent transition-colors hover:text-hover"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          <a
            href={`mailto:${person.email}`}
            className="break-all text-accent transition-colors hover:text-hover sm:break-normal"
          >
            {person.email}
          </a>
          {person.phone ? (
            <a
              href={telHref(person)}
              className="text-accent transition-colors hover:text-hover"
            >
              {person.phone}
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
