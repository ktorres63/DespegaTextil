import { SectionHeading } from "../ui/SectionHeading";
import textileImage from "../../assets/textiles.webp";

const principles = [
  {
    number: "01",
    title: "Claridad antes que promesas.",
    description:
      "Explicamos qué se puede estimar, qué falta confirmar y qué depende de terceros.",
  },
  {
    number: "02",
    title: "Supuestos visibles.",
    description:
      "Cada cifra referencial debe poder rastrearse hasta una regla o una fuente acordada.",
  },
  {
    number: "03",
    title: "Especialistas complementarios.",
    description:
      "Ordenamos el panorama, pero no reemplazamos al agente de aduanas ni al operador logístico.",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-ivory py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
        <div className="relative mb-8 lg:mb-0">
          <figure className="relative overflow-hidden rounded-2xl border border-line">
            <img
              src={textileImage}
              alt="Prendas de punto en tonos neutros colgadas en un perchero, imagen referencial de producción textil."
              width={900}
              height={675}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
            />
            <figcaption className="absolute inset-x-0 top-0 flex justify-end p-4">
              <span className="rounded-full border border-white/30 bg-ink/35 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-ivory backdrop-blur-sm">
                Imagen referencial
              </span>
            </figcaption>
          </figure>

          <div className="absolute -bottom-8 right-3 max-w-[16rem] rounded-xl border border-white/10 bg-brand p-5 text-ivory shadow-lift sm:-right-5 sm:p-6">
            <span aria-hidden="true" className="block h-px w-7 bg-gold" />
            <p className="mt-3 font-display text-[1.2rem] italic leading-snug">
              “La claridad también es parte del producto.”
            </p>
            <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ivory/70">
              Principio de trabajo
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="03 — Nosotros"
            title={
              <>
                Una mirada textil,
                <span className="italic text-brand-soft">
                  {" "}
                  una lógica de exportación.
                </span>
              </>
            }
            description="Despega Textil acerca la producción textil peruana a compradores internacionales mediante información clara sobre rutas, costos y documentación."
          />

          <p className="mt-5 max-w-xl text-[0.92rem] leading-relaxed text-muted">
            Creemos que una exportación empieza mucho antes del embarque: en la
            ficha técnica, el embalaje, la partida arancelaria y una
            conversación honesta sobre lo que el mercado exige.
          </p>

          <div className="mt-9 grid gap-0 border-t border-line">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-5"
              >
                <span className="pt-0.5 text-[0.66rem] font-semibold tracking-[0.14em] text-gold-ink">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-sans text-[0.92rem] font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[0.68rem] leading-relaxed text-muted">
            La razón social, el domicilio y los canales de contacto se
            publicarán cuando el cliente los valide.
          </p>
        </div>
      </div>
    </section>
  );
}
