import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { clinic } from "@/lib/clinic";

/**
 * Cabecera mínima: logo + enlaces de ancla + CTAs.
 * Sin navegación a otras páginas para no fugar clics del anuncio.
 */
const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tarifas", label: "Tarifas" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist-deep/70 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#inicio" aria-label={`${clinic.name} — inicio`}>
          <Logo markClassName="h-18 w-18" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Secciones">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton className="px-4 py-2.5 text-sm">
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Cita</span>
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
