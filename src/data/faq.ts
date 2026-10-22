export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    id: "calculadora",
    question: "¿La calculadora de costos ya está disponible?",
    answer:
      "Todavía no. El espacio está reservado en la portada mientras se confirman las variables, reglas de cálculo y tarifas referenciales. Cuando se habilite, mostrará una estimación y no una cotización en firme.",
  },
  {
    id: "datos",
    question: "¿Qué datos necesitaré para estimar un costo de exportación?",
    answer:
      "Como punto de partida: producto y cantidad, valor declarado, origen, destino, modo de transporte e Incoterm. La lista definitiva de datos se acordará con el cliente antes de integrar la calculadora.",
  },
  {
    id: "incoterms",
    question: "¿Qué es un Incoterm y cómo influye en el costo?",
    answer:
      "Los Incoterms son reglas internacionales que reparten responsabilidades y costos entre comprador y vendedor. Elegir uno no determina por sí solo el costo total de la exportación: también dependen la ruta, la carga y los servicios contratados.",
  },
  {
    id: "aduanas",
    question: "¿Esta asesoría reemplaza a un agente de aduanas?",
    answer:
      "No. La orientación comercial y logística no sustituye a un agente de aduanas, un operador logístico, una autoridad regulatoria ni una cotización profesional. Cada operación debe validarse con los especialistas correspondientes.",
  },
  {
    id: "modalidades",
    question: "¿Se pueden evaluar envíos marítimos y aéreos?",
    answer:
      "Sí, el análisis puede considerar ambos modos e incluso el terrestre cuando corresponda. La recomendación dependerá de la carga, el destino, los plazos y las condiciones acordadas con el comprador.",
  },
  {
    id: "contacto",
    question: "¿Cómo puedo contactar a un asesor?",
    answer:
      "Los canales de contacto oficiales aún están por confirmar y se publicarán cuando el cliente los valide. Mientras tanto, el asistente virtual puede ayudarte con dudas generales sobre exportación.",
  },
] as const;
