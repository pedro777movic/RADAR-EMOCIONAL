import { MotionWrapper } from './motion-wrapper';

export function AboutSection() {
  return (
    <section className="w-full border-t border-white/5 bg-black/10 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <MotionWrapper>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-xl font-bold tracking-tight text-foreground/90 sm:text-2xl">
              Sobre o Radar Emocional
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground/80">
              <p>
                O Radar Emocional foi desenvolvido pela equipe Lunar Attraction, dedicada a estudar padrões emocionais em dinâmicas de relacionamento.
              </p>
              <p>
                A partir da análise de centenas de situações reais, foi criado um sistema simples de diagnóstico que avalia sinais comportamentais como nível de investimento emocional, padrão de comunicação e mudanças de comportamento.
              </p>
              <p>
                Com base nas respostas, o aplicativo identifica o momento atual da dinâmica da relação e apresenta orientações claras sobre possíveis ajustes.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
