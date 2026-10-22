import logoExportaTextil from "../../assets/exportaTextil.png";

interface LogoProps {
  tone?: "dark" | "light";
  compact?: boolean;
}

export function Logo({ tone = "dark", compact = false }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={logoExportaTextil}
        alt=""
        aria-hidden="true"
        width={395}
        height={294}
        decoding="async"
        className={`h-10 w-auto shrink-0 object-contain sm:h-12 ${
          isLight ? "brightness-0 invert opacity-90" : ""
        }`}
      />
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.22rem] leading-none tracking-[-0.02em] ${
            isLight ? "text-ivory" : "text-ink"
          }`}
        >
          DESPEGA
        </span>
        {!compact ? (
          <span
            className={`mt-1.5 text-[0.55rem] self-center font-semibold uppercase tracking-[0.24em] ${
              isLight ? "text-ivory/55" : "text-brand-soft"
            }`}
          >
            textil
          </span>
        ) : null}
      </span>
    </span>
  );
}
