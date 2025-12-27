import { Button } from '@/components/ui/button';
import {
  Car,
  Truck,
  ShieldCheck,
  Clock,
  Wrench,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Truck,
    title: 'Guincho 24h ilimitado',
    description: 'Assistência em qualquer lugar do Brasil, sem limite de quilometragem.',
  },
  {
    icon: Car,
    title: 'Carro reserva garantido',
    description: 'Enquanto seu veículo estiver em reparo, você não fica a pé.',
  },
  {
    icon: ShieldCheck,
    title: 'Cobertura de vidros',
    description: 'Proteção completa para para-brisas, vidros laterais e traseiros.',
  },
  {
    icon: AlertTriangle,
    title: 'Proteção contra terceiros',
    description: 'Cobertura para danos materiais e corporais causados a terceiros.',
  },
  {
    icon: Clock,
    title: 'Atendimento 24 horas',
    description: 'Suporte imediato a qualquer hora do dia ou da noite.',
  },
  {
    icon: Wrench,
    title: 'Rede credenciada',
    description: 'Oficinas parceiras de qualidade em todo o território nacional.',
  },
];

export function AutoInsuranceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="auto" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Car className="w-4 h-4" />
            <span>Seguro Auto & Moto</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Não fique a pé. <span className="text-gradient-orange">A CG resolve.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tenha a segurança de que, se o imprevisto acontecer, você terá todo o
            suporte necessário. Assistência 24h em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 opacity-0',
                isVisible && 'animate-fade-in-up',
                `animation-delay-${(index + 1) * 100}`
              )}
              style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'text-center mt-12 opacity-0',
            isVisible && 'animate-fade-in-up animation-delay-500'
          )}
          style={{ animationDelay: isVisible ? '600ms' : '0ms' }}
        >
          <Button size="lg" className="group">
            Fazer cotação de auto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
