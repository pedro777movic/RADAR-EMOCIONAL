import { Button } from '@/components/ui/button';
import { MotionWrapper } from './motion-wrapper';

export function CtaSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionWrapper>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Você pode continuar tentando adivinhar.
            <br />
            <span className="text-primary">Ou pode entender o padrão.</span>
          </h2>
          <Button size="lg" className="mt-10 animate-glow-pulse font-bold tracking-wider shadow-[0_0_20px_theme(colors.primary/0.5)] transition-shadow hover:shadow-[0_0_30px_theme(colors.primary/0.8)]">
            Quero acessar agora
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
