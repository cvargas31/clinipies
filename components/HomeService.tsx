import { House, ShieldCheck, Stethoscope, Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { homeService } from "@/lib/clinic";

/**
 * Bloque destacado del servicio a domicilio: tarjeta con degradado de marca,
 * mensaje + tres pilares (comodidad, seguridad, profesionalismo), CTA a
 * WhatsApp y dos listas ("Ideal para" y "Servicios disponibles").
 *
 * TODO cliente: para usar una foto real de la atención en casa, coloca el
 * archivo en /public/domicilio.jpg y sustituye el bloque de iconos por una
 * <Image ... /> con la foto.
 */
const features = [
  {
    icon: House,
    label: "Comodidad",
    text: "Te atendemos en tu propio hogar, sin traslados.",
  },
  {
    icon: ShieldCheck,
    label: "Seguridad",
    text: "Instrumental esterilizado en cada visita.",
  },
  {
    icon: Stethoscope,
    label: "Profesionalismo",
    text: "Atención clínica realizada por especialistas.",
  },
];

export function HomeService() {
  return (
    <section id="domicilio" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-[var(--radius-brand)] brand-gradient text-white shadow-brand">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-14">
            {/* Columna izquierda: mensaje + pilares + CTA */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-bright ring-1 ring-white/15">
                <House className="h-4 w-4" aria-hidden />
                Servicio a domicilio
              </span>

              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight md:text-4xl">
                {homeService.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                {homeService.subtitle}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {features.map((f) => (
                  <div key={f.label}>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-bright ring-1 ring-white/15">
                      <f.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-3 font-bold">{f.label}</h3>
                    <p className="mt-1 text-sm text-white/70">{f.text}</p>
                  </div>
                ))}
              </div>

              <WhatsAppButton
                variant="solid"
                message={homeService.whatsappPrefill}
                className="mt-8 text-lg"
              >
                Agendar cita a domicilio
              </WhatsAppButton>
            </div>

            {/* Columna derecha: listas sobre tarjeta translúcida */}
            <div className="grid gap-6 rounded-[var(--radius-brand)] bg-white/10 p-6 ring-1 ring-white/15 sm:grid-cols-2 sm:gap-8 md:p-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-bright">
                  Ideal para
                </h3>
                <ul className="mt-4 space-y-3">
                  {homeService.idealFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-bright">
                  Servicios disponibles
                </h3>
                <ul className="mt-4 space-y-3">
                  {homeService.services.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
