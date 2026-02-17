import { Button } from '@/components/ui/button';
import { MotionWrapper } from './motion-wrapper';

export function RecognitionSection() {
  return (
    <section className="w-full bg-black/20 py-20 sm:py-32">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16">
        <MotionWrapper className="flex flex-col justify-center">
          <p className="font-headline text-lg text-primary">Você não fez nada "errado".</p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Mas algo mudou.
          </h2>
          <ul className="mt-6 space-y-2 text-lg text-muted-foreground">
            <li>As mensagens diminuíram.</li>
            <li>O interesse esfriou.</li>
            <li>A intensidade virou silêncio.</li>
          </ul>
        </MotionWrapper>
        
        <MotionWrapper transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass flex flex-col items-center justify-center rounded-xl p-8 text-center">
                <p className="text-xl font-semibold">E o mais estranho?</p>
                <p className="mt-4 text-lg text-muted-foreground">
                Ele ainda aparece. Ainda visualiza. Ainda mantém você ali.
                </p>
                <div className="my-6 h-px w-20 bg-white/20"></div>
                <p className="text-lg font-semibold text-accent">
                Isso não é acaso. É dinâmica emocional.
                </p>
            </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
