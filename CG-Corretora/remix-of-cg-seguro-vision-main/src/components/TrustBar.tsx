import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const insurers = [
  { name: 'Porto Seguro', abbrev: 'Porto' },
  { name: 'Allianz', abbrev: 'Allianz' },
  { name: 'Bradesco Seguros', abbrev: 'Bradesco' },
  { name: 'SulAmérica', abbrev: 'SulAmérica' },
  { name: 'Azul Seguros', abbrev: 'Azul' },
  { name: 'HDI Seguros', abbrev: 'HDI' },
  { name: 'Liberty', abbrev: 'Liberty' },
  { name: 'Tokio Marine', abbrev: 'Tokio' },
];

export function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        scrollElement.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-background border-b border-border/30">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            'text-center mb-8 opacity-0',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Trabalhamos com as melhores seguradoras do Brasil
          </p>
        </div>

        {/* Desktop Grid */}
        <div
          className={cn(
            'hidden md:grid grid-cols-4 lg:grid-cols-8 gap-6 opacity-0',
            isVisible && 'animate-fade-in-up animation-delay-200'
          )}
        >
          {insurers.map((insurer, index) => (
            <div
              key={insurer.name}
              className="group flex items-center justify-center p-4 rounded-lg transition-all duration-300"
              style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <div className="w-24 h-12 flex items-center justify-center bg-muted/50 rounded-md opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {insurer.abbrev}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className={cn(
            'md:hidden relative opacity-0',
            isVisible && 'animate-fade-in-up animation-delay-200'
          )}
        >
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background/90 shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background/90 shadow-md rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 -mx-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {insurers.map((insurer) => (
              <div
                key={insurer.name}
                className="group flex-shrink-0 snap-center"
              >
                <div className="w-28 h-14 flex items-center justify-center bg-muted/50 rounded-lg opacity-60 grayscale active:opacity-100 active:grayscale-0 transition-all duration-300">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {insurer.abbrev}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
