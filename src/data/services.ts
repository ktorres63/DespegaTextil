export type ServiceIcon = "diagnostico" | "ruta" | "costos" | "documentos";

export interface Service {
  id: string;
  number: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  bullets: readonly string[];
}

export const services: readonly Service[] = [
  {
    id: "diagnostico",
    number: "01",
    icon: "diagnostico",
    title: "Diagnóstico exportador",
    description:
      "Revisamos el producto, la partida arancelaria y el mercado objetivo para identificar requisitos y brechas antes de avanzar.",
    bullets: [
      "Perfil del producto y su clasificación",
      "Requisitos del mercado de destino",
      "Brechas de información por cerrar",
    ],
  },
  {
    id: "ruta",
    number: "02",
    icon: "ruta",
    title: "Ruta y logística",
    description:
      "Comparamos alternativas de transporte según destino, volumen, naturaleza de la carga y plazos del comprador.",
    bullets: [
      "Evaluación de origen y destino",
      "Modos marítimo, aéreo y terrestre",
      "Criterios para elegir el operador",
    ],
  },
  {
    id: "costos",
    number: "03",
    icon: "costos",
    title: "Estructura de costos",
    description:
      "Ordenamos los componentes de costo para construir una estimación referencial, comparable y fácil de revisar.",
    bullets: [
      "Separación de cada componente",
      "Supuestos y limitaciones visibles",
      "Costos referenciales por unidad",
    ],
  },
  {
    id: "documentos",
    number: "04",
    icon: "documentos",
    title: "Preparación documental",
    description:
      "Identificamos la documentación comercial y los trámites que deben validarse con especialistas antes del despacho.",
    bullets: [
      "Lista de documentos por revisar",
      "Responsabilidades según el Incoterm",
      "Preguntas clave para el agente de aduanas",
    ],
  },
] as const;
