"use client";

import { whatsappUrl } from "@/lib/clinic";
import { reportWhatsAppConversion } from "@/lib/gtag";

/**
 * Icono con el logo oficial de WhatsApp. Usa `fill="currentColor"` para
 * heredar el color del texto del botón (blanco sobre verde, etc.).
 */
export function WhatsAppIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
    </svg>
  );
}

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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-[transform,background-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
        variants[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
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
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-brand transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 active:scale-95 md:h-16 md:w-16"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
