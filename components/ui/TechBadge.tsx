import { skillIcons } from "@/lib/skill-icons";

export function TechBadge({ children }: { children: React.ReactNode }) {
  const tech = String(children);
  const Icon = skillIcons[tech];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-100 ring-1 ring-zinc-600">
      {Icon ? <Icon className="size-3.5 shrink-0" aria-hidden /> : null}
      {tech}
    </span>
  );
}
