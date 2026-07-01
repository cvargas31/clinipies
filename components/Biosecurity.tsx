import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { biosecurity } from "@/lib/clinic";

/**
 * Rejilla de medidas de bioseguridad para la página `/bioseguridad`. El
 * contenido vive en un solo sitio (`lib/clinic.ts`). Las tarjetas revelan en
 * cascada al entrar en vista.
 */
export function BiosecurityCards() {
  return (
    <Reveal group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {biosecurity.map((b) => (
        <article
          key={b.title}
          className="group flex flex-col rounded-[var(--radius-brand)] border border-mist-deep bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-teal/40 hover:shadow-brand"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-teal group-hover:text-white">
            <Icon name={b.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-navy">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            {b.description}
          </p>
        </article>
      ))}
    </Reveal>
  );
}
