import { Button } from '@/components/ui/button';
import {
  Heart,
  Users,
  Stethoscope,
  Smartphone,
  Clock,
  Shield,
  ArrowRight,
  Baby,
  Activity,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const healthFeatures = [
  {
    icon: Stethoscope,
    title: 'Ampla rede credenciada',
    description: 'Acesso aos melhores hospitais, clínicas e laboratórios.',
  },
  {
    icon: Smartphone,
    title: 'Telemedicina incluída',
    description: 'Consulte médicos online 24h pelo aplicativo.',
  },
  {
    icon: Clock,
    title: 'Sem carência*',
    description: 'Planos com cobertura imediata. *Consulte condições.',
  },
  {
    icon: Baby,
    title: 'Cobertura familiar',
    description: 'Proteção para toda a família com condições especiais.',
  },
];

const lifeFeatures = [
  {
    icon: Users,
    title: 'Proteção para sua família',
    description: 'Segurança financeira para quem você mais ama.',
  },
  {
    icon: Activity,
    title: 'Cobertura por invalidez',
    description: 'Proteção em casos de invalidez permanente.',
  },
  {
    icon: Shield,
    title: 'Doenças graves',
    description: 'Cobertura adicional para diagnóstico de doenças graves.',
  },
  {
    icon: Heart,
    title: 'Assistência funeral',
    description: 'Suporte completo para toda a família.',
  },
];

export function HealthLifeSection() {
  const { ref: healthRef, isVisible: healthVisible } = useScrollAnimation();
  const { ref: lifeRef, isVisible: lifeVisible } = useScrollAnimation();

  return (
    <section id="saude-vida" className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        {/* Health Insurance */}
        <div ref={healthRef} className="mb-24">
          <div
            className={cn(
              'text-center max-w-3xl mx-auto mb-16 opacity-0',
              healthVisible && 'animate-fade-in-up'
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 rounded-full text-sky-600 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Seguro Saúde</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Cuide da sua saúde com{' '}
              <span className="text-sky-600">tranquilidade</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Planos de saúde com ampla cobertura, atendimento humanizado e
              tecnologia a seu favor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'group p-6 bg-card rounded-2xl border border-border/50 hover:border-sky-500/30 hover:shadow-card transition-all duration-300 opacity-0',
                  healthVisible && 'animate-fade-in-up'
                )}
                style={{ animationDelay: healthVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'text-center mt-10 opacity-0',
              healthVisible && 'animate-fade-in-up'
            )}
            style={{ animationDelay: healthVisible ? '400ms' : '0ms' }}
          >
            <Button size="lg" className="group">
              Cotar plano de saúde
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Life Insurance */}
        <div ref={lifeRef}>
          <div
            className={cn(
              'text-center max-w-3xl mx-auto mb-16 opacity-0',
              lifeVisible && 'animate-fade-in-up'
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full text-navy text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Seguro de Vida</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proteção financeira para{' '}
              <span className="text-navy">quem você ama</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Garanta o futuro da sua família com coberturas que oferecem segurança
              em todos os momentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'group p-6 bg-card rounded-2xl border border-border/50 hover:border-navy/30 hover:shadow-card transition-all duration-300 opacity-0',
                  lifeVisible && 'animate-fade-in-up'
                )}
                style={{ animationDelay: lifeVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'text-center mt-10 opacity-0',
              lifeVisible && 'animate-fade-in-up'
            )}
            style={{ animationDelay: lifeVisible ? '400ms' : '0ms' }}
          >
            <Button variant="navy" size="lg" className="group">
              Proteger minha família
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
