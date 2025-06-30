
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PainSolutionSection } from "@/components/PainSolutionSection";
import { ProductPreviewSection } from "@/components/ProductPreviewSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>
      
      <PainSolutionSection />
      
      <ProductPreviewSection />
      
      <TestimonialsSection />
      
      <PricingSection />
      
      <div className="relative">
        <BackgroundBeams />
        <WaitlistSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
