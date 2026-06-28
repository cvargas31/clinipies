import { MapPin, Clock, Phone } from "lucide-react";
import { Wave } from "./Wave";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { clinic } from "@/lib/clinic";

/** Sección de contacto y ubicación — el bloque de conversión principal. */
export function ContactSection() {
  return (
    <>
      <Wave fill="var(--color-navy)" className="-mb-px" />

      <section id="contacto" className="brand-gradient py-16 text-white md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Info + CTA */}
          <div>
            <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
              Pide tu cita hoy mismo
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/80">
              Escríbenos por WhatsApp y te confirmamos disponibilidad en
              minutos. También puedes llamarnos en horario de atención.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-white/60">Dirección</dt>
                  <dd className="text-white">{clinic.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-white/60">Horario</dt>
                  {clinic.hours.map((h) => (
                    <dd key={h.days} className="text-white">
                      {h.days}: {h.time}
                    </dd>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-white/60">Teléfono</dt>
                  <dd className="text-white">{clinic.phoneDisplay}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton variant="solid" className="text-lg" />
              <CallButton variant="outlineLight" />
            </div>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-[var(--radius-brand)] shadow-brand ring-1 ring-white/10">
            <iframe
              src={clinic.mapEmbedUrl}
              title={`Ubicación de ${clinic.name}`}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
