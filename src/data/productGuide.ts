import type {
  ProductCategoryId,
  ProductField,
  ProductOption,
} from "../lib/productGuide";

/**
 * Contenido configurable del módulo de producto.
 *
 * No se incluyen subpartidas arancelarias: no hay datos de clasificación
 * verificados en el repositorio. Cuando el cliente los valide, se registran en
 * `verifiedTariffByCategory` y la interfaz los mostrará automáticamente.
 */

export type ProductCategoryIcon = "fibra" | "hilado" | "tejido" | "prenda";

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  description: string;
  icon: ProductCategoryIcon;
  fields: readonly ProductField[];
  /** Características propias de la categoría que conviene verificar. */
  verificationPoints: readonly string[];
}

export interface VerifiedTariffReference {
  /** Subpartida nacional de 10 dígitos, solo si fue verificada. */
  nationalSubheading: string;
  description?: string;
  source: string;
  verifiedAt: string;
}

export const materialOptions: readonly ProductOption[] = [
  { value: "alpaca", label: "Fibra de alpaca" },
  { value: "vicuna", label: "Fibra de vicuña" },
  { value: "lana-oveja", label: "Lana de oveja" },
  { value: "algodon", label: "Algodón" },
  { value: "sintetica", label: "Fibra sintética" },
  { value: "mixta", label: "Composición mixta" },
  { value: "otra", label: "Otra / no confirmada" },
];

export const commonProductFields: readonly ProductField[] = [
  {
    id: "productName",
    kind: "text",
    label: "Nombre o descripción del producto",
    required: true,
    fullWidth: true,
    placeholder: "Ej.: suéter de alpaca con cuello redondo",
    help: "Una descripción breve y objetiva; evita marcas comerciales.",
    minLength: 3,
    maxLength: 120,
  },
  {
    id: "material",
    kind: "select",
    label: "Material o composición principal",
    required: true,
    placeholder: "Selecciona una opción",
    help: "Si es una mezcla, elige composición mixta y detállala en la descripción.",
    options: materialOptions,
  },
];

const processingStateOptions: readonly ProductOption[] = [
  { value: "en-bruto", label: "En bruto, sin procesar" },
  { value: "lavada", label: "Lavada" },
  { value: "cardada-peinada", label: "Cardada o peinada" },
  { value: "otra", label: "Otro proceso / no confirmado" },
];

const yarnConstructionOptions: readonly ProductOption[] = [
  { value: "hebra-simple", label: "Hebra simple (una sola)" },
  { value: "varios-cabos", label: "Retorcido o varios cabos (ply)" },
  { value: "no-confirmado", label: "No confirmado" },
];

const fabricConstructionOptions: readonly ProductOption[] = [
  { value: "punto", label: "Tejido de punto" },
  { value: "plano", label: "Tejido plano (woven)" },
  { value: "no-confirmado", label: "No confirmado" },
];

const textileFormOptions: readonly ProductOption[] = [
  { value: "pieza", label: "Tejido en pieza (rollo o corte)" },
  { value: "articulo", label: "Otro artículo textil" },
  { value: "no-confirmado", label: "No confirmado" },
];

const garmentTypeOptions: readonly ProductOption[] = [
  { value: "sueter", label: "Suéter" },
  { value: "bufanda", label: "Bufanda" },
  { value: "abrigo", label: "Abrigo" },
  { value: "chaleco", label: "Chaleco" },
  { value: "otra", label: "Otra prenda" },
];

const wearerOptions: readonly ProductOption[] = [
  { value: "bebe", label: "Bebé" },
  { value: "nino", label: "Niño / niña" },
  { value: "mujer", label: "Mujer" },
  { value: "hombre", label: "Hombre" },
  { value: "unisex", label: "Unisex" },
  { value: "no-confirmado", label: "No aplica / por confirmar" },
];

