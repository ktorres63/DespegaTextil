export type AssistantTopicId =
  | "primeros-pasos"
  | "costos"
  | "incoterms"
  | "calculadora"
  | "contacto";

export interface QuickReply {
  id: AssistantTopicId;
  label: string;
}

export interface AssistantAnswer {
  topic: AssistantTopicId | null;
  message: string;
}

export const assistantIntro =
  "Hola. Soy el asistente virtual de Despega Textil. Tengo respuestas preparadas sobre exportación textil, costos e Incoterms. ¿Qué te gustaría revisar?";

export const quickReplies: readonly QuickReply[] = [
  { id: "primeros-pasos", label: "Primeros pasos" },
  { id: "costos", label: "Costos" },
  { id: "incoterms", label: "Incoterms" },
  { id: "calculadora", label: "Calculadora" },
];

const answers: Record<AssistantTopicId, string> = {
  "primeros-pasos":
    "Para una primera exportación suele revisarse el producto y su partida arancelaria, el mercado de destino, los requisitos documentales, el embalaje, el modo de transporte y las responsabilidades del Incoterm. La lista exacta depende de cada caso y debe validarse con especialistas.",
  costos:
    "Una estimación referencial puede separar el valor de la mercancía, el embalaje, el transporte principal, el seguro, los gastos locales, la documentación y otros cargos aplicables. No usamos tarifas inventadas: la calculadora se integrará cuando esos valores estén confirmados.",
  incoterms:
    "Los Incoterms son reglas internacionales que reparten responsabilidades y costos entre comprador y vendedor. EXW, FOB, CIF o DAP, por ejemplo, cambian dónde termina una obligación y empieza otra. Elegir uno no basta para determinar el costo total de la exportación.",
  calculadora:
    "La calculadora aún no está habilitada. El espacio está reservado en la portada y se integrará cuando se confirmen las variables, las reglas de cálculo y las tarifas referenciales. No emitirá cotizaciones en firme.",
  contacto:
    "Todavía no hay un correo, teléfono o WhatsApp verificado para publicar. Cuando el cliente confirme los canales oficiales, aparecerán en la sección de contacto y en el pie de página. Por ahora puedo ayudarte con dudas generales sobre exportación.",
};

const fallback =
  "No tengo una respuesta preparada para esa pregunta. Puedo orientarte con primeros pasos, costos de exportación, Incoterms o la futura calculadora. Para un caso específico, conviene validarlo con un agente de aduanas o un especialista. Los canales de contacto oficiales aún no están habilitados.";

const keywordRules: ReadonlyArray<{
  topic: AssistantTopicId;
  keywords: readonly string[];
}> = [
  {
    topic: "primeros-pasos",
    keywords: [
      "primer",
      "empezar",
      "empiezo",
      "iniciar",
      "exportar",
      "partida",
      "requisito",
      "documento",
      "documentacion",
    ],
  },
  {
    topic: "costos",
    keywords: [
      "costo",
      "costos",
      "precio",
      "tarifa",
      "flete",
      "seguro",
      "presupuesto",
      "cuanto",
    ],
  },
  {
    topic: "incoterms",
    keywords: ["incoterm", "incoterms", "exw", "fob", "cif", "dap"],
  },
  {
    topic: "calculadora",
    keywords: ["calculadora", "calcular", "estimacion", "estimar", "calculo"],
  },
  {
    topic: "contacto",
    keywords: [
      "contacto",
      "asesor",
      "correo",
      "telefono",
      "whatsapp",
      "hablar",
      "persona",
    ],
  },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function getAnswerForTopic(topic: AssistantTopicId): string {
  return answers[topic];
}

export function getAnswerForText(text: string): AssistantAnswer {
  const normalized = normalize(text);
  const match = keywordRules.find((rule) =>
    rule.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (!match) {
    return { topic: null, message: fallback };
  }

  return { topic: match.topic, message: answers[match.topic] };
}
