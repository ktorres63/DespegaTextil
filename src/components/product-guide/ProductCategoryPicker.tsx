import { Check, Layers, Leaf, Shirt, Spool, type LucideIcon } from "lucide-react";
import { productCategories } from "../../data/productGuide";
import type { ProductCategoryIcon } from "../../data/productGuide";
import type { ProductCategoryId } from "../../lib/productGuide";

const iconMap: Record<ProductCategoryIcon, LucideIcon> = {
  fibra: Leaf,
  hilado: Spool,
  tejido: Layers,
  prenda: Shirt,
};

interface ProductCategoryPickerProps {
  selected: ProductCategoryId | null;
  onSelect: (categoryId: ProductCategoryId) => void;
}

export function ProductCategoryPicker({
  selected,
  onSelect,
}: ProductCategoryPickerProps) {
  return (
    <fieldset className="mt-12">
      <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-soft">
        Categoría de producto
      </legend>
      <p className="mt-2 max-w-xl text-[0.8rem] leading-relaxed text-muted">
        Elige una sola categoría: el cuestionario y la orientación se adaptan al
        tipo de producto.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {productCategories.map((category) => {
          const Icon = iconMap[category.icon];
          const isSelected = selected === category.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(category.id)}
              className={`group flex h-full flex-col rounded-2xl border p-4 text-left transition-colors duration-200 sm:p-5 ${
                isSelected
                  ? "border-brand bg-brand text-ivory shadow-lift"
                  : "border-line bg-white hover:border-brand/40 hover:bg-ivory/60"
              }`}
            >
              <span
                className={`grid size-10 place-items-center rounded-xl transition-colors duration-200 ${
                  isSelected
                    ? "bg-white/10 text-gold"
                    : "bg-brand/[0.065] text-brand group-hover:bg-brand/[0.1]"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="size-[1.05rem]"
                  strokeWidth={1.6}
                />
              </span>

              <span className="mt-4 flex items-center gap-2 font-sans text-[0.92rem] font-semibold">
                {category.label}
                {isSelected ? (
                  <Check
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-gold"
                    strokeWidth={2.4}
                  />
                ) : null}
              </span>

              <span
                className={`mt-1.5 text-[0.74rem] leading-relaxed ${
                  isSelected ? "text-ivory/70" : "text-muted"
                }`}
              >
                {category.description}
              </span>

              <span
                className={`mt-4 text-[0.58rem] font-semibold uppercase tracking-[0.16em] ${
                  isSelected ? "text-gold" : "text-brand-soft"
                }`}
              >
                {isSelected ? "Seleccionado" : "Elegir"}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
