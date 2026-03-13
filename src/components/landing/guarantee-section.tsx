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
            Risco realmente baixo.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground space-y-4">
            <p>
              O acesso ao Radar Emocional custa menos que uma saída comum.
            </p>
            <p>
              Você acessa imediatamente, entende o padrão da situação e decide por si mesma se faz sentido aplicar.
            </p>
          </div>
          <div className="mt-8 space-y-1">
            <p className="text-sm font-bold uppercase tracking-widest text-foreground">
              Sem assinatura.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-foreground">
              Sem cobranças recorrentes.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-foreground">
              Sem surpresas.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
