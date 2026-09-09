import Markdown from "react-markdown";

export function MarkdownBody({
  source,
  className = "",
}: {
  source: string;
  className?: string;
}) {
  return (
    <div
      className={`max-w-3xl space-y-5 text-base leading-7 text-muted sm:text-lg ${className}`}
    >
      <Markdown
        components={{
          p: ({ children }) => <p>{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-accent underline-offset-4 transition-colors hover:text-hover hover:underline">
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-2 pl-5">{children}</ul>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
        }}
      >
        {source}
      </Markdown>
    </div>
  );
}
