"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela su contenido cuando entra en el viewport (una sola vez).
 *
 * - `group`: en lugar de animar el propio contenedor, escalona sus hijos
 *   directos (cascada) — ideal para rejillas de tarjetas.
 * - Usa IntersectionObserver; si no está disponible (SSR / navegadores muy
 *   antiguos) muestra el contenido de inmediato para no ocultarlo nunca.
 *
 * El movimiento y el respeto a `prefers-reduced-motion` viven en globals.css
 * (`[data-reveal]` / `[data-reveal-group]`).
 */
export function Reveal({
  children,
  className = "",
  group = false,
}: {
  children: React.ReactNode;
  className?: string;
  group?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const state = shown ? "shown" : "hidden";
  const attr = group ? { "data-reveal-group": state } : { "data-reveal": state };

  return (
    <div ref={ref} {...attr} className={className}>
      {children}
    </div>
  );
}
