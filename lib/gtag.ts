/**
 * Integración de Google Analytics (GA4) y conversión de Google Ads.
 *
 * Los IDs se leen de variables de entorno (NEXT_PUBLIC_*). Si están vacíos,
 * todo se desactiva sin errores — ideal para desarrollo local.
 *
 * Ver .env.local.example para las variables a configurar.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? "";
export const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? "";

export const isTrackingEnabled = Boolean(GA_ID || GADS_ID);

type GtagFn = (
  command: "config" | "event" | "js" | "set",
  targetId: string | Date,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

/**
 * Reporta el clic en WhatsApp a GA4 y a Google Ads.
 *
 * No bloquea la navegación: el enlace abre `wa.me` en una pestaña nueva de
 * forma nativa (gesto directo del usuario), así que la página actual sigue
 * viva y a las peticiones de gtag les sobra tiempo para salir. Interceptar
 * el clic para navegar desde un callback haría que Safari en iOS bloquease
 * la apertura por considerarla un popup.
 */
export function reportWhatsAppConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  // Evento de GA4 para medir el embudo. Solo si hay propiedad de GA4: sin
  // ella el evento acaba únicamente en Google Ads, que lo autodetecta como
  // una conversión aparte y duplica el conteo de cada clic.
  if (GA_ID) {
    window.gtag("event", "contacto_whatsapp", {
      event_category: "engagement",
      event_label: "whatsapp_click",
    });
  }

  // Conversión de Google Ads.
  if (GADS_ID && GADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
    });
  }
}
