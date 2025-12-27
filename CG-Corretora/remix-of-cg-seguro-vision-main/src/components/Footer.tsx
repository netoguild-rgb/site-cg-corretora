import { Shield, Phone, Mail, MapPin, Lock } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Seguro Auto', href: '#auto' },
  { label: 'Saúde & Vida', href: '#saude-vida' },
  { label: 'Estagiário', href: '#estagiario' },
  { label: 'Sobre', href: '#sobre' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Footer() {
  return (
    <footer id="contato" className="bg-navy text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                CG <span className="text-primary">Corretora</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Há mais de 10 anos protegendo o que é mais importante para você.
              Sua tranquilidade é o nosso compromisso.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Lock className="w-4 h-4" />
              <span>Site Seguro - Seus dados estão protegidos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@cgcorretora.com.br"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@cgcorretora.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CG Corretora de Seguros. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60">
            SUSEP: 000000000 | CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
