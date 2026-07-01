"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * Menú móvil (solo < lg). Botón hamburguesa que despliega un panel con los
 * mismos anchors de la landing (scroll suave dentro de la misma página) más
 * el CTA de WhatsApp. En pantallas grandes se usa la navegación del Header.
 *
 * El panel entra desde arriba (ease-out) y sale algo más rápido. Para que la
 * animación de salida se vea, retrasamos el desmontaje: `render` mantiene el
 * DOM y `shown` controla el estado visual (open/closed) vía data-attribute.
 */
export function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const [shown, setShown] = useState(false);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Orquestar montaje/desmontaje con la animación.
  useEffect(() => {
    if (open) {
      setRender(true);
      // Dos frames para garantizar que el estado inicial (closed) se pinta
      // antes de pasar a "open" y así disparar la transición de entrada.
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setShown(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }

    setShown(false);
    const t = setTimeout(() => setRender(false), 260); // coincide con la salida
    return () => clearTimeout(t);
  }, [open]);

  const state = shown ? "open" : "closed";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-mist active:scale-90"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden />
        ) : (
          <Menu className="h-6 w-6" aria-hidden />
        )}
      </button>

      {render && (
        <>
          {/* Fondo semitransparente: tocar fuera cierra el menú. */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            data-state={state}
            className="mobile-backdrop fixed inset-x-0 bottom-0 top-20 z-40 cursor-default bg-navy/20 backdrop-blur-sm"
          />

          <div
            id="mobile-menu"
            data-state={state}
            className="mobile-panel absolute inset-x-0 top-full z-50 border-b border-mist-deep bg-white shadow-brand"
          >
            <nav
              className="container-page flex flex-col gap-1 py-4"
              aria-label="Secciones"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink/80 transition-colors hover:bg-mist hover:text-teal"
                >
                  {l.label}
                </Link>
              ))}
              <WhatsAppButton fullWidth className="mt-3">
                Pedir cita por WhatsApp
              </WhatsAppButton>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
