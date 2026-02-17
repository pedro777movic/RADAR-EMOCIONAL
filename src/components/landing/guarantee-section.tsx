import { MotionWrapper } from './motion-wrapper';
import { Shield } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="w-full bg-background py-20 sm:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <MotionWrapper>
          <div className="flex justify-center">
            <div className="relative">
              <Shield className="relative z-10 size-24 text-primary" />
              <div className="absolute inset-0 -z-0 animate-glow-pulse rounded-full bg-primary/20 blur-2xl"></div>
            </div>
          </div>
          <h2 className="mt-8 font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Risco Zero
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Você pode acessar. Ler. Aplicar.
            <br />
            Se não sentir diferença na forma como ele reage…
            <br />
            <span className="font-semibold text-foreground">Você simplesmente não continua.</span>
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-foreground">
            Sem letras miúdas.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
