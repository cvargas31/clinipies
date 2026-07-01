import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/clinic";

/** Opiniones de pacientes. */
export function Testimonials() {
  return (
    <section id="opiniones" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            Opiniones
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
        </Reveal>

        <Reveal group className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[var(--radius-brand)] border border-mist-deep bg-mist/50 p-7"
            >
              <Quote className="h-8 w-8 text-teal/40" aria-hidden />
              <blockquote className="mt-3 flex-1 text-ink/80">
                “{t.text}”
              </blockquote>
              <div
                className="mt-5 flex text-amber-400"
                aria-label="5 de 5 estrellas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <figcaption className="mt-3 font-bold text-navy">
                {t.name}
                {t.location && (
                  <span className="font-normal text-ink/50"> · {t.location}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
