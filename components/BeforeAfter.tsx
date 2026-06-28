import { Check } from "lucide-react";
import { Wave } from "./Wave";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { WhatsAppButton } from "./WhatsAppButton";
import { beforeAfter, clinic } from "@/lib/clinic";

/**
 * Sección "Antes y después": texto a la izquierda y comparador deslizable
 * a la derecha (inspirado en la sección de la referencia).
 */
export function BeforeAfter() {
  return (
    <>
      {/* Onda que fluye desde el hero hacia esta sección clara */}
      <Wave fill="var(--color-mist)" className="-mt-px" />

      <section id="resultados" className="bg-mist py-16 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            Resultados reales
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
            Mira el antes y después de tu tratamiento
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Desliza la imagen para ver la diferencia. En {clinic.name} buscamos
            que tus pies vuelvan a verse y sentirse sanos.
          </p>

          <ul className="mt-6 space-y-3">
            {beforeAfter.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-ink/80">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {h}
              </li>
            ))}
          </ul>

          <WhatsAppButton className="mt-8">
            Quiero estos resultados
          </WhatsAppButton>
        </div>

        {/* Comparador */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <BeforeAfterSlider
            before={beforeAfter.before || undefined}
            after={beforeAfter.after || undefined}
            beforeLabel={beforeAfter.beforeLabel}
            afterLabel={beforeAfter.afterLabel}
          />
        </div>
      </div>
      </section>
    </>
  );
}
