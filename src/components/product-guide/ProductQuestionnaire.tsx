import { ArrowRight, ChevronDown, CircleAlert } from "lucide-react";
import type {
  ProductAnswers,
  ProductErrors,
  ProductField,
  ProductFieldId,
} from "../../lib/productGuide";
import { countProductErrors } from "../../lib/productGuide";
import { actionClasses } from "../ui/actionStyles";

interface ProductQuestionnaireProps {
  fields: readonly ProductField[];
  answers: ProductAnswers;
  errors: ProductErrors;
  onChange: (fieldId: ProductFieldId, value: string) => void;
  onSubmit: () => void;
}

const errorInputClasses =
  "border-danger/55 bg-danger/[0.035] focus:border-danger";
const defaultInputClasses = "border-line bg-ivory/40 focus:border-brand";

const inputBaseClasses =
  "w-full rounded-xl border px-3.5 py-2.5 text-[0.85rem] text-ink transition-colors focus:bg-white";

export function ProductQuestionnaire({
  fields,
  answers,
  errors,
  onChange,
  onSubmit,
}: ProductQuestionnaireProps) {
  const errorCount = countProductErrors(errors);

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {errorCount > 0 ? (
        <div
          role="alert"
          className="mb-5 flex items-start gap-3 rounded-xl border border-danger/30 bg-danger/[0.05] px-4 py-3"
        >
          <CircleAlert
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-danger"
            strokeWidth={1.8}
          />
          <p className="text-[0.76rem] leading-relaxed text-danger">
            <span className="font-semibold">
              Faltan datos obligatorios
              {errorCount > 1 ? ` (${errorCount} campos)` : ""}.
            </span>{" "}
            Revisa los campos señalados antes de consultar.
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <ProductFieldControl
            key={field.id}
            field={field}
            value={answers[field.id] ?? ""}
            error={errors[field.id]}
            onChange={onChange}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.68rem] leading-relaxed text-muted">
          Los campos con{" "}
          <span aria-hidden="true" className="font-semibold text-gold-ink">
            *
          </span>{" "}
          son obligatorios. La orientación es preliminar.
        </p>

        <button
          type="submit"
          className={actionClasses("primary", "w-full sm:w-auto")}
        >
          <span>Consultar orientación</span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </button>
      </div>
    </form>
  );
}

interface ProductFieldControlProps {
  field: ProductField;
  value: string;
  error?: string;
  onChange: (fieldId: ProductFieldId, value: string) => void;
}

function ProductFieldControl({
  field,
  value,
  error,
  onChange,
}: ProductFieldControlProps) {
  const errorId = `${field.id}-error`;
  const helpId = `${field.id}-help`;
  const describedBy = [field.help ? helpId : null, error ? errorId : null]
    .filter(Boolean)
    .join(" ");

  const controlClasses = `${inputBaseClasses} ${
    error ? errorInputClasses : defaultInputClasses
  }`;

  return (
    <div className={field.fullWidth ? "sm:col-span-2" : ""}>
      <label
        htmlFor={field.id}
        className="flex items-baseline justify-between gap-3 text-[0.74rem] font-medium text-ink"
      >
        <span>
          {field.label}
          {field.required ? (
            <>
              <span aria-hidden="true" className="ml-0.5 text-gold-ink">
                *
              </span>
              <span className="sr-only"> (obligatorio)</span>
            </>
          ) : null}
        </span>
        {!field.required ? (
          <span className="shrink-0 text-[0.58rem] font-normal uppercase tracking-[0.12em] text-muted">
            Opcional
          </span>
        ) : null}
      </label>

      {field.kind === "select" ? (
        <div className="relative mt-2">
          <select
            id={field.id}
            name={field.id}
            value={value}
            required={field.required}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy || undefined}
            onChange={(event) => onChange(field.id, event.target.value)}
            className={`${controlClasses} appearance-none pr-10`}
          >
            <option value="">{field.placeholder}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
            strokeWidth={1.8}
          />
        </div>
      ) : (
        <input
          id={field.id}
          name={field.id}
          type="text"
          value={value}
          required={field.required}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          onChange={(event) => onChange(field.id, event.target.value)}
          className={`mt-2 ${controlClasses}`}
        />
      )}

      {field.help ? (
        <p id={helpId} className="mt-1.5 text-[0.68rem] leading-relaxed text-muted">
          {field.help}
        </p>
      ) : null}

      {error ? (
        <p
          id={errorId}
          className="mt-1.5 flex items-start gap-1.5 text-[0.7rem] font-medium leading-relaxed text-danger"
        >
          <CircleAlert
            aria-hidden="true"
            className="mt-0.5 size-3.5 shrink-0"
            strokeWidth={1.9}
          />
          {error}
        </p>
      ) : null}
    </div>
  );
}
