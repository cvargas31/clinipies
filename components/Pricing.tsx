import { Check } from "lucide-react";
import { Wave } from "./Wave";
import { WhatsAppButton } from "./WhatsAppButton";
import { pricing } from "@/lib/clinic";

/** Tarifas de referencia. */
export function Pricing() {
  return (
    <>
      <Wave fill="var(--color-mist)" className="-mt-px" />

      <section id="tarifas" className="bg-mist py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Tarifas
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
              Precios claros, sin sorpresas
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Estos son nuestros precios de referencia (no incluyen ITBMS). El
              costo final depende de tu valoración. Escríbenos y te confirmamos
              al instante.
            </p>
            <WhatsAppButton className="mt-6">
              Consultar mi tratamiento
            </WhatsAppButton>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-brand)] bg-white shadow-brand">
            <ul className="divide-y divide-mist-deep">
              {pricing.map((p) => (
                <li
                  key={p.service}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${
                    p.featured ? "bg-teal/5" : ""
                  }`}
                >
                  <span className="flex items-center gap-3 font-medium text-ink">
                    <Check
                      className="h-5 w-5 shrink-0 text-teal"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    {p.service}
                    {p.featured && (
                      <span className="rounded-full bg-teal px-2 py-0.5 text-xs font-bold text-white">
                        Popular
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-display text-lg font-bold text-navy">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
