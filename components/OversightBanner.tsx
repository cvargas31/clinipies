import { ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import { Wave } from "./Wave";
import { WhatsAppButton } from "./WhatsAppButton";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Higiene garantizada",
    text: "Instrumental esterilizado y protocolos clínicos en cada visita.",
  },
  {
    icon: Stethoscope,
    title: "Criterio profesional",
    text: "Valoramos tu caso antes de tratar, sin procedimientos innecesarios.",
  },
  {
    icon: Sparkles,
    title: "Resultados reales",
    text: "Alivio desde la primera sesión y seguimiento de tu evolución.",
  },
];

/** Banner oscuro de tranquilidad clínica. */
export function OversightBanner() {
  return (
    <>
      <Wave fill="var(--color-navy)" className="-mb-px" />

      <section className="brand-gradient py-16 text-white md:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
              Cuidado clínico en el que puedes confiar
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Tus pies sostienen todo tu cuerpo. Los tratamos con la seriedad de
              una clínica y la calidez de quien te conoce por tu nombre.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-teal-bright ring-1 ring-white/15">
                  <h.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm text-white/75">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <WhatsAppButton variant="light" className="text-lg">
              Reserva tu cita ahora
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
