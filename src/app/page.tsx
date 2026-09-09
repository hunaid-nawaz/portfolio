import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { CtaButtons } from "@/components/CtaButtons";
import { Portrait } from "@/components/Portrait";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillScroller } from "@/components/SkillScroller";
import {
  getCopy,
  getFeaturedCaseStudies,
  getLanes,
  getPerson,
} from "@/lib/content";

function withBoldSixYears(text: string) {
  const phrase = "six years";
  const index = text.indexOf(phrase);
  if (index === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold text-heading">{phrase}</strong>
      {text.slice(index + phrase.length)}
    </>
  );
}

export default function Home() {
  const person = getPerson();
  const copy = getCopy();
  const lanes = getLanes();
  const studies = getFeaturedCaseStudies();
  const skills = person.stackLine.split(", ").filter(Boolean);

  return (
    <div className="mesh">
      <section className="border-b border-line">
        <Container className="grid min-w-0 gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {person.kicker}
            </p>
            <h1 className="heading mt-5 break-words text-2xl sm:text-3xl lg:text-4xl">
              {person.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-justify text-lg leading-8 text-muted">
              {person.heroAccent}
            </p>
            <div className="mt-5 max-w-2xl space-y-4 text-justify text-base leading-7 text-muted">
              {person.bio.split(/\n\n+/).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{withBoldSixYears(paragraph)}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <CtaButtons person={person} size="lg" />
              <Link
                href="/work"
                className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-hover hover:underline"
              >
                See the work ↘
              </Link>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-hover hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col items-center gap-6">
            <Portrait person={person} priority />
            <dl className="w-full min-w-0 border border-line">
              <div className="grid grid-cols-2 gap-px bg-line">
                <div className="min-w-0 bg-background p-4 sm:p-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Experience
                  </dt>
                  <dd className="heading mt-3 text-4xl sm:text-5xl">
                    {person.yearsExperience}+
                  </dd>
                </div>
                <div className="min-w-0 bg-background p-4 sm:p-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <a
                      href="#lanes"
                      className="transition-colors hover:text-hover"
                    >
                      Lanes
                    </a>
                  </dt>
                  <dd className="heading mt-3 text-4xl sm:text-5xl">
                    <a href="#lanes" className="transition-colors hover:text-hover">
                      {lanes.length}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="border-t border-line bg-background p-4 sm:p-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Now
                </dt>
                <dd className="mt-3 text-lg font-semibold">
                  {person.roleLabel}, {person.company}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-10 sm:py-12">
          <SectionHeading title={copy.skillsEyebrow} />
          <div className="mt-5 min-w-0">
            <SkillScroller skills={skills} />
          </div>
        </Container>
      </section>

      <section id="lanes" className="scroll-mt-20 border-b border-line">
        <Container className="py-10 sm:py-12">
          <SectionHeading title={copy.lanesEyebrow} />
          <div className="mt-4 border-b border-line" />
          <ol className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
            {lanes.map((lane) => (
              <li key={lane.id} className="bg-background p-7 sm:p-8">
                <p className="font-mono text-[11px] text-accent">{lane.index}</p>
                <h3 className="heading mt-3 text-2xl">{lane.title}</h3>
                <p className="mt-3 text-justify text-sm leading-6 text-muted sm:text-base">
                  {lane.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {lane.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <SectionHeading
            eyebrow={copy.workEyebrow}
            title={copy.workTitle}
            body={copy.workIntro}
            bodyClassName="text-justify"
          />
          <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        person={person}
        eyebrow={copy.ctaEyebrow}
        title={copy.ctaTitle}
        body={copy.ctaBody}
      />
    </div>
  );
}
