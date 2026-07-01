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

/** Tarifas de ejemplo — « » el cliente debe poner sus precios reales. */
export const pricing: {
  service: string;
  price: string;
  featured?: boolean;
}[] = [
  { service: "Pedicure clínico", price: "$25" },
  { service: "Uña encarnada", price: "$35", featured: true },
  { service: "Callosidades / durezas", price: "$28" },
  { service: "Verrugas plantares", price: "Desde $40" },
  { service: "Hongos en uñas", price: "Desde $30" },
  { service: "Pie diabético (revisión)", price: "$30" },
  { service: "Masaje podal", price: "$22" },
];

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
  { label: "Pie diabético", src: pexels(10157945), tone: "mist", tall: true },
  { label: "Verrugas plantares", src: pexels(8070278), tone: "navy" },
  { label: "Pie de atleta", src: pexels(4960359), tone: "teal" },
  { label: "Masaje podal", src: pexels(3865561), tone: "mist" },
  { label: "Durezas y helomas", src: pexels(19695948), tone: "navy" },
  { label: "Manicure clínico", src: pexels(17056222), tone: "teal" },
];

/** Construye el enlace de WhatsApp con el mensaje pre-rellenado. */
export function whatsappUrl(message: string = clinic.whatsappPrefill): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace click-to-call. */
export const telUrl = `tel:${clinic.phoneHref}`;
