type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      {label && (
        <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-zinc-500 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
