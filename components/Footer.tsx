import { MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { clinic, telUrl } from "@/lib/clinic";

/* Iconos de marca en SVG (lucide ya no incluye logos de redes). */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h2.5V6H14c-2 0-3.5 1.5-3.5 3.5V11H8.5v3h2V21h3v-7h2.2l.3-3H13.5V9.6c0-.4.2-.6.5-.6Z" />
    </svg>
  );
}

/** Pie de página mínimo. */
export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm">{clinic.slogan}.</p>
          <div className="mt-4 flex gap-3">
            <a
              href={clinic.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={clinic.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-bold text-white">Contacto</h3>
          <p className="mt-3 flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" aria-hidden />
            {clinic.address}
          </p>
          <a href={telUrl} className="mt-2 block transition-colors hover:text-white">
            {clinic.phoneDisplay}
          </a>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-bold text-white">Horario</h3>
          <ul className="mt-3 space-y-1">
            {clinic.hours.map((h) => (
              <li key={h.days}>
                {h.days}: <span className="text-white">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {clinic.name} · {clinic.tagline}. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
