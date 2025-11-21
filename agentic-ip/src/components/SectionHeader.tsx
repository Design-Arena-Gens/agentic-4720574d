type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 text-start">
      {eyebrow ? (
        <span className="text-sm font-medium text-cyan-300/80 tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-medium font-[var(--font-changa)] text-white">
        {title}
      </h2>
      {description ? (
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
