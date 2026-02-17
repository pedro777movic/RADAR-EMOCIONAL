import { MotionWrapper } from './motion-wrapper';

const steps = [
  'Reativar o interesse',
  'Restaurar a tensão emocional',
  'Fazer ele investir novamente',
];

export function MechanismSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <MotionWrapper>
          <div className="text-center">
            <p className="font-headline text-lg text-muted-foreground">
              Não é sobre joguinhos. É sobre instinto.
            </p>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Existe uma forma específica de...
            </h2>
          </div>
        </MotionWrapper>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-4 hidden h-full w-0.5 -translate-x-1/2 bg-white/10 md:block" aria-hidden="true"></div>
          {steps.map((step, index) => (
            <MotionWrapper key={step} className="relative mt-8 first:mt-0 md:mt-16">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-[0_0_15px_theme(colors.primary/0.5)]">
                  {index + 1}
                </div>
                <div className="glass w-full rounded-lg p-6 text-center text-xl font-semibold md:flex-1 md:text-left">
                  {step}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper>
          <p className="mt-12 text-center text-lg text-muted-foreground">
            Sem parecer carente. Sem pressão. Sem drama.
          </p>
        </MotionWrapper>

        <MotionWrapper className="mt-24">
          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold tracking-tight">
              Não é manipulação.{' '}
              <span className="text-accent">É ajuste de energia.</span>
            </h3>
          </div>
          <div className="glass mx-auto mt-12 max-w-2xl rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">ANTES</span>
                <div className="mt-2 h-4 w-full rounded-full bg-red-500/20">
                  <div className="h-4 w-[20%] rounded-full bg-red-500"></div>
                </div>
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-primary">AGORA</span>
                <div className="mt-2 h-4 w-full rounded-full bg-cyan-400/20">
                  <div className="h-4 w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
