import { BenefitsSection } from '@/components/landing/benefits-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { HeroSection } from '@/components/landing/hero-section';
import { MechanismSection } from '@/components/landing/mechanism-section';
import { RecognitionSection } from '@/components/landing/recognition-section';
import { TargetAudienceSection } from '@/components/landing/target-audience-section';
import { TruthSection } from '@/components/landing/truth-section';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
      <HeroSection />
      <RecognitionSection />
      <TruthSection />
      <MechanismSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <GuaranteeSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
