import { Button } from '@/components/ui/button';
import { MotionWrapper } from './motion-wrapper';
import { Check } from 'lucide-react';

const features = [
  'Acesso imediato ao diagnóstico completo',
  'Análise clara do padrão atual da relação',
  'Ajustes práticos de reposicionamento',
  'Orientações diretas organizadas por etapas',
];

export function CtaSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionWrapper>
          <h3 className="font-headline text-4xl sm:text-5xl font-black text-accent mb-6 tracking-tight transform -rotate-2 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] [-webkit-text-stroke:0.5px_red]">
            Seu Radar Emocional
          </h3>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Você pode continuar tentando adivinhar.
            <br />
            <span className="text-primary">Ou pode entender o padrão.</span>
          </h2>
          <Button size="lg" className="mt-10 animate-glow-pulse font-bold tracking-wider shadow-[0_0_20px_theme(colors.primary/0.5)] transition-shadow hover:shadow-[0_0_30px_theme(colors.primary/0.8)]">
            Quero acessar agora
          </Button>

          <div className="mt-10 mx-auto max-w-md">
            <p className="text-base text-center font-medium text-foreground/90">Dentro do aplicativo Radar Emocional, você terá:</p>
            <ul className="mt-4 space-y-2 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="text-primary size-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs text-muted-foreground/80">
              Aplicativo digital.
              <br/>
              Acesso instantâneo após a confirmação do pagamento.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
