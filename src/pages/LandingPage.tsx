import { HeroSection } from '../components/landing/HeroSection';
import { FrameworkSection } from '../components/landing/FrameworkSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { FooterSection } from '../components/landing/FooterSection';

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
