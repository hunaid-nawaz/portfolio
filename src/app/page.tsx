import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { CtaButtons } from "@/components/CtaButtons";
import { Portrait } from "@/components/Portrait";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getCopy,
  getFeaturedCaseStudies,
  getLanes,
  getPerson,
} from "@/lib/content";

export default function Home() {
  const person = getPerson();
  const copy = getCopy();
  const lanes = getLanes();
  const studies = getFeaturedCaseStudies();

  return (
    <div className="mesh">
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {person.kicker}
            </p>
            <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-6xl">
              {person.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              {person.heroAccent}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              I’m <strong className="font-semibold text-foreground">{person.name}</strong>{" "}
              — {person.roleLabel} at {person.company}. {person.yearsExperience}+ years
              across {person.stackLine}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <CtaButtons person={person} size="lg" />
              <Link
                href="/work"
                className="text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
              >
                See the work ↘
              </Link>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <Portrait person={person} priority className="max-w-md lg:max-w-none" />
            <dl className="grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-background p-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Years in production
                </dt>
                <dd className="heading mt-3 text-5xl text-accent">
                  {person.yearsExperience}+
                </dd>
              </div>
              <div className="bg-background p-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Lanes
                </dt>
                <dd className="heading mt-3 text-5xl">4</dd>
              </div>
              <div className="col-span-2 bg-background p-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Now
                </dt>
                <dd className="mt-3 text-lg font-semibold">
                  {person.roleLabel} · {person.company}
                </dd>
                <p className="mt-1 text-sm text-muted">{person.stackLine}</p>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow={copy.lanesEyebrow} title={copy.lanesTitle} />
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {lanes.map((lane) => (
              <li key={lane.id} className="bg-background p-7 sm:p-8">
                <p className="font-mono text-[11px] text-accent">{lane.index}</p>
                <h3 className="heading mt-3 text-2xl">{lane.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
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
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow={copy.workEyebrow}
            title={copy.workTitle}
            body={copy.workIntro}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
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
