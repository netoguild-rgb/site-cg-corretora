import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrustBar } from '@/components/TrustBar';
import { AutoInsuranceSection } from '@/components/AutoInsuranceSection';
import { HealthLifeSection } from '@/components/HealthLifeSection';
import { InternInsuranceSection } from '@/components/InternInsuranceSection';
import { PartnersSection } from '@/components/PartnersSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ChatWidget } from '@/components/ChatWidget';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AutoInsuranceSection />
        <HealthLifeSection />
        <InternInsuranceSection />
        <PartnersSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
