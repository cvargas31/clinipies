import {
  Activity,
  Droplet,
  Footprints,
  Hand,
  HeartHandshake,
  HeartPulse,
  Scissors,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  TrendingUp,
  UserCheck,
  Waves,
  type LucideIcon,
} from "lucide-react";

/** Mapea los nombres de icono usados en lib/clinic.ts a componentes lucide. */
const icons: Record<string, LucideIcon> = {
  activity: Activity,
  droplet: Droplet,
  footprints: Footprints,
  hand: Hand,
  "heart-handshake": HeartHandshake,
  "heart-pulse": HeartPulse,
  scissors: Scissors,
  "shield-check": ShieldCheck,
  "shield-plus": ShieldPlus,
  sparkles: Sparkles,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
  waves: Waves,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Footprints;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />;
}
