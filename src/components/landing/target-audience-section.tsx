import { MotionWrapper } from './motion-wrapper';
import { CheckCircle2 } from 'lucide-react';

const whoIsItFor = [
  'Estão no início de algo e sentem que travou',
  'Sentem que ele mudou repentinamente',
  'Não querem parecer desesperadas ou carentes',
  'Querem ser desejadas, não implorar atenção',
];

export function TargetAudienceSection() {
  return (
    <section className="w-full bg-black/20 py-20 sm:py-32">
      <div className="container mx-auto max-w-3xl px-4">
        <MotionWrapper>
          <div className="glass rounded-2xl p-8 shadow-2xl shadow-purple-500/10 md:p-12">
            <h2 className="text-center font-headline text-3xl font-bold">
              Para quem é:
            </h2>
            <ul className="mt-8 space-y-4">
              {whoIsItFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-accent/50 bg-accent/10 p-4 text-center">
              <p className="font-semibold text-accent-foreground">
                "Não é para quem quer joguinhos infantis. É para quem quer consciência emocional."
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
