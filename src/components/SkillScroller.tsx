export function SkillScroller({
  skills,
  className = "",
}: {
  skills: string[];
  className?: string;
}) {
  const items = [...new Set(skills.map((skill) => skill.trim()).filter(Boolean))];

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={`flex flex-wrap gap-3 py-1 sm:gap-4 ${className}`}>
      {items.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-line bg-panel px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-heading sm:text-sm"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
