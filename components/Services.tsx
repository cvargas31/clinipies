import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { WhatsAppButton } from "./WhatsAppButton";
import { services } from "@/lib/clinic";

/** Servicios reales de la clínica en tarjetas con icono. */
export function Services() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
            Tratamientos para cada necesidad de tus pies
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Toca cualquier servicio y escríbenos por WhatsApp para reservar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col rounded-[var(--radius-brand)] border border-mist-deep bg-white p-6 transition-all duration-200 hover:border-teal/40 hover:shadow-brand"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-teal group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                {s.description}
              </p>
              <WhatsAppButton
                variant="ghost"
                message={`Hola 👋, me interesa el servicio de ${s.name} en CliniPies. ¿Me dan más información?`}
                className="mt-5 self-start px-4 py-2 text-sm"
              >
                Consultar
                <ArrowRight className="h-4 w-4" aria-hidden />
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
