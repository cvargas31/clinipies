/**
 * Única fuente de verdad del contenido de la clínica.
 * El cliente edita SOLO este archivo para actualizar textos, servicios,
 * precios, teléfono, WhatsApp, horario y testimonios.
 *
 * TODO cliente: reemplazar los valores marcados con « » por los reales.
 */

export const clinic = {
  name: "CliniPies",
  nameParts: { dark: "Clini", accent: "Pies" }, // para el logo bicolor
  tagline: "Quiropedia Clínica",
  heroBadge: "Centro de Quiropedia",
  slogan: "Cuidamos tus pies, mejora tu vida",

  whatsapp: "50767472895",
  phoneDisplay: "+507 6747-2895",
  phoneHref: "+50767472895",
  whatsappPrefill:
    "Hola 👋, quiero pedir una cita en CliniPies. ¿Tienen disponibilidad?",

  address:
    "San Miguelito, C.C. Los Andes Mall, Piso 1, local 136",
  // Pin exacto de la clínica (coordenadas resueltas del enlace de Google Maps).
  mapEmbedUrl:
    "https://www.google.com/maps?q=9.0518435,-79.5083825&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/mBcfpM72Te9rNvds8",

  hours: [
    { days: "Lunes a Sábado", time: "10:00 AM – 7:00 PM" },
    { days: "Domingo", time: "Cerrado" },
  ],

  social: {
    instagram: "https://instagram.com/clinipies",
    facebook: "https://facebook.com/clinipies",
  },
} as const;

/** Servicios reales tomados del rótulo de la clínica. */
export const services: { name: string; description: string; icon: string }[] = [
  {
    name: "Uña encarnada",
    description:
      "Tratamiento del onicocriptosis: aliviamos el dolor y prevenimos infecciones sin cirugía agresiva.",
    icon: "scissors",
  },
  {
    name: "Pedicure clínico",
    description:
      "Higiene profunda y profesional de los pies con material esterilizado, no estético.",
    icon: "sparkles",
  },
  {
    name: "Manicure clínico",
    description:
      "Cuidado clínico de las uñas de las manos con técnicas y asepsia profesional.",
    icon: "hand",
  },
  {
    name: "Callosidades",
    description:
      "Eliminación de durezas, callos y helomas para que vuelvas a caminar sin molestias.",
    icon: "footprints",
  },
  {
    name: "Verrugas plantares",
    description:
      "Diagnóstico y tratamiento de papilomas plantares causados por el virus del papiloma.",
    icon: "shield-plus",
  },
  {
    name: "Pie de atleta",
    description:
      "Tratamiento de la micosis interdigital: eliminamos el hongo y cuidamos la piel.",
    icon: "activity",
  },
  {
    name: "Hongos en uñas",
    description:
      "Abordaje de la onicomicosis para recuperar uñas sanas y de aspecto natural.",
    icon: "droplet",
  },
  {
    name: "Pie diabético",
    description:
      "Revisión y cuidado preventivo especializado para personas con diabetes.",
    icon: "heart-pulse",
  },
  {
    name: "Masaje podal",
    description:
      "Masaje terapéutico de descarga que mejora la circulación y relaja tus pies.",
    icon: "waves",
  },
];

/** Puntos de confianza para la sección “¿Por qué elegirnos?”. */
export const trustPoints: { title: string; description: string; icon: string }[] = [
  {
    title: "Material esterilizado",
    description:
      "Instrumental esterilizado en cada cita para tu máxima seguridad e higiene.",
    icon: "shield-check",
  },
  {
    title: "Atención profesional",
    description:
      "Diagnóstico y tratamiento realizados por personal especializado en quiropedia.",
    icon: "user-check",
  },
  {
    title: "Trato personalizado",
    description:
      "Escuchamos tu caso y diseñamos un plan a la medida de tus pies.",
    icon: "heart-handshake",
  },
  {
    title: "Resultados visibles",
    description:
      "Alivio desde la primera sesión y seguimiento hasta tu recuperación.",
    icon: "trending-up",
  },
];

/**
 * Tarifas reales (lista de la clínica). Los precios NO incluyen ITBMS (7%).
 * Son los 7 tratamientos principales; la lista completa tiene más servicios.
 */
export const pricing: {
  service: string;
  price: string;
  featured?: boolean;
}[] = [
  { service: "Quiropedia (pies sanos)", price: "$35" },
  { service: "Uñas encarnadas (por lateral)", price: "$55", featured: true },
  { service: "Quiropedia pie diabético", price: "Desde $45" },
  { service: "Remoción de callos y durezas", price: "$22.50" },
  { service: "Verrugas plantares (por sesión)", price: "$25" },
  { service: "Hongos en uñas (por dedo)", price: "Desde $10.50" },
  { service: "Ortonixia (colocación inicial)", price: "$60" },
];

