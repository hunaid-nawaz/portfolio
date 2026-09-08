import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getCaseStudies, getCaseStudy } from "@/lib/content";

type WorkParams = { slug: string };

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Work" };
  }
  return {
    title: study.title,
    description: study.outcome,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {study.kicker}
      </p>
      <h1 className="heading mt-4 max-w-4xl text-4xl sm:text-5xl">
        {study.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{study.outcome}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {study.stack.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-14 border-t border-line pt-12">
        <MarkdownBody source={study.body} />
      </div>
    </Container>
  );
}
