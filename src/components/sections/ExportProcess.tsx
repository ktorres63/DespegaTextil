import { processSteps } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import portImage from "../../assets/puerto-contenedores.webp";

export function ExportProcess() {
  return (
    <section id="proceso" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="02 — Proceso"
            title={
              <>
                De la primera pregunta
                <span className="italic text-brand-soft"> al siguiente paso.</span>
              </>
            }
            description="Un recorrido simple, con las variables a la vista y sin prometer lo que depende de terceros."
          />

          <figure className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-cream">
            <img
              src={portImage}
              alt="Contenedores apilados y grúas en un puerto, imagen referencial de comercio internacional."
              width={900}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-5 pb-5 pt-16 text-ivory">
              <span className="inline-flex rounded-full border border-white/25 bg-ink/45 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm">
                Imagen referencial
              </span>
              <p className="mt-1.5 font-display text-[1.15rem] leading-snug">
                La ruta se define con datos reales, no con supuestos.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="lg:pt-4">
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-10 left-[1.1rem] top-3 w-px bg-line"
            />
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className={`relative flex gap-5 sm:gap-7 ${
                  index === processSteps.length - 1 ? "" : "pb-9 sm:pb-11"
                }`}
              >
                <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-line bg-ivory text-[0.64rem] font-semibold tracking-[0.06em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-brand-soft">
                    Etapa {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-sans text-[1.05rem] font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.88rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="ml-14 mt-2 rounded-xl border border-line bg-ivory/70 px-5 py-4 sm:ml-[4rem]">
            <p className="text-[0.75rem] leading-relaxed text-muted">
              <span className="font-medium text-ink">Importante:</span> los
              requisitos, costos y tiempos finales dependen del producto, la
              ruta, el operador y la normativa aplicable. Este recorrido ordena
              el análisis; no reemplaza una cotización ni una validación
              aduanera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
