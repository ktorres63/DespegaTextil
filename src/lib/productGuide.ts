/**
 * Tipos y reglas del módulo "Conoce tu producto antes de exportar".
 *
 * Este archivo no contiene contenido de negocio: las categorías, opciones y
 * textos viven en `src/data/productGuide.ts`. La validación y el resumen se
 * mantienen aquí para poder probarlos y reutilizarlos sin tocar la UI.
 */

export type ProductCategoryId = "fibras" | "hilados" | "tejidos" | "prendas";

export type ProductFieldId =
  | "productName"
  | "material"
  | "processingState"
  | "yarnConstruction"
  | "fabricConstruction"
  | "textileForm"
  | "garmentType"
  | "wearer"
  | "garmentConstruction";

export interface ProductOption {
  value: string;
  label: string;
}

interface ProductFieldBase {
  id: ProductFieldId;
  label: string;
  help?: string;
  required: boolean;
  /** Ocupa las dos columnas del formulario en pantallas anchas. */
  fullWidth?: boolean;
}

export interface ProductTextField extends ProductFieldBase {
  kind: "text";
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export interface ProductSelectField extends ProductFieldBase {
  kind: "select";
  placeholder: string;
  options: readonly ProductOption[];
}

export type ProductField = ProductTextField | ProductSelectField;

export type ProductAnswers = Partial<Record<ProductFieldId, string>>;

export type ProductErrors = Partial<Record<ProductFieldId, string>>;

const REQUIRED_MESSAGE = "Este campo es obligatorio.";
const REQUIRED_SELECTION_MESSAGE = "Selecciona una opción.";
const INVALID_SELECTION_MESSAGE = "Selecciona una opción válida.";

export function validateProductAnswers(
  fields: readonly ProductField[],
  answers: ProductAnswers,
): ProductErrors {
  const errors: ProductErrors = {};

  for (const field of fields) {
    const value = (answers[field.id] ?? "").trim();

    if (!value) {
      if (field.required) {
        errors[field.id] =
          field.kind === "select"
            ? REQUIRED_SELECTION_MESSAGE
            : REQUIRED_MESSAGE;
      }
      continue;
    }

    if (field.kind === "select") {
      const isValidOption = field.options.some(
        (option) => option.value === value,
      );

      if (!isValidOption) errors[field.id] = INVALID_SELECTION_MESSAGE;
      continue;
    }

    if (field.minLength && value.length < field.minLength) {
      errors[field.id] = `Escribe al menos ${field.minLength} caracteres.`;
      continue;
    }

    const maxLength = field.maxLength ?? 120;

    if (value.length > maxLength) {
      errors[field.id] = `Usa como máximo ${maxLength} caracteres.`;
    }
  }

  return errors;
}

export interface ProductSummaryRow {
  label: string;
  value: string;
}

export function buildProductSummary(
  fields: readonly ProductField[],
  answers: ProductAnswers,
): ProductSummaryRow[] {
  const rows: ProductSummaryRow[] = [];

  for (const field of fields) {
    const rawValue = (answers[field.id] ?? "").trim();
    if (!rawValue) continue;

    const value =
      field.kind === "select"
        ? (field.options.find((option) => option.value === rawValue)?.label ??
          rawValue)
        : rawValue;

    rows.push({ label: field.label, value });
  }

  return rows;
}

export function countProductErrors(errors: ProductErrors): number {
  return Object.keys(errors).length;
}
