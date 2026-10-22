export const siteConfig = {
  name: "Despega Textil",
  descriptor: "Consultoría de exportación textil",
  description:
    "Una consultoría enfocada en acercar la producción textil peruana a compradores internacionales, con información clara sobre rutas, costos y documentación.",
  location: "Perú",
  navItems: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  contactChannels: [
    { label: "Correo", value: "Por confirmar" },
    { label: "Teléfono", value: "Por confirmar" },
    { label: "Ubicación", value: "Perú" },
  ],
  legalLinks: [
    { label: "Política de privacidad", status: "En preparación" },
    { label: "Términos de uso", status: "En preparación" },
  ],
} as const;

export const trustPoints = [
  {
    icon: "textil" as const,
    title: "Enfoque textil",
    description: "Producto, temporada y embalaje.",
  },
  {
    icon: "ruta" as const,
    title: "Ruta clara",
    description: "Alternativas de transporte comparadas.",
  },
  {
    icon: "costos" as const,
    title: "Costos transparentes",
    description: "Supuestos visibles, sin cifras inventadas.",
  },
  {
    icon: "conversacion" as const,
    title: "Lenguaje simple",
    description: "Decisiones con información comprensible.",
  },
] as const;

export const processSteps = [
  {
    title: "Punto de partida",
    description:
      "Revisamos producto, volumen, destino y plazos. Definimos qué información falta antes de construir cualquier estimación.",
  },
  {
    title: "Ruta y modo",
    description:
      "Comparamos alternativas marítimas, aéreas o terrestres y ordenamos los tramos que intervienen en el envío.",
  },
  {
    title: "Costos y supuestos",
    description:
      "Separamos valor de mercancía, embalaje, flete, seguro y otros componentes. Cada supuesto queda a la vista.",
  },
  {
    title: "Documentos y siguientes pasos",
    description:
      "Identificamos la documentación aplicable y las consultas que deben validarse con un agente de aduanas o especialista.",
  },
] as const;
