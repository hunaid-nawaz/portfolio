import Image from "next/image";
import type { Person } from "@/lib/types";

export function Portrait({
  person,
  className = "",
  priority = false,
  size = "lg",
}: {
  person: Person;
  className?: string;
  priority?: boolean;
  size?: "md" | "lg";
}) {
  if (!person.photo) {
    return null;
  }

  const px = size === "lg" ? "h-56 w-56 sm:h-72 sm:w-72" : "h-40 w-40 sm:h-48 sm:w-48";

  return (
    <figure className={`flex flex-col items-center text-center ${className}`}>
      <div
        className={`relative overflow-hidden rounded-full border-2 border-accent bg-panel ring-4 ring-line ${px}`}
      >
        <Image
          src={person.photo}
          alt={person.photoAlt || person.name}
          width={640}
          height={640}
          priority={priority}
          className="h-full w-full object-cover object-[center_12%]"
          sizes="288px"
        />
      </div>
      <figcaption className="mt-4">
        <p className="font-semibold">{person.name}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {person.headline}
        </p>
      </figcaption>
    </figure>
  );
}
