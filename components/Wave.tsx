/**
 * Onda divisoria — el elemento de marca que se repite entre secciones,
 * inspirado en las ondas del logo y rótulo de CliniPies.
 *
 * `fill` es el color de la sección que SIGUE (hacia donde fluye la onda).
 */
export function Wave({
  fill = "var(--color-mist)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        {/* Capa trasera (más tenue) */}
        <path
          d="M0,64 C240,110 480,16 720,40 C960,64 1200,118 1440,72 L1440,120 L0,120 Z"
          fill={fill}
          opacity="0.55"
        />
        {/* Capa frontal */}
        <path
          d="M0,88 C240,40 480,120 720,92 C960,64 1200,32 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
