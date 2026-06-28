import Image from "next/image";
import { Footprints } from "lucide-react";
import { Wave } from "./Wave";
import { WhatsAppButton } from "./WhatsAppButton";
import { gallery } from "@/lib/clinic";

/**
 * Galería de casos en mosaico (masonry).
 *
 * El mosaico se arma con CSS Grid: filas de altura fija (`auto-rows`) y las
 * tarjetas altas ocupan 2 filas (`row-span-2`). `grid-flow-dense` rellena los
 * huecos automáticamente, así se llena de izquierda a derecha sin dejar
 * espacios vacíos al final. No necesita JavaScript: es un Server Component.
 * Cada foto sale de `gallery` en lib/clinic.ts; mientras no haya `src`
 * se muestra un marcador de marca sustituible por la foto real.
 */
export function Gallery() {
  return (
    <>
      {/* Onda de transición hacia la sección clara */}
      <Wave fill="var(--color-mist)" className="-mt-px" />

      <section id="galeria" className="bg-mist py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Galería de casos
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
              Pies sanos, resultados que se ven
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Una muestra de los tratamientos que realizamos cada día. Toca para
              escribirnos y pedir tu cita.
            </p>
          </div>

          {/* Mosaico: grid denso con filas fijas; las tarjetas altas span 2 */}
          <div className="mt-12 grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-4 md:auto-rows-[11rem] md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((item) => (
              <GalleryTile key={item.label} {...item} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppButton>Quiero un resultado así</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}

/** Tonos del marcador de marca por variante. */
const TONES: Record<string, string> = {
  teal: "linear-gradient(135deg, var(--color-mist), color-mix(in srgb, var(--color-teal) 38%, white))",
  navy: "linear-gradient(135deg, var(--color-navy-deep), var(--color-teal))",
  mist: "linear-gradient(135deg, #e7eef0, #cfe3e4)",
};

/** Una tarjeta del mosaico: foto real si hay `src`, o marcador de marca. */
function GalleryTile({
  label,
  src,
  tone = "teal",
  tall = false,
}: {
  label: string;
  src?: string;
  tone?: "teal" | "navy" | "mist";
  tall?: boolean;
}) {
  const dark = tone === "navy";

  return (
    <figure
      className={`group relative overflow-hidden rounded-[var(--radius-brand)] shadow-brand ${
        tall ? "row-span-2" : "row-span-1"
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        // Marcador de marca (sustituible por foto real desde lib/clinic.ts)
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 text-center transition-transform duration-300 group-hover:scale-105"
          style={{ background: TONES[tone] }}
        >
          <Footprints
            className={`h-14 w-14 ${dark ? "text-white/70" : "text-navy/30"}`}
            strokeWidth={1.25}
            aria-hidden
          />
          <span
            className={`px-4 text-sm font-semibold ${dark ? "text-white/80" : "text-navy/50"}`}
          >
            Foto «{label}»
          </span>
        </div>
      )}

      {/* Etiqueta del caso, siempre visible sobre un degradado inferior */}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3">
        <span className="text-sm font-bold text-white drop-shadow">{label}</span>
      </figcaption>
    </figure>
  );
}
