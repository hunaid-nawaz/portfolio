import type { Person } from "@/lib/types";
import { telHref } from "@/lib/links";
import { CtaButtons } from "./CtaButtons";
import { Container } from "./Container";

export function CtaBand({
  person,
  eyebrow,
  title,
  body,
}: {
  person: Person;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="border-t border-line">
      <Container className="py-12 sm:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="heading mt-4 max-w-3xl text-3xl sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-justify text-base leading-7 text-muted sm:text-lg">
          {body}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <CtaButtons person={person} size="lg" />
          {person.phone ? (
            <a
              href={telHref(person)}
              className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-hover hover:underline"
            >
              {person.phone}
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
