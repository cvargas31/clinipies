import { team } from "@/lib/clinic";

/** Nuestro equipo. Iniciales como avatar (sustituibles por fotos reales). */
export function Team() {
  return (
    <section id="equipo" className="bg-mist py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
            Nuestro equipo
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-navy md:text-4xl">
            Profesionales que cuidan tus pies
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center rounded-[var(--radius-brand)] bg-white p-7 text-center shadow-[0_10px_30px_-18px_rgba(14,46,89,0.25)]"
            >
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-navy), var(--color-teal))",
                }}
                aria-hidden
              >
                {m.name
                  .replace(/^(Dra?\.|Lic\.)\s*/i, "")
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{m.name}</h3>
              <p className="mt-1 text-sm text-teal">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
