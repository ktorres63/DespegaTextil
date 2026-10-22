import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  actionClasses,
  type ActionVariant,
} from "./actionStyles";

interface ActionButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: ActionVariant;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
}

export function ActionButton({
  children,
  onClick,
  variant = "primary",
  className,
  withArrow = true,
  ariaLabel,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={actionClasses(variant, className)}
    >
      <span>{children}</span>
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.8}
        />
      ) : null}
    </button>
  );
}
