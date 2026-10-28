import { Plus } from "lucide-react";
import { faqItems } from "../../data/faq";
import { SectionHeading } from "../ui/SectionHeading";

export function FAQSection() {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="04 — Preguntas"
            title={
              <>
                Respuestas claras,
                <span className="italic text-brand-soft">
                  {" "}
                  antes de avanzar.
                </span>
              </>
            }
            description="Información general sobre el proceso, la futura calculadora y los límites de la asesoría."
          />
        </div>

        <div className="border-t border-line">
          {faqItems.map((item, index) => (
            <details
              key={item.id}
              className="faq-item group border-b border-line"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 sm:py-6">
                <span className="flex gap-4">
                  <span className="mt-0.5 hidden text-[0.62rem] font-semibold tracking-[0.1em] text-gold-ink sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[0.95rem] font-medium leading-relaxed text-ink sm:text-[1rem]">
                    {item.question}
                  </span>
                </span>
                <span className="faq-toggle mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line text-brand transition-transform duration-200">
                  <Plus
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                </span>
              </summary>
              <div className="pb-6 sm:pl-9 sm:pr-12">
                <p className="max-w-2xl text-[0.86rem] leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}

          <p className="mt-5 text-[0.68rem] leading-relaxed text-muted">
            Las respuestas son generales y no constituyen asesoría legal,
            aduanera ni una cotización.
          </p>
        </div>
      </div>
    </section>
  );
}
