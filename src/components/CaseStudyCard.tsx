import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex min-w-0 flex-col border border-line bg-panel p-6 transition-colors hover:border-hover sm:p-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {study.kicker}
        {study.anonymized ? ", unnamed client" : ""}
      </p>
      <h3 className="heading mt-3 break-words text-2xl transition-colors group-hover:text-hover sm:text-3xl">
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
