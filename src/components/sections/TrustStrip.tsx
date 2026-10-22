import {
  Calculator,
  MessagesSquare,
  Route,
  Shirt,
  type LucideIcon,
} from "lucide-react";
import { trustPoints } from "../../data/site";

const iconMap: Record<(typeof trustPoints)[number]["icon"], LucideIcon> = {
  textil: Shirt,
  ruta: Route,
  costos: Calculator,
  conversacion: MessagesSquare,
};

export function TrustStrip() {
  return (
    <section
      aria-label="Principios de trabajo"
      className="relative border-y border-white/10 bg-brand text-ivory"
    >
      <div
        aria-hidden="true"
        className="woven-dark absolute inset-0 opacity-60"
      />
      <div className="container-page relative grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => {
          const Icon = iconMap[point.icon];

          return (
            <div
              key={point.title}
              className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4"
            >
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-gold">
                <Icon
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.6}
                />
              </span>
              <div>
                <p className="text-[0.82rem] font-medium tracking-[0.01em] text-ivory">
                  {point.title}
                </p>
                <p className="mt-0.5 text-[0.72rem] leading-relaxed text-ivory/70">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
