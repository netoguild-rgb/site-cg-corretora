import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, Heart, Briefcase, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroBackground from '@/assets/hero-family.jpg'; // Verifique se esta imagem existe
import { openTypebot } from '../config'; // Integração funcional

type TabType = 'auto' | 'saude' | 'vida';

const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: 'auto', label: 'Auto', icon: <Car className="w-4 h-4" /> },
  { id: 'saude', label: 'Saúde', icon: <Heart className="w-4 h-4" /> },
  { id: 'vida', label: 'Vida', icon: <Briefcase className="w-4 h-4" /> },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabType>('auto');
  const [formData, setFormData] = useState({ nome: '', telefone: '' });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integração: Abre o chat ao enviar o formulário
    // Você pode passar os dados para o typebot se configurado, ou apenas abrir:
    console.log('Dados capturados:', { ...formData, tipo: activeTab });
    openTypebot(); 
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Família feliz e protegida"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Texto / Conteúdo da Esquerda */}
          <div
            className={cn(
              'space-y-8 opacity-0',
              isVisible && 'animate-fade-in-up'
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/30">
              <Shield className="w-4 h-4" />
              <span className="text-white">Proteção completa para você</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Sua tranquilidade é o nosso{' '}
              <span className="text-primary">compromisso.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-lg drop-shadow-md">
              Cotações personalizadas com as melhores seguradoras do mercado em
              minutos. Proteção completa para você, seu carro e sua família.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Atendimento 24h', 'Melhores preços', 'Parcelas facilitadas'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Card de Cotação (Direita) */}
          <div
            className={cn(
              'opacity-0',
              isVisible && 'animate-fade-in-up animation-delay-200'
            )}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-elevated p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Faça sua cotação grátis
              </h2>

              {/* Tabs */}
              <div className="flex bg-navy-dark/50 rounded-xl p-1 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300',
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Form - Conectado ao openTypebot */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Seu nome
                  </label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="h-12 bg-white/90 border-transparent text-navy-dark placeholder:text-navy-light"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    WhatsApp
                  </label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    className="h-12 bg-white/90 border-transparent text-navy-dark placeholder:text-navy-light"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group bg-primary hover:bg-primary/90 text-white font-bold h-12"
                >
                  Simular agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-center text-white/60">
                  Seus dados estão seguros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
