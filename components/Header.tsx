import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { MobileMenu } from "./MobileMenu";
import { clinic } from "@/lib/clinic";

/**
 * Cabecera: logo + enlaces + CTAs.
 *
 * Los anchors son absolutos (`/#seccion`) y se navegan con `next/link` para que
 * funcionen desde cualquier página: en la home hacen scroll suave in-page (Next
 * usa scrollIntoView nativo, que respeta `scroll-behavior: smooth`); desde otras
 * rutas (ej. /bioseguridad) navegan a la home y saltan a la sección. Sin recargas.
 */
const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#domicilio", label: "A domicilio" },
  { href: "/bioseguridad", label: "Bioseguridad" },
  { href: "/#tarifas", label: "Tarifas" },
  { href: "/#opiniones", label: "Opiniones" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist-deep/70 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link
          href="/#inicio"
          aria-label={`${clinic.name} — inicio`}
          className="min-w-0 shrink"
        >
          <Logo markClassName="h-12 w-12 md:h-18 md:w-18" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Secciones">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-teal"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <WhatsAppButton className="shrink-0 px-4 py-2.5 text-sm">
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Cita</span>
          </WhatsAppButton>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
