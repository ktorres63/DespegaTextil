import {
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Route,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIcon } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  diagnostico: ClipboardCheck,
  ruta: Route,
  costos: Calculator,
  documentos: FileCheck2,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="relative bg-ivory py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="01 — Servicios"
            title={
              <>
                Lo que necesitas para exportar,
                <span className="italic text-brand-soft"> en orden.</span>
              </>
            }
            description="Cuatro frentes de trabajo para pasar de la intención a una operación con información verificable. El alcance exacto se acuerda caso por caso."
          />
          <p className="hidden border-l border-line pl-5 text-[0.72rem] leading-relaxed text-muted lg:block">
            Contenido de servicios provisional, sujeto a validación con el
            cliente.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/30 hover:shadow-lift sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/[0.065] text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ivory">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.55}
                    />
                  </span>
                  <span className="text-[0.68rem] font-medium tracking-[0.14em] text-muted">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 font-sans text-[1.08rem] font-semibold tracking-[-0.015em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-line/70 pt-4">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-ink/70"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] block size-1 shrink-0 rounded-full bg-gold"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-6 flex max-w-4xl items-start gap-2.5 text-[0.72rem] leading-relaxed text-muted">
          <span
            aria-hidden="true"
            className="mt-2 block h-px w-5 shrink-0 bg-gold"
          />
          La orientación comercial y logística no sustituye a un agente de
          aduanas, un operador logístico ni una cotización profesional.
        </p>
      </div>
    </section>
  );
}
