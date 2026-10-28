import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";
import type { ProductCategory } from "../../data/productGuide";
import type { ProductSummaryRow } from "../../lib/productGuide";
import { actionClasses } from "../ui/actionStyles";

interface ProductGuideResultProps {
  category: ProductCategory;
  summary: readonly ProductSummaryRow[];
  verificationPoints: readonly string[];
  disclaimer: string;
  tariffReference?: {
    nationalSubheading: string;
    description?: string;
    source: string;
    verifiedAt: string;
  };
  onEdit: () => void;
}

export function ProductGuideResult({
  category,
  summary,
  verificationPoints,
  disclaimer,
  tariffReference,
  onEdit,
}: ProductGuideResultProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div>
      <h4
        ref={headingRef}
        tabIndex={-1}
        className="scroll-mt-28 font-sans text-[1rem] font-semibold tracking-[-0.01em] text-ink"
      >
        Resumen del producto
      </h4>
      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">
        Categoría seleccionada:{" "}
        <span className="font-medium text-ink">{category.label}</span>. Revisa
        las características que faltan confirmar antes de clasificar el
        producto.
      </p>

      <dl className="mt-4 grid gap-x-10 sm:grid-cols-2">
        <div className="flex flex-col gap-0.5 border-b border-line/70 py-3">
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Categoría
          </dt>
          <dd className="text-[0.84rem] text-ink">{category.label}</dd>
        </div>
        {summary.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-0.5 border-b border-line/70 py-3"
          >
            <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">
              {row.label}
            </dt>
            <dd className="text-[0.84rem] text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>

      <h4 className="mt-7 font-sans text-[1rem] font-semibold tracking-[-0.01em] text-ink">
        Aspectos a verificar
      </h4>
      <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">
        Estos datos son los que suelen influir en la clasificación de un
        producto textil. Confírmalos con la ficha técnica y la documentación del
        proveedor.
      </p>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {verificationPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-ink/80"
          >
            <CircleCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-soft"
              strokeWidth={1.7}
            />
            {point}
          </li>
        ))}
      </ul>

      {tariffReference ? (
        <div className="mt-6 flex gap-3 rounded-xl border border-brand/20 bg-brand/[0.045] px-4 py-3.5">
          <BadgeCheck
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand"
            strokeWidth={1.7}
          />
          <div className="text-[0.75rem] leading-relaxed text-muted">
            <p className="font-medium text-ink">
              Subpartida nacional de 10 dígitos:{" "}
              {tariffReference.nationalSubheading}
            </p>
            {tariffReference.description ? (
              <p className="mt-1">{tariffReference.description}</p>
            ) : null}
            <p className="mt-1 text-[0.68rem]">
              Fuente: {tariffReference.source} · Verificado el{" "}
              {tariffReference.verifiedAt}
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex gap-3 rounded-xl border border-gold/35 bg-gold/[0.08] px-4 py-3.5">
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-gold-ink"
            strokeWidth={1.7}
          />
          <p className="text-[0.75rem] leading-relaxed text-muted">
            <span className="font-medium text-ink">
              Sin subpartida asignada.
            </span>{" "}
            Todavía no hay datos de clasificación verificados para esta
            categoría. La subpartida nacional de 10 dígitos debe confirmarse en
            el Arancel de Aduanas vigente y con un agente de aduanas.
          </p>
        </div>
      )}

      <p className="mt-5 border-t border-line pt-4 text-[0.7rem] leading-relaxed text-muted">
        {disclaimer}
      </p>

      <div className="mt-5">
        <button
          type="button"
          onClick={onEdit}
          className={actionClasses(
            "secondary",
            "min-h-11 px-5 py-2.5 text-[0.8rem]",
          )}
        >
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.8} />
          <span>Editar respuestas</span>
        </button>
      </div>
    </div>
  );
}
