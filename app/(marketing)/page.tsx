import { FeaturesBento } from "@/components/landing/features-bento";
import CallToActionSection from "@/components/landing/cta-section";
import FAQSection from "@/components/landing/faq-section";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import { ThemeAwareParticles } from "@/components/magicui/theme-aware-particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesBento />
      <ServicesSection />
      <SphereMask />
      <FAQSection />
      <CallToActionSection />
      <ThemeAwareParticles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        lightColor="#000000"
        darkColor="#ffffff"
      />
    </>
  );
}
