import { CalculatorPlaceholder } from "../calculator/CalculatorPlaceholder";
import { ActionLink } from "../ui/ActionLink";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-ivory"
    >
      <div
        aria-hidden="true"
        className="grid-paper absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black_5%,transparent_88%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-24 size-[34rem] rounded-full border border-brand/[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-56 bottom-0 size-[28rem] rounded-full border border-gold/10"
      />

      <div className="container-page relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16 lg:py-24 xl:py-28">
        <div>
          <h1
            id="hero-titulo"
            className="mt-7 text-[clamp(2.85rem,7.2vw,5.15rem)] leading-[0.98] tracking-[-0.04em] text-ink"
          >
            Lleva tus productos al mundo con
            <span className="mt-1  block italic tracking-[-0.03em] text-brand-soft">
              claridad.
            </span>
            y confianza
          </h1>

          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted sm:text-[1.08rem]">
            Acompañamos a productores y empresas peruanas a comprender costos de
            exportación, conquistar mercados internacionales y tomar decisiones
            comerciales certeras y rentables.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionLink href="#servicios">Explorar servicios</ActionLink>
            <ActionLink href="#proceso" variant="secondary">
              Conoce el proceso
            </ActionLink>
          </div>

          <div className="mt-9 flex items-start gap-3 border-t border-line/80 pt-5 text-[0.76rem] leading-relaxed text-muted">
            <span
              aria-hidden="true"
              className="mt-2 block h-px w-7 shrink-0 bg-gold"
            />
            <p>
              Estimaciones referenciales, no cotizaciones en firme. Cada
              operación se valida con los especialistas correspondientes.
            </p>
          </div>
        </div>

        <div className="lg:pl-2">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Portada / Costos
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-muted">
              Módulo reservado
            </span>
          </div>
          <CalculatorPlaceholder />
        </div>
      </div>
    </section>
  );
}
