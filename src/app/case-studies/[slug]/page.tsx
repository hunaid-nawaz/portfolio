import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getPost, getPosts } from "@/lib/content";

type CaseStudyPostParams = { slug: string };

export function generateStaticParams() {
  const posts = getPosts().map((post) => ({ slug: post.slug }));
  // Static export requires at least one path for a dynamic route.
  return posts.length > 0 ? posts : [{ slug: "_" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyPostParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Case Studies" };
  }
  return { title: post.title };
}

export default async function CaseStudyPostPage({
  params,
}: {
  params: Promise<CaseStudyPostParams>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      {post.kicker ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {post.kicker}
        </p>
      ) : null}
      <h1 className="heading mt-4 max-w-4xl text-4xl sm:text-5xl">
        {post.title}
      </h1>
      {post.date ? (
        <p className="mt-4 font-mono text-xs text-muted">{post.date}</p>
      ) : null}
      <div className="mt-12 border-t border-line pt-12">
        <MarkdownBody source={post.body} />
      </div>
    </Container>
  );
}
