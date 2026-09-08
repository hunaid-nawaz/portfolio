import Image from "next/image";
import type { Person } from "@/lib/types";

export function Portrait({
  person,
  className = "",
  priority = false,
}: {
  person: Person;
  className?: string;
  priority?: boolean;
}) {
  if (!person.photo) {
    return null;
  }

  return (
    <figure className={`overflow-hidden border border-line bg-panel ${className}`}>
      <Image
        src={person.photo}
        alt={person.photoAlt || person.name}
        width={900}
        height={1200}
        priority={priority}
        className="aspect-[3/4] h-auto w-full object-cover object-[center_18%]"
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
      />
      <figcaption className="border-t border-line px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {person.headline}
        </p>
        <p className="mt-1 font-semibold">{person.name}</p>
      </figcaption>
    </figure>
  );
}
