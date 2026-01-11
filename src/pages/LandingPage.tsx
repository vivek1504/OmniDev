import { HeroSection } from "../components/HeroSection";
import { FrameworkSection } from "../components/FrameworkSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { FooterSection } from "../components/ui/FooterSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <HeroSection />
      <FrameworkSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}
