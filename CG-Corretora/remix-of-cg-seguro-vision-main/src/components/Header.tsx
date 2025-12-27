import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Seguro Auto', href: '#auto' },
  { label: 'Saúde & Vida', href: '#saude-vida' },
  { label: 'Estagiário', href: '#estagiario' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#inicio');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-gradient-orange rounded-xl flex items-center justify-center shadow-orange group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            CG <span className="text-primary">Corretora</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            onClick={() => scrollToSection('#inicio')}
            size="default"
          >
            Cotar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#inicio')}
            className="mt-2"
            size="lg"
          >
            Cotar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
}
