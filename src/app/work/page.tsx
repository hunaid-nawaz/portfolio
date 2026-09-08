import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getCaseStudies, getCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  const copy = getCopy();
  const studies = getCaseStudies();

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow={copy.workEyebrow}
        title={copy.workTitle}
        body={copy.workIntro}
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </Container>
  );
}
