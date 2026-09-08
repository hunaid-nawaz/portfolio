import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { Portrait } from "@/components/Portrait";
import { SectionHeading } from "@/components/SectionHeading";
import { getCopy, getPerson, getRoles, getToolbox } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const person = getPerson();
  const copy = getCopy();
  const roles = getRoles();
  const toolbox = getToolbox();
  const paragraphs = person.bio.split(/\n\n+/);

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow={copy.aboutEyebrow}
        title={copy.aboutTitle}
        body={copy.aboutLead}
      />

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-3xl space-y-5 text-base leading-7 text-muted sm:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <Portrait person={person} className="max-w-xs lg:max-w-none" />
      </div>

      <section className="mt-20 border-t border-line pt-16">
        <h2 className="heading text-3xl sm:text-4xl">
          Roles, in order
        </h2>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {roles.map((role) => (
            <li key={role.slug} className="grid gap-4 py-10 sm:grid-cols-[10rem_1fr]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {role.period || "—"}
              </p>
              <div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="mt-1 text-sm text-accent">
                  {role.org}
                  {role.orgDetail ? ` · ${role.orgDetail}` : ""}
                </p>
                <div className="mt-4">
                  <MarkdownBody source={role.body} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow={copy.toolboxEyebrow}
          title={copy.toolboxTitle}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {toolbox.map((group) => (
            <article key={group.id} className="border border-line bg-panel p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {group.label}
              </p>
              <h3 className="heading mt-3 text-2xl">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
