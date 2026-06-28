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
 * Reporta la conversión de Google Ads (clic en WhatsApp) y luego ejecuta
 * el callback de navegación. Si no hay IDs configurados, navega de inmediato.
 */
export function reportWhatsAppConversion(onDone: () => void): void {
  const canTrack =
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    GADS_ID &&
    GADS_CONVERSION_LABEL;

  // Evento de GA4 (siempre que haya gtag) para medir el embudo.
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contacto_whatsapp", {
      event_category: "engagement",
      event_label: "whatsapp_click",
    });
  }

  if (!canTrack) {
    onDone();
    return;
  }

  // Conversión de Google Ads con callback para no perder el clic.
  let navigated = false;
  const go = () => {
    if (navigated) return;
    navigated = true;
    onDone();
  };

  window.gtag!("event", "conversion", {
    send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
    event_callback: go,
  });

  // Salvaguarda: si el callback no llega (bloqueador), navega igual.
  window.setTimeout(go, 800);
}