/** Servicio de quiropedia clínica a domicilio (bloque destacado en el inicio). */
export const homeService = {
  title: "Servicio de Quiropedia Clínica a Domicilio",
  subtitle:
    "Llevamos el cuidado profesional de tus pies hasta la comodidad de tu hogar.",
  idealFor: [
    "Adultos mayores",
    "Personas con movilidad reducida",
    "Pacientes diabéticos",
    "Personas con discapacidad",
    "Personas con poco tiempo para desplazarse",
  ],
  services: [
    "Pedicure clínico",
    "Tratamiento de uñas encarnadas",
    "Remoción de callosidades",
    "Tratamiento de hongos en uñas",
    "Corte terapéutico de uñas",
    "Atención preventiva para pie diabético",
  ],
  whatsappPrefill:
    "Hola 👋, quiero agendar una cita a domicilio de Quiropedia Clínica con CliniPies. ¿Tienen disponibilidad?",
} as const;

/** Opiniones de ejemplo — « » sustituir por reseñas reales. */
export const testimonials: {
  name: string;
  text: string;
  location?: string;
}[] = [
  {
    name: "María G.",
    text: "Llevaba meses con una uña encarnada y en una sola cita me quitaron el dolor. Súper profesionales y todo muy limpio.",
    location: "Paciente",
  },
  {
    name: "Carlos R.",
    text: "Como diabético necesito un cuidado especial. En CliniPies me revisan con mucho detalle y confianza. Recomendados.",
    location: "Paciente",
  },
  {
    name: "Ana L.",
    text: "El pedicure clínico es otro nivel. Mis pies quedaron sanos y el trato fue excelente de principio a fin.",
    location: "Paciente",
  },
];

/**
 * Sección "Antes y después" (comparador deslizable).
 * « » Coloca las fotos reales en /public y pon aquí las rutas.
 * Si quedan vacías, se muestra un marcador de marca sustituible.
 */
export const beforeAfter = {
  before: "/antes.webp",
  after: "/despues.webp",
  beforeLabel: "Antes",
  afterLabel: "Después",
  highlights: [
    "Uñas encarnadas tratadas sin cirugía agresiva",
    "Callos y durezas eliminados por completo",
    "Hongos en uñas con recuperación visible",
  ],
};

/**
 * Galería de casos (masonry).
 * Las fotos actuales son de Pexels (libres de uso). « » Para usar las reales
 * de la clínica, sube la foto a /public y cambia `src` por su ruta
 * (ej. "/casos/mi-foto.webp"). Si dejas `src` vacío se muestra un marcador
 * de marca con pies.
 * `tone` solo afecta al color del marcador; `tall` hace la tarjeta más alta
 * para dar el efecto escalonado tipo mosaico.
 */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const gallery: {
  label: string;
  src?: string;
  tone?: "teal" | "navy" | "mist";
  tall?: boolean;
}[] = [
  { label: "Uña encarnada", src: pexels(17056219), tone: "teal", tall: true },
  { label: "Pedicure clínico", src: pexels(34930123), tone: "mist" },
  { label: "Callosidades", src: pexels(9475414), tone: "navy" },
  { label: "Hongos en uñas", src: pexels(17056221), tone: "teal" },
  { label: "Pie diabético", src: "/img/pie-diabetico.webp", tone: "mist", tall: true },
  { label: "Verrugas plantares", src: "/img/verruga-plantar.jpg", tone: "navy" },
  { label: "Pie de atleta", src: "/img/pie-de-atleta.jpg", tone: "teal" },
  { label: "Masaje podal", src: pexels(3865561), tone: "mist" },
  { label: "Durezas y helomas", src: pexels(19695948), tone: "navy" },
  { label: "Manicure clínico", src: "/img/manicure-clinico.jpg", tone: "teal" },
];

/**
 * Medidas de bioseguridad e higiene clínica. Se muestran tanto en la sección
 * del landing (`components/Biosecurity.tsx`) como en la página `/bioseguridad`.
 * Los `icon` deben existir en el mapa de `components/Icon.tsx`.
 */
export const biosecurity: { icon: string; title: string; description: string }[] = [
  {
    icon: "shield-check",
    title: "Esterilización en autoclave",
    description:
      "Todo el instrumental se esteriliza en autoclave después de cada uso, eliminando bacterias, hongos y virus.",
  },
  {
    icon: "shield-plus",
    title: "Material desechable",
    description:
      "Guantes, hojas y limas de un solo uso, individuales para cada paciente. Nada se reutiliza.",
  },
  {
    icon: "sparkles",
    title: "Superficies desinfectadas",
    description:
      "Camilla, equipos y superficies se desinfectan entre un paciente y el siguiente.",
  },
  {
    icon: "droplet",
    title: "Higiene de manos",
    description:
      "Lavado clínico y gel antibacterial antes y después de cada tratamiento.",
  },
  {
    icon: "user-check",
    title: "Personal capacitado",
    description:
      "Seguimos protocolos de asepsia y bioseguridad en cada procedimiento.",
  },
  {
    icon: "activity",
    title: "Ambiente controlado",
    description:
      "Ventilación y limpieza constante para un entorno seguro y tranquilo.",
  },
];

/** Construye el enlace de WhatsApp con el mensaje pre-rellenado. */
export function whatsappUrl(message: string = clinic.whatsappPrefill): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace click-to-call. */
export const telUrl = `tel:${clinic.phoneHref}`;
