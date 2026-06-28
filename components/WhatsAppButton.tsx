"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/clinic";
import { reportWhatsAppConversion } from "@/lib/gtag";

type Variant = "solid" | "light" | "ghost";

const variants: Record<Variant, string> = {
  // CTA principal: verde WhatsApp (el único uso de verde en la página).
  solid:
    "bg-whatsapp text-white shadow-brand hover:bg-whatsapp-dark hover:-translate-y-0.5",
  // Sobre fondos oscuros / hero.
  light: "bg-white text-navy hover:bg-mist hover:-translate-y-0.5",
  // Discreto, para barras.
  ghost:
    "bg-whatsapp/10 text-whatsapp-dark hover:bg-whatsapp/20 ring-1 ring-whatsapp/30",
};

/**
 * Botón/enlace de WhatsApp. Al hacer clic dispara la conversión de Google Ads
 * (lib/gtag) y luego abre el chat con el mensaje pre-rellenado.
 */
export function WhatsAppButton({
  children = "Pedir cita por WhatsApp",
  message,
  variant = "solid",
  className = "",
  fullWidth = false,
}: {
  children?: React.ReactNode;
  message?: string;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
}) {
  const href = whatsappUrl(message);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    reportWhatsAppConversion(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 ${
        variants[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
      {children}
    </a>
  );
}

/** Botón flotante fijo, visible en todos los tamaños (móvil primero). */
export function StickyWhatsApp() {
  const href = whatsappUrl();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    reportWhatsAppConversion(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-brand transition-transform duration-200 hover:scale-105 md:h-16 md:w-16"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-whatsapp" />
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" strokeWidth={2.2} aria-hidden />
    </a>
  );
}
