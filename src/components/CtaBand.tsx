import type { Person } from "@/lib/types";
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
      <Container className="py-20 sm:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="heading mt-4 max-w-3xl text-3xl sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {body}
        </p>
        <div className="mt-8">
          <CtaButtons person={person} size="lg" />
        </div>
      </Container>
    </section>
  );
}
