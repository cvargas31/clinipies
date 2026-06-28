import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { OversightBanner } from "@/components/OversightBanner";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/WhatsAppButton";
import { clinic, services } from "@/lib/clinic";

/** Datos estructurados para SEO local (Google). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  description: `${clinic.tagline} — ${clinic.slogan}`,
  telephone: clinic.phoneHref,
  address: clinic.address,
  openingHours: "Mo-Sa 09:00-18:00",
  medicalSpecialty: "Podiatric",
  availableService: services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <TrustSection />
        <Services />
        <Gallery />
        <OversightBanner />
        <Pricing />
        <Testimonials />
        <Team />
        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
