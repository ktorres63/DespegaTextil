import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`.trim()}
    >
      <p
        className={`flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${
          align === "center" ? "justify-center" : ""
        } ${isLight ? "text-ivory/75" : "text-brand-soft"}`}
      >
        <span aria-hidden="true" className="h-px w-7 bg-gold" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-[clamp(2.1rem,4.2vw,3.45rem)] leading-[1.05] tracking-[-0.025em] ${
          isLight ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-[0.98rem] leading-relaxed sm:text-[1.05rem] ${
            align === "center" ? "mx-auto" : ""
          } ${isLight ? "text-ivory/75" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