export const productCategories: readonly ProductCategory[] = [
  {
    id: "fibras",
    label: "Fibras",
    description: "Materia prima: fibra de alpaca, vicuña u otras fibras.",
    icon: "fibra",
    fields: [
      {
        id: "processingState",
        kind: "select",
        label: "Estado de procesamiento",
        required: true,
        placeholder: "Selecciona una opción",
        help: "Indica si la fibra se exporta en bruto o con algún proceso.",
        options: processingStateOptions,
      },
    ],
    verificationPoints: [
      "Especie animal o tipo de fibra declarada, con su denominación comercial.",
      "Estado de procesamiento: en bruto, lavada, cardada o peinada.",
      "Presentación y acondicionamiento del lote (fardos, peso, humedad).",
    ],
  },
  {
    id: "hilados",
    label: "Hilados",
    description: "Hilos y hilados destinados a la producción textil.",
    icon: "hilado",
    fields: [
      {
        id: "yarnConstruction",
        kind: "select",
        label: "Construcción del hilado",
        required: true,
        placeholder: "Selecciona una opción",
        help: "El número de cabos cambia la descripción del producto.",
        options: yarnConstructionOptions,
      },
    ],
    verificationPoints: [
      "Título o finura del hilado y número de cabos.",
      "Uso previsto: tejido de punto, tejido plano u otro.",
      "Presentación comercial (conos, madejas, peso por unidad).",
    ],
  },
  {
    id: "tejidos",
    label: "Tejidos",
    description: "Telas y materiales textiles en pieza o confeccionados.",
    icon: "tejido",
    fields: [
      {
        id: "fabricConstruction",
        kind: "select",
        label: "Tipo de construcción",
        required: true,
        placeholder: "Selecciona una opción",
        help: "Diferencia un tejido de punto de uno plano.",
        options: fabricConstructionOptions,
      },
      {
        id: "textileForm",
        kind: "select",
        label: "Presentación del artículo",
        required: true,
        placeholder: "Selecciona una opción",
        help: "Un tejido en pieza no se clasifica igual que un artículo confeccionado.",
        options: textileFormOptions,
      },
    ],
    verificationPoints: [
      "Tipo de construcción (punto o plano) y ligamento.",
      "Ancho, gramaje y acabados del tejido.",
      "Si se presenta en pieza o como artículo confeccionado.",
    ],
  },
  {
    id: "prendas",
    label: "Prendas terminadas",
    description: "Suéteres, bufandas, abrigos y otras prendas confeccionadas.",
    icon: "prenda",
    fields: [
      {
        id: "garmentType",
        kind: "select",
        label: "Tipo de prenda",
        required: true,
        placeholder: "Selecciona una opción",
        options: garmentTypeOptions,
      },
      {
        id: "wearer",
        kind: "select",
        label: "Público objetivo",
        required: false,
        placeholder: "Selecciona una opción",
        help: "Si corresponde, indica para quién está destinada la prenda.",
        options: wearerOptions,
      },
      {
        id: "garmentConstruction",
        kind: "select",
        label: "Construcción de la prenda",
        required: true,
        placeholder: "Selecciona una opción",
        help: "Indica si la prenda es de punto o plana.",
        options: fabricConstructionOptions,
      },
    ],
    verificationPoints: [
      "Tipo de prenda y uso previsto (exterior, interior o accesorio).",
      "Público objetivo, tallas y si es unisex.",
      "Construcción de punto o plano, y acabados de confección.",
      "Si la prenda incorpora otros materiales, forros o accesorios.",
    ],
  },
];

/** Aspectos comunes a cualquier categoría. */
export const commonVerificationPoints: readonly string[] = [
  "Composición exacta de la fibra, con porcentajes por material.",
  "Ficha técnica del proveedor y documentación de origen.",
];

export const productGuideDisclaimer =
  "La orientación es preliminar y no asigna una subpartida arancelaria. La subpartida nacional de 10 dígitos debe verificarse en el Arancel de Aduanas vigente y con un agente de aduanas, considerando la composición exacta, el proceso de producción y la presentación del producto.";

/**
 * Subpartidas verificadas por categoría. Vacío a propósito: no hay datos
 * oficiales confirmados en el repositorio. Al completarlo, la UI mostrará la
 * referencia junto con su fuente y fecha de verificación.
 */
export const verifiedTariffByCategory: Partial<
  Record<ProductCategoryId, VerifiedTariffReference>
> = {};

export function getProductCategory(
  id: ProductCategoryId,
): ProductCategory | undefined {
  return productCategories.find((category) => category.id === id);
}

export function getProductFields(
  id: ProductCategoryId,
): readonly ProductField[] {
  const category = getProductCategory(id);
  if (!category) return [];

  return [...commonProductFields, ...category.fields];
}
