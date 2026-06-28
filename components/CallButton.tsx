import { Phone } from "lucide-react";
import { clinic, telUrl } from "@/lib/clinic";

type Variant = "outline" | "outlineLight";

const variants: Record<Variant, string> = {
  outline: "border-navy/25 text-navy hover:bg-navy hover:text-white",
  outlineLight: "border-white/40 text-white hover:bg-white hover:text-navy",
};

/** Enlace click-to-call (CTA secundario). */
export function CallButton({
  variant = "outline",
  className = "",
  label,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={telUrl}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-base font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      <Phone className="h-5 w-5" strokeWidth={2.2} aria-hidden />
      {label ?? `Llamar ${clinic.phoneDisplay}`}
    </a>
  );
}
