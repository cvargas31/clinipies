import { clinic } from "@/lib/clinic";

/**
 * Logo de CliniPies: huella acunada en una mano dentro de un círculo,
 * acompañada del wordmark bicolor (Clini = navy / Pies = teal).
 * Hecho en SVG para nitidez total y carga instantánea.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={`Logo de ${clinic.name}`}
      className={className}
    >
      {/* Anillo */}
      <circle cx="32" cy="32" r="29" fill="none" stroke="var(--color-navy)" strokeWidth="3" />
      {/* Mano que acuna (cuenco) */}
      <path
        d="M16 38c0 9 7.5 15 16 15s16-6 16-15c0-2.4-2-4-4.2-3.1C40 36.3 36.2 37 32 37s-8-0.7-11.8-2.1C18 34 16 35.6 16 38Z"
        fill="var(--color-teal)"
      />
      {/* Talón de la huella */}
      <path
        d="M32 14c-4.8 0-8 3.8-8 9.2 0 4.8 3.4 8.3 8 8.3s8-3.5 8-8.3C40 17.8 36.8 14 32 14Z"
        fill="var(--color-navy)"
      />
      {/* Dedos */}
      <circle cx="24.5" cy="11.5" r="2.4" fill="var(--color-navy)" />
      <circle cx="30" cy="9" r="2.6" fill="var(--color-navy)" />
      <circle cx="36" cy="9.4" r="2.5" fill="var(--color-navy)" />
      <circle cx="41" cy="12" r="2.2" fill="var(--color-navy)" />
    </svg>
  );
}

export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
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
