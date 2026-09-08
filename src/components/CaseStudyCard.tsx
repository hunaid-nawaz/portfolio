import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col border border-line bg-panel p-6 transition hover:border-accent/60 sm:p-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {study.kicker}
        {study.anonymized ? " · Unnamed client" : ""}
      </p>
      <h3 className="heading mt-3 text-2xl group-hover:text-accent sm:text-3xl">
        {study.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-base">
        {study.outcome}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
