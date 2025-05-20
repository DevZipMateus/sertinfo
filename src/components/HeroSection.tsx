
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5571996695990?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20da%20Sertinfo.', '_blank');
  };
  
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10"></div>
        {/* Tech background image */}
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Technology Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center animate-slide-up [animation-delay:300ms]">
            <img alt="Sertinfo Logo" className="h-24 md:h-32 w-auto" src="/lovable-uploads/999f2870-2f05-4454-89a9-11bcc36a745c.png" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Soluções em <span className="text-primary">Tecnologia</span> para o seu Negócio
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            A SERTINFO desenvolve e coloca em prática soluções que visam aprimorar os processos tecnológicos, 
            combinando facilidade de uso, inteligência e elevada conectividade.
          </p>
          
          <p className="text-md md:text-lg text-primary font-medium mb-8 animate-slide-up [animation-delay:800ms]">
            Atuando no mercado há mais de 20 anos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button size="lg" className="rounded-md shadow-md transition-all duration-300" 
              onClick={scrollToNextSection}>
              Saiba Mais
            </Button>
            <Button size="lg" variant="secondary" 
              className="quote-btn hover:border-primary hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2"
              onClick={handleWhatsAppRedirect}>
              <FileText size={20} className="group-hover:animate-pulse" />
              <span>Solicitar Orçamento</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>;
};

export default HeroSection;
