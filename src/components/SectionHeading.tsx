export function SectionHeading({
  eyebrow,
  title,
  body,
  bodyClassName,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  bodyClassName?: string;
}) {
  const eyebrowClass =
    "font-mono text-[11px] uppercase tracking-[0.22em] text-accent";

  return (
    <div className="max-w-3xl">
      {title ? (
        <>
          {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
          <h2
            className={`heading break-words text-3xl leading-snug sm:text-4xl ${eyebrow ? "mt-3" : ""}`}
          >
            {title}
          </h2>
        </>
      ) : eyebrow ? (
        <h2 className={eyebrowClass}>{eyebrow}</h2>
      ) : null}
      {body ? (
        <p
          className={`mt-4 text-base leading-7 text-muted sm:text-lg ${bodyClassName ?? "max-w-2xl"}`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
