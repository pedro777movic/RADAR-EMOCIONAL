'use client';
import { Button } from '@/components/ui/button';
import { MotionWrapper } from './motion-wrapper';
import { Check } from 'lucide-react';

const features = [
  'Um diagnóstico inicial baseado na sua situação',
  'Análise clara do padrão atual da relação',
  'Explicação do que está causando o esfriamento',
  'Plano prático de reposicionamento em etapas',
  'Orientações diretas e aplicáveis',
  'Estratégias para recuperar controle emocional',
];

export function CtaSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionWrapper>
          <p className="font-script text-3xl text-white transform -rotate-12 -mb-4 [text-shadow:0_0_8px_#fff,0_0_12px_#fff]">
            APP
          </p>
          <h3 className="font-headline text-4xl sm:text-5xl font-black text-accent mb-4 tracking-tight transform -rotate-2 [text-shadow:0_0_10px_hsl(var(--accent)),2px_2px_2px_rgba(0,0,0,0.3)] [-webkit-text-stroke:0.5px_red]">
            Seu Radar Emocional
          </h3>
          <p className="mb-8 mx-auto max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Uma ferramenta criada para revelar o padrão emocional invisível que pode estar afetando a dinâmica da relação. 
            Você recebe um diagnóstico claro da situação, além de orientações práticas para reposicionar a dinâmica emocional.
          </p>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Você pode continuar tentando adivinhar.
            <br />
            <span className="text-primary">Ou pode entender o padrão.</span>
          </h2>
          
          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-4">O acesso ao aplicativo é liberado após a confirmação do pagamento.</p>
            <a href="https://pay.cakto.com.br/39e5qza_779133">
              <Button size="lg" className="animate-glow-pulse font-bold tracking-wider shadow-[0_0_20px_theme(colors.primary/0.5)] transition-shadow hover:shadow-[0_0_30px_theme(colors.primary/0.8)]">
                Quero acessar agora
              </Button>
            </a>
          </div>

          <div className="mt-10 mx-auto max-w-md">
            <p className="text-base text-center font-medium text-foreground/90">Dentro do seu aplicativo Radar Emocional, você terá:</p>
            <ul className="mt-4 space-y-2 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="text-primary size-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground/80">
                Aplicativo digital.
                <br/>
                Acesso instantâneo após a confirmação do pagamento.
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-tighter text-muted-foreground/60">
                Produto digital. Acesso imediato após pagamento.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
