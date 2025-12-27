import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const partners = [
  'Porto Seguro',
  'Allianz',
  'Azul Seguros',
  'Bradesco Seguros',
  'SulAmérica',
  'Liberty',
  'Tokio Marine',
  'HDI Seguros',
];

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            'text-center mb-12 opacity-0',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Parceiros de confiança
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Trabalhamos com as melhores seguradoras do mercado
          </h3>
        </div>

        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0',
            isVisible && 'animate-fade-in-up animation-delay-200'
          )}
        >
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="flex items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <span className="text-lg font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
