import { Calculator, Info, Plane } from "lucide-react";

const summaryRows = [
  { label: "Producto", value: "Por definir" },
  { label: "Ruta", value: "Origen → Destino" },
  { label: "Incoterm", value: "Por definir" },
  { label: "Modo", value: "Por definir" },
];

export function CalculatorPlaceholder() {
  return (
    <section
      id="calculadora"
      aria-labelledby="calculadora-titulo"
      className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-panel"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand">
            <Calculator
              aria-hidden="true"
              className="size-[1.15rem]"
              strokeWidth={1.6}
            />
          </span>
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Módulo 01
            </p>
            <h2
              id="calculadora-titulo"
              className="mt-0.5 font-sans text-[0.95rem] font-semibold tracking-[-0.01em] text-ink"
            >
              Calculadora de exportación
            </h2>
          </div>
        </div>
        <span className="self-start rounded-full border border-gold/45 bg-gold/10 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-gold-ink sm:mt-1">
          En preparación
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-2xl border border-dashed border-brand/25 bg-ivory/65 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <span className="mx-auto block size-2.5 rounded-full border border-brand bg-white" />
              <span className="mt-2 block text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Origen
              </span>
            </div>

            <div className="relative flex-1">
              <div className="border-t border-dashed border-brand/30" />
              <span className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-brand">
                <Plane
                  aria-hidden="true"
                  className="size-3.5 -rotate-12"
                  strokeWidth={1.6}
                />
              </span>
            </div>

            <div className="text-center">
              <span className="mx-auto block size-2.5 rounded-full bg-gold" />
              <span className="mt-2 block text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Destino
              </span>
            </div>
          </div>

          <dl className="mt-6 border-t border-line/80">
            {summaryRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-line/70 py-2.5"
              >
                <dt className="text-[0.72rem] text-muted">{row.label}</dt>
                <dd className="text-[0.72rem] font-medium text-muted">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-brand-soft">
                Costo estimado
              </p>
              <p
                aria-hidden="true"
                className="mt-1 font-display text-[1.9rem] leading-none text-ink/30"
              >
                — —
              </p>
            </div>
            <span className="whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 text-[0.56rem] uppercase tracking-[0.12em] text-muted">
              Moneda por confirmar
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-3 rounded-xl bg-brand/[0.045] px-4 py-3.5">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand-soft"
            strokeWidth={1.7}
          />
          <p className="text-[0.75rem] leading-relaxed text-muted">
            <span className="font-medium text-ink">
              Espacio reservado para la calculadora referencial.
            </span>{" "}
            Se integrará cuando estén confirmadas las variables, reglas y
            tarifas. No emitirá cotizaciones en firme.
          </p>
        </div>
      </div>
    </section>
  );
}
