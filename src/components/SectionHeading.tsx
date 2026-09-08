export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="heading mt-3 text-3xl leading-snug text-foreground sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
