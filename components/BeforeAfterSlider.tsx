"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Footprints } from "lucide-react";

/**
 * Comparador "antes / después" deslizable.
 * - Izquierda del divisor = imagen "antes"; derecha = "después".
 * - Funciona con mouse, táctil y teclado (flechas ← →).
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Después",
}: {
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(55); // % del divisor desde la izquierda
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (dragging.current) setFromClientX(e.clientX);
  }
  function onPointerUp() {
    dragging.current = false;
  }
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative aspect-[16/11] w-full touch-none select-none overflow-hidden rounded-[var(--radius-brand)] shadow-brand"
    >
      {/* Capa inferior: DESPUÉS (visible siempre) */}
      <Layer src={after} label={afterLabel} variant="after" />

      {/* Capa superior: ANTES (recortada hasta el divisor) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Layer src={before} label={beforeLabel} variant="before" />
      </div>

      {/* Etiquetas */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        {afterLabel}
      </span>

      {/* Línea divisoria */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />

      {/* Manija */}
      <button
        type="button"
        role="slider"
        aria-label="Desliza para comparar antes y después"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-navy shadow-brand"
        style={{ left: `${pos}%` }}
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        <ChevronRight className="-ml-1 h-4 w-4" strokeWidth={2.5} aria-hidden />
      </button>
    </div>
  );
}

/** Una capa: imagen real si se proporciona, o marcador de marca. */
function Layer({
  src,
  label,
  variant,
}: {
  src?: string;
  label: string;
  variant: "before" | "after";
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        draggable={false}
      />
    );
  }
  // Marcador de marca (sustituible por foto real)
  const bg =
    variant === "before"
      ? "linear-gradient(135deg, #c2c9cf, #e6d6cf)"
      : "linear-gradient(135deg, var(--color-mist), color-mix(in srgb, var(--color-teal) 35%, white))";
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 text-center"
      style={{
        background: bg,
        filter: variant === "before" ? "grayscale(0.35)" : undefined,
      }}
    >
      <Footprints
        className={variant === "before" ? "h-16 w-16 text-navy/30" : "h-16 w-16 text-teal/60"}
        strokeWidth={1.25}
        aria-hidden
      />
      <span className="text-sm font-semibold text-navy/50">Foto «{label}»</span>
    </div>
  );
}
