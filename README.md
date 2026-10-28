# Despega Textil

Landing page en español para una consultoría de exportación textil. Incluye presentación de servicios, proceso de exportación, preguntas frecuentes, un asistente con respuestas predefinidas y un espacio reservado para la futura calculadora de costos.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React

## Scripts

```bash
pnpm dev      # entorno de desarrollo
pnpm build    # type-check + build de producción
pnpm lint     # ESLint
pnpm preview  # previsualizar el build
```

## Estructura

```text
src/
  components/
    assistant/      asistente y respuestas guiadas
    calculator/     espacio reservado para la calculadora
    layout/         header y footer
    sections/       secciones de la landing
    ui/             componentes reutilizables
  data/             contenido de servicios, FAQ y configuración
  lib/              utilidades del asistente
  pages/            composición de la página
```
