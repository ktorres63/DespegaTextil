import { useState } from "react";
import { ClipboardList } from "lucide-react";
import {
  commonVerificationPoints,
  getProductCategory,
  getProductFields,
  productGuideDisclaimer,
  verifiedTariffByCategory,
} from "../../data/productGuide";
import {
  buildProductSummary,
  validateProductAnswers,
  type ProductAnswers,
  type ProductCategoryId,
  type ProductErrors,
  type ProductFieldId,
} from "../../lib/productGuide";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCategoryPicker } from "./ProductCategoryPicker";
import { ProductGuideResult } from "./ProductGuideResult";
import { ProductQuestionnaire } from "./ProductQuestionnaire";

export function ProductGuideSection() {
  const [categoryId, setCategoryId] = useState<ProductCategoryId | null>(null);
  const [answers, setAnswers] = useState<ProductAnswers>({});
  const [errors, setErrors] = useState<ProductErrors>({});
  const [showResult, setShowResult] = useState(false);

  const category = categoryId ? getProductCategory(categoryId) : undefined;
  const fields = categoryId ? getProductFields(categoryId) : [];

  const handleSelectCategory = (id: ProductCategoryId) => {
    setCategoryId(id);
    setErrors({});
    setShowResult(false);
  };

  const handleChange = (fieldId: ProductFieldId, value: string) => {
    setAnswers((current) => ({ ...current, [fieldId]: value }));

    setErrors((current) => {
      if (!current[fieldId]) return current;

      const next = { ...current };
      delete next[fieldId];
      return next;
    });
  };

  const handleSubmit = () => {
    const nextErrors = validateProductAnswers(fields, answers);
    const firstInvalidField = fields.find((field) => nextErrors[field.id]);

    if (firstInvalidField) {
      setErrors(nextErrors);
      requestAnimationFrame(() => {
        document.getElementById(firstInvalidField.id)?.focus();
      });
      return;
    }

    setErrors({});
    setShowResult(true);
  };

  const handleEdit = () => {
    setShowResult(false);
    requestAnimationFrame(() => {
      if (fields[0]) document.getElementById(fields[0].id)?.focus();
    });
  };

  const summary =
    categoryId && showResult ? buildProductSummary(fields, answers) : [];
  const verificationPoints = category
    ? [...commonVerificationPoints, ...category.verificationPoints]
    : [];
  const tariffReference = category
    ? verifiedTariffByCategory[category.id]
    : undefined;

  return (
    <section id="producto" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="02 — Producto"
            title={
              <>
                Conoce tu producto
                <span className="italic text-brand-soft">
                  {" "}
                  antes de exportar.
                </span>
              </>
            }
            description="Describe tu producto y obtén una orientación preliminar sobre los datos que debes verificar para su clasificación. No asignamos códigos arancelarios sin información confirmada."
          />
        </div>

        <ProductCategoryPicker
          selected={categoryId}
          onSelect={handleSelectCategory}
        />

        <div className="mt-6">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-panel">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/[0.08] text-brand">
                  <ClipboardList
                    aria-hidden="true"
                    className="size-[1.15rem]"
                    strokeWidth={1.6}
                  />
                </span>
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                    Módulo 02
                  </p>
                  <h3 className="mt-0.5 font-sans text-[0.95rem] font-semibold tracking-[-0.01em] text-ink">
                    {showResult ? "Orientación preliminar" : "Ficha del producto"}
                  </h3>
                </div>
              </div>

              <span className="self-start rounded-full border border-gold/45 bg-gold/10 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-gold-ink sm:mt-1">
                {showResult
                  ? tariffReference
                    ? "Referencia verificada"
                    : "Sin código asignado"
                  : (category?.label ?? "Sin categoría")}
              </span>
            </div>

            <div className="p-4 sm:p-6">
              {!category ? (
                <div className="rounded-2xl border border-dashed border-brand/25 bg-ivory/65 px-5 py-10 text-center">
                  <span className="mx-auto grid size-11 place-items-center rounded-full border border-brand/20 bg-white text-brand">
                    <ClipboardList
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.6}
                    />
                  </span>
                  <p className="mt-4 font-sans text-[0.9rem] font-medium text-ink">
                    Elige una categoría para comenzar.
                  </p>
                  <p className="mx-auto mt-1.5 max-w-sm text-[0.78rem] leading-relaxed text-muted">
                    El cuestionario se adapta al tipo de producto y solo muestra
                    las preguntas necesarias.
                  </p>
                </div>
              ) : showResult ? (
                <ProductGuideResult
                  category={category}
                  summary={summary}
                  verificationPoints={verificationPoints}
                  disclaimer={productGuideDisclaimer}
                  tariffReference={tariffReference}
                  onEdit={handleEdit}
                />
              ) : (
                <ProductQuestionnaire
                  fields={fields}
                  answers={answers}
                  errors={errors}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 flex max-w-3xl items-start gap-2.5 text-[0.72rem] leading-relaxed text-muted">
          <span
            aria-hidden="true"
            className="mt-2 block h-px w-5 shrink-0 bg-gold"
          />
          Esta sección no sustituye la clasificación arancelaria oficial ni la
          opinión de un agente de aduanas.
        </p>
      </div>
    </section>
  );
}
