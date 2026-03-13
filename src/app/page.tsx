'use client';

import { useRef, useState, useEffect } from 'react';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { HeroSection } from '@/components/landing/hero-section';
import { MechanismSection } from '@/components/landing/mechanism-section';
import { RecognitionSection } from '@/components/landing/recognition-section';
import { TargetAudienceSection } from '@/components/landing/target-audience-section';
import { TruthSection } from '@/components/landing/truth-section';
import { AboutSection } from '@/components/landing/about-section';
import { GuidedReadingProgress } from '@/components/guided-reading/guided-reading-progress';
import { DiagnosisReadyModal } from '@/components/guided-reading/diagnosis-ready-modal';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for the sections to be observed
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { ref: section1Ref, progress: 25, name: 'Identificação' },
      { ref: section2Ref, progress: 50, name: 'Entendimento' },
      { ref: section3Ref, progress: 75, name: 'Estrutura do método' },
      { ref: section4Ref, progress: 100, name: 'CTA final' },
    ];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.ref.current === entry.target);
            if (section) {
              setProgress((prev) => Math.max(prev, section.progress));
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsModalOpen(true), 500); // Small delay for effect
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <>
      <GuidedReadingProgress progress={progress} />
      <DiagnosisReadyModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      <div className="flex w-full flex-col items-center overflow-x-hidden">
        <HeroSection />
        <div ref={section1Ref}>
          <RecognitionSection />
        </div>
        <div ref={section2Ref}>
          <TruthSection />
          <MechanismSection />
        </div>
        <div ref={section3Ref}>
          <BenefitsSection />
          <TargetAudienceSection />
        </div>
        <div ref={section4Ref}>
          <CtaSection />
          <GuaranteeSection />
          <AboutSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
