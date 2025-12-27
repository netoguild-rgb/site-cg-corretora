import { Button } from '@/components/ui/button';
import { GraduationCap, FileCheck, Zap, BadgeCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  {
    icon: FileCheck,
    title: 'Obrigatório por Lei',
    description: 'Conformidade com a Lei do Estágio nº 11.788/2008.',
  },
  {
    icon: Zap,
    title: 'Apólice emitida na hora',
    description: 'Contratação 100% digital em poucos minutos.',
  },
  {
    icon: BadgeCheck,
    title: 'Melhor custo-benefício',
    description: 'A partir de R$ 3,00 por mês por estagiário.',
  },
];

export function InternInsuranceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="estagiario" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <div
            className={cn(
              'space-y-8 opacity-0',
              isVisible && 'animate-fade-in-up'
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>Seguro Estagiário</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Obrigatório por Lei,{' '}
              <span className="text-gradient-orange">essencial para a segurança.</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Proteja seus estagiários com um seguro completo, rápido e com o
              melhor preço do mercado. Ideal para empresas de todos os tamanhos e
              instituições de ensino.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={cn(
                    'flex items-start gap-4 p-4 bg-muted/50 rounded-xl opacity-0',
                    isVisible && 'animate-fade-in-up'
                  )}
                  style={{ animationDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Contratar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Element */}
          <div
            className={cn(
              'relative opacity-0',
              isVisible && 'animate-fade-in-up animation-delay-200'
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-orange rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-card rounded-3xl border border-border/50 shadow-elevated p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">A partir de</p>
                    <p className="text-5xl md:text-6xl font-bold text-foreground">
                      R$ 3<span className="text-2xl">,00</span>
                    </p>
                    <p className="text-muted-foreground">/mês por estagiário</p>
                  </div>
                  <ul className="text-left space-y-3">
                    {[
                      'Cobertura de acidentes pessoais',
                      'Morte acidental',
                      'Invalidez permanente',
                      'Auxílio funeral',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <BadgeCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
