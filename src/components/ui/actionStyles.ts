export type ActionVariant =
  | "primary"
  | "secondary"
  | "light"
  | "outlineLight";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium tracking-[0.01em] transition-colors duration-200";

const variants: Record<ActionVariant, string> = {
  primary:
    "border-brand bg-brand text-ivory hover:border-ink hover:bg-ink",
  secondary:
    "border-line bg-transparent text-ink hover:border-brand hover:bg-white/70",
  light:
    "border-ivory/25 bg-ivory text-brand hover:border-white hover:bg-white",
  outlineLight:
    "border-white/25 bg-transparent text-ivory hover:border-white/60 hover:bg-white/10",
};

export function actionClasses(
  variant: ActionVariant,
  className = "",
): string {
  return `${base} ${variants[variant]} ${className}`.trim();
}
