import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    content:
      'Excelente atendimento! Consegui um seguro auto com cobertura completa por um preço muito justo. Recomendo a CG para todos.',
    rating: 5,
  },
  {
    name: 'Ana Paula Silva',
    role: 'Gerente de RH',
    content:
      'Contratamos o seguro estagiário para nossa empresa e foi muito rápido. A apólice saiu no mesmo dia. Muito prático!',
    rating: 5,
  },
  {
    name: 'Roberto Santos',
    role: 'Autônomo',
    content:
      'Depois de um sinistro, entendi o valor de ter um bom seguro. A CG me atendeu super bem e resolvi tudo rapidamente.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 opacity-0',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes{' '}
            <span className="text-gradient-orange">dizem sobre nós</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é a nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                'group relative p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 opacity-0',
                isVisible && 'animate-fade-in-up'
              )}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
