import type { Metadata, Viewport } from "next";
import { Sora, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import { GA_ID, GADS_ID } from "@/lib/gtag";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Quiropedia clínica en " +
  clinic.address +
  ". Tratamos uña encarnada, callosidades, hongos, pie diabético y más. Pide tu cita por WhatsApp.";

export const metadata: Metadata = {
  title: `${clinic.name} · ${clinic.tagline} | ${clinic.slogan}`,
  description,
  applicationName: clinic.name,
  keywords: [
    "podología",
    "quiropedia",
    "uña encarnada",
    "pie diabético",
    "callosidades",
    "hongos en uñas",
    "pedicure clínico",
    "cuidado de los pies",
  ],
  openGraph: {
    title: `${clinic.name} · ${clinic.tagline}`,
    description,
    type: "website",
    locale: "es_ES",
    siteName: clinic.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} · ${clinic.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e2e59",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        {/* Google Tag (gtag.js) — GA4 + Google Ads. Solo si hay IDs. */}
        {(GA_ID || GADS_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
                ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
