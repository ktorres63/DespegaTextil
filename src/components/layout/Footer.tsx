import { openAssistant } from "../../lib/assistant";
import { siteConfig } from "../../data/site";
import { Logo } from "../ui/Logo";

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#preguntas" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ivory">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.95fr_1fr] lg:gap-12">
          <div>
            <a
              href="#inicio"
              aria-label="Despega Textil, ir al inicio"
              className="inline-block rounded-sm"
            >
              <Logo tone="light" />
            </a>
            <p className="mt-5 max-w-xs text-[0.82rem] leading-relaxed text-ivory/60">
              Consultoría de exportación textil. Rutas, documentación y costos
              con información clara y supuestos visibles.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.14em] text-ivory/65">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              Sitio en desarrollo
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-sm text-[0.82rem] text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Módulos
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#calculadora"
                  className="inline-flex flex-wrap items-center gap-2 rounded-sm text-[0.82rem] text-ivory/70 transition-colors hover:text-ivory"
                >
                  Calculadora
                  <span className="rounded-full border border-gold/30 px-2 py-0.5 text-[0.52rem] uppercase tracking-[0.1em] text-gold">
                    En preparación
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openAssistant}
                  className="rounded-sm text-left text-[0.82rem] text-ivory/70 transition-colors hover:text-ivory"
                >
                  Asistente virtual
                </button>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="rounded-sm text-[0.82rem] text-ivory/70 transition-colors hover:text-ivory"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Contacto
            </h2>
            <dl className="mt-4 space-y-2.5">
              {siteConfig.contactChannels.map((channel) => (
                <div key={channel.label} className="flex gap-2 text-[0.8rem]">
                  <dt className="text-ivory/65">{channel.label}:</dt>
                  <dd className="text-ivory/70">{channel.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.65rem] leading-relaxed text-ivory/60">
              Datos pendientes de validación con el cliente.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.65rem] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Despega Textil. Contenido provisional.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-2">
                <span>{link.label}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.52rem] uppercase tracking-[0.1em] text-ivory/60">
                  {link.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
