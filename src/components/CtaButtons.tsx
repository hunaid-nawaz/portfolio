import type { Person } from "@/lib/types";
import { mailtoHref } from "@/lib/links";

export function CtaButtons({
  person,
  size = "md",
}: {
  person: Person;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm";

  return (
    <a
      href={mailtoHref(person)}
      className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold text-background transition-colors hover:bg-hover ${pad}`}
    >
      Email me
    </a>
  );
}
