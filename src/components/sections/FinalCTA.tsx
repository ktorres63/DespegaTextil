import { ActionButton } from "../ui/ActionButton";
import { ActionLink } from "../ui/ActionLink";
import { openAssistant } from "../../lib/assistant";
import { siteConfig } from "../../data/site";

export function FinalCTA() {
  return (
    <section id="contacto" className="bg-ivory pb-20 sm:pb-24 lg:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand px-6 py-12 text-ivory sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="woven-dark absolute inset-0 opacity-70"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 size-[26rem] rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/3 size-[22rem] rounded-full border border-gold/15"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div>
              <p className="flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ivory/70">
                <span aria-hidden="true" className="h-px w-7 bg-gold" />
                Siguiente paso
              </p>
              <h2 className="mt-5 max-w-xl text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-ivory">
                Tu próxima exportación merece
                <span className="italic text-gold"> una ruta clara.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ivory/70">
                Explora el proceso o consulta las respuestas guiadas del
                asistente. Los canales de contacto se habilitarán cuando estén
                verificados.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton variant="light" onClick={openAssistant}>
                  Abrir asistente
                </ActionButton>
                <ActionLink href="#preguntas" variant="outlineLight">
                  Revisar preguntas
                </ActionLink>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.055] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ivory/70">
                  Canales oficiales
                </p>
                <span className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-gold-light">
                  Por confirmar
                </span>
              </div>

              <dl className="mt-5">
                {siteConfig.contactChannels.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3.5"
                  >
                    <dt className="text-[0.78rem] text-ivory/70">
                      {channel.label}
                    </dt>
                    <dd className="text-[0.8rem] font-medium text-ivory">
                      {channel.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-[0.68rem] leading-relaxed text-ivory/65">
                No publicamos correos, teléfonos ni redes hasta que el cliente
                los valide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
