import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  actionClasses,
  type ActionVariant,
} from "./actionStyles";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: ActionVariant;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  onClick,
}: ActionLinkProps) {
  return (
    <a href={href} onClick={onClick} className={actionClasses(variant, className)}>
      <span>{children}</span>
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.8}
        />
      ) : null}
    </a>
  );
}
