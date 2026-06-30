import { Star, Clock, Footprints } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { LogoMark } from "./Logo";
import { clinic } from "@/lib/clinic";

/**
 * Hero dividido (elegido): panel de marca a la izquierda con titular y CTAs;
 * a la derecha un visual con máscara de onda.
 *
 * TODO cliente: para usar una foto real, coloca el archivo en
 * /public/hero.jpg y reemplaza el bloque decorativo del visual por
 * <Image src="/hero.jpg" alt="..." fill className="object-cover" />.
 */
export function Hero() {
  return (
    <section id="inicio" className="brand-gradient relative overflow-hidden">
      {/* Textura sutil de fondo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container-page relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        {/* Columna de texto */}
        <div className="reveal text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-bright ring-1 ring-white/15">
            <Footprints className="h-4 w-4" aria-hidden />
            {clinic.name}
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
            {clinic.slogan}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/80">
            En {clinic.name} tratamos uña encarnada, callosidades, hongos, pie
            diabético y más, con material esterilizado y atención profesional.
            Agenda tu cita en segundos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="solid" className="text-lg" />
            <CallButton variant="outlineLight" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-300 text-amber-300"
                  />
                ))}
              </span>
              Pacientes satisfechos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-bright" aria-hidden />
              {clinic.hours[0].days}: {clinic.hours[0].time}
            </span>
          </div>
        </div>

        {/* Columna visual con máscara de onda */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-mist to-teal/30 shadow-brand"
            style={{ borderRadius: "44% 56% 58% 42% / 38% 40% 60% 62%" }}
          >
            {/* Visual de marca (sustituible por foto real, ver nota arriba) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <LogoMark className="h-2/3 w-2/3 opacity-90" />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-2 left-0 right-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in srgb, var(--color-teal) 35%, transparent), transparent)",
              }}
            />
          </div>

          {/* Tarjeta flotante de confianza */}
          <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-brand sm:left-auto sm:right-0 sm:w-auto sm:translate-x-0">
            <p className="text-2xl font-extrabold text-navy">+9</p>
            <p className="text-sm font-medium text-ink/70">
              tratamientos podológicos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
