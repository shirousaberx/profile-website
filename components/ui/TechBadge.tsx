export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-100 ring-1 ring-zinc-600">
      {children}
    </span>
  );
}
