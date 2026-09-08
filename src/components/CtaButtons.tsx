import type { Person } from "@/lib/types";
import { contractMailto, hireMailto } from "@/lib/content";

export function CtaButtons({
  person,
  size = "md",
}: {
  person: Person;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={hireMailto(person)}
        className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold text-background transition hover:brightness-110 ${pad}`}
      >
        Hire me
      </a>
      <a
        href={contractMailto(person)}
        className={`inline-flex items-center justify-center rounded-full border border-line bg-transparent font-semibold text-foreground transition hover:border-accent hover:text-accent ${pad}`}
      >
        Work with me
      </a>
    </div>
  );
}
