import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wave } from "@/components/Wave";
import { Reveal } from "@/components/Reveal";
import { BiosecurityCards } from "@/components/Biosecurity";
import { WhatsAppButton, StickyWhatsApp } from "@/components/WhatsAppButton";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: `Bioseguridad e higiene clínica | ${clinic.name}`,
  description:
    "Conoce los protocolos de higiene y esterilización de CliniPies: autoclave, material desechable y ambientes desinfectados en cada visita.",
  alternates: { canonical: "/bioseguridad" },
};

export default function BioseguridadPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero de página */}
        <section className="brand-gradient relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="container-page reveal relative py-16 text-white md:py-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-bright ring-1 ring-white/15">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Bioseguridad
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
              Protocolos de higiene y esterilización
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Tu tratamiento empieza por tu seguridad. Estos son los protocolos
              clínicos que seguimos en {clinic.name} en cada visita.
            </p>
          </div>
        </section>

        {/* Intro: Protección y salud */}
        <Wave fill="var(--color-mist)" className="-mt-px" />
        <section className="bg-mist py-16 md:py-20">
          <Reveal className="container-page max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Protección y salud
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
              La higiene no se ve, pero se nota
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              En {clinic.name} tratamos uña encarnada, callosidades, hongos y más
              con material esterilizado y de un solo uso. Cumplimos estrictos
              protocolos de asepsia para que cada visita sea segura, tanto para ti
              como para nuestro equipo.
            </p>
          </Reveal>
        </section>

        {/* Medidas de prevención */}
        <section className="bg-white pb-16 md:pb-24">
          <div className="container-page pt-16 md:pt-20">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Medidas de prevención
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
                Así cuidamos tu seguridad
              </h2>
            </Reveal>

            <div className="mt-12">
              <BiosecurityCards />
            </div>
          </div>
        </section>

        {/* CTA */}
        <Wave fill="var(--color-navy)" className="-mb-px" />
        <section className="brand-gradient py-16 text-white md:py-20">
          <div className="container-page text-center">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold md:text-4xl">
              Agenda tu cita con total tranquilidad
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Escríbenos por WhatsApp y resuelve cualquier duda sobre nuestros
              protocolos antes de tu visita.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton variant="light" className="text-lg">
                Reserva tu cita ahora
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
