import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getCopy, getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies",
};

export default function CaseStudiesPage() {
  const copy = getCopy();
  const posts = getPosts();

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading eyebrow={copy.writingEyebrow} title={copy.writingTitle} />

      {posts.length === 0 ? (
        <div className="mt-12 max-w-xl border border-line bg-panel p-8">
          <h2 className="heading text-2xl">
            {copy.writingEmptyTitle}
          </h2>
          <p className="mt-3 text-muted">{copy.writingEmptyBody}</p>
        </div>
      ) : (
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <Link href={`/case-studies/${post.slug}`} className="group block">
                {post.kicker ? (
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {post.kicker}
                  </p>
                ) : null}
                <h2 className="heading mt-2 text-2xl transition-colors group-hover:text-hover">
                  {post.title}
                </h2>
                {post.date ? (
                  <p className="mt-2 font-mono text-xs text-muted">{post.date}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
