import { MotionWrapper } from './motion-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Repeat, Target, HeartCrack, BatteryWarning } from 'lucide-react';

const reasons = [
  {
    icon: <Repeat className="size-10 text-accent" />,
    title: 'A previsibilidade aumenta',
  },
  {
    icon: <Target className="size-10 text-accent" />,
    title: 'O desafio desaparece',
  },
  {
    icon: <HeartCrack className="size-10 text-accent" />,
    title: 'A tensão emocional some',
  },
  {
    icon: <BatteryWarning className="size-10 text-accent" />,
    title: 'A energia muda sem você perceber',
  },
];

export function TruthSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Homens não se afastam porque perderam o sentimento.
              <br />
              <span className="text-accent">Eles se afastam quando:</span>
            </h2>
          </div>
        </MotionWrapper>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <MotionWrapper key={index} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="glass h-full transform-gpu text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_theme(colors.accent/0.3)]">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    {reason.icon}
                  </div>
                  <CardTitle className="mt-6 text-xl">{reason.title}</CardTitle>
                </CardHeader>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
