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

## Estado del proyecto

- **Calculadora:** el espacio está reservado en la portada (`#calculadora`) con una maqueta no interactiva. Aún no hay reglas, tarifas ni lógica de cálculo porque el cliente no las ha confirmado.
- **Asistente virtual:** usa respuestas predefinidas y coincidencia por palabras clave. No es una IA ni envía mensajes a servicios externos. Tiene respuesta de reserva.
- **Contenido institucional:** los servicios, la razón social, el domicilio, los canales de contacto y los enlaces legales son provisionales y están marcados como pendientes.
- **Imágenes:** fotografías referenciales de Unsplash alojadas localmente. Sustituir por material aprobado del cliente cuando esté disponible.

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

## Pendientes con el cliente

1. Validar propuesta de valor, servicios y alcance de cada servicio.
2. Confirmar datos legales y canales oficiales de contacto.
3. Definir variables, reglas, moneda y tarifas referenciales de la calculadora.
4. Revisar los textos provisionales y las imágenes.
5. Publicar política de privacidad y términos de uso definitivos.
