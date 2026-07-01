import Image from "next/image";
import { clinic } from "@/lib/clinic";

/**
 * Logo de CliniPies: huella acunada en una mano dentro de un círculo.
 * Se sirve el PNG/WebP transparente (`public/logo.webp`) para nitidez y
 * fondo libre; la versión con fondo blanco vive en `public/logo-bg.jpg`.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.webp"
      alt={`Logo de ${clinic.name}`}
      width={512}
      height={512}
      priority
      className={className}
    />
  );
}

export function Logo({
  className = "",
  onDark = false,
  markClassName = "h-9 w-9",
}: {
  className?: string;
  onDark?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-xl font-extrabold leading-none tracking-tight md:text-2xl">
          <span style={{ color: onDark ? "#ffffff" : "var(--color-navy)" }}>
            {clinic.nameParts.dark}
          </span>
          <span style={{ color: "var(--color-teal-bright)" }}>
            {clinic.nameParts.accent}
          </span>
        </span>
        <span
          className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]"
          style={{ color: onDark ? "rgba(255,255,255,0.7)" : "var(--color-teal)" }}
        >
          {clinic.tagline}
        </span>
      </span>
    </span>
  );
}
