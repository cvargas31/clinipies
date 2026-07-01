import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { trustPoints, clinic } from "@/lib/clinic";

/** “¿Por qué elegirnos?” — puntos de confianza sobre fondo claro. */
export function TrustSection() {
  return (
    <section id="confianza" className="bg-mist pb-16 pt-4 md:pb-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              ¿Por qué elegirnos?
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
              Pies sanos en manos de profesionales
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              En {clinic.name} combinamos higiene clínica, experiencia y un trato
              cercano para que camines sin dolor.
            </p>
          </Reveal>

          <Reveal group className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-[var(--radius-brand)] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(14,46,89,0.25)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {p.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
  );
}
