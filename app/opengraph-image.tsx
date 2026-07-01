import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { clinic } from "@/lib/clinic";

// Metadatos de la imagen (Next los inyecta en <head> automáticamente)
export const alt = `${clinic.name} · ${clinic.tagline} — ${clinic.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Logo real de la marca (PNG transparente) leído desde /public y embebido
// como data URI para que Satori pueda pintarlo dentro de la tarjeta.
const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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

        {/* Logo real dentro de un disco blanco para que resalte sobre el fondo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: 260,
            background: "#ffffff",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={200} height={200} alt="" />
        </div>

        {/* Wordmark bicolor */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 28,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>{clinic.nameParts.dark}</span>
          <span style={{ color: "#27b7b7" }}>{clinic.nameParts.accent}</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.78)",
            marginTop: 16,
          }}
        >
          {clinic.tagline}
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#ffffff",
            marginTop: 24,
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
