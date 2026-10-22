import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Logo } from "../ui/Logo";
import { ActionLink } from "../ui/ActionLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ivory/95 backdrop-blur-md">
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
        <a
          href="#inicio"
          aria-label="Despega Textil, ir al inicio"
          className="shrink-0 rounded-sm"
        >
          <Logo />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm py-2 text-[0.82rem] font-medium text-ink/75 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ActionLink
              href="#contacto"
              className="min-h-10 px-5 py-2.5 text-[0.8rem]"
            >
              Contacto
            </ActionLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:bg-white/60 lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={1.7} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-ivory lg:hidden"
        >
          <nav
            aria-label="Navegación móvil"
            className="container-page flex flex-col py-4"
          >
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm border-b border-line/70 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <ActionLink
              href="#contacto"
              className="mt-5 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </ActionLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
