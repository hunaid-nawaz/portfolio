import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="heading mt-4 text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">That route doesn’t exist on this site.</p>
      <Link href="/" className="mt-8 inline-block text-accent transition-colors hover:text-hover hover:underline">
        Back home
      </Link>
    </Container>
  );
}
