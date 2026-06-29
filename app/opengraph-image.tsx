import { ImageResponse } from "next/og";
import { clinic } from "@/lib/clinic";

// Metadatos de la imagen (Next los inyecta en <head> automáticamente)
export const alt = `${clinic.name} · ${clinic.tagline} — ${clinic.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se muestra al compartir el enlace (WhatsApp, Facebook, X…)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #0a2444 0%, #0e2e59 45%, #1a9a9a 130%)",
        }}
      >
        {/* Marca de agua sutil: olas en la base que evocan el logo */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background:
              "linear-gradient(0deg, rgba(39,183,183,0.35) 0%, rgba(39,183,183,0) 100%)",
          }}
        />

        {/* Logotipo */}
        <svg width="180" height="180" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <path
            d="M16 38c0 9 7.5 15 16 15s16-6 16-15c0-2.4-2-4-4.2-3.1C40 36.3 36.2 37 32 37s-8-0.7-11.8-2.1C18 34 16 35.6 16 38Z"
            fill="#27b7b7"
          />
          <path
            d="M32 14c-4.8 0-8 3.8-8 9.2 0 4.8 3.4 8.3 8 8.3s8-3.5 8-8.3C40 17.8 36.8 14 32 14Z"
            fill="#ffffff"
          />
          <circle cx="24.5" cy="11.5" r="2.4" fill="#ffffff" />
          <circle cx="30" cy="9" r="2.6" fill="#ffffff" />
          <circle cx="36" cy="9.4" r="2.5" fill="#ffffff" />
          <circle cx="41" cy="12" r="2.2" fill="#ffffff" />
        </svg>

        {/* Wordmark bicolor */}
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 24,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>{clinic.nameParts.dark}</span>
          <span style={{ color: "#27b7b7" }}>{clinic.nameParts.accent}</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.78)",
            marginTop: 18,
          }}
        >
          {clinic.tagline}
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: "#ffffff",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {clinic.slogan}
        </div>
      </div>
    ),
    { ...size }
  );
}
