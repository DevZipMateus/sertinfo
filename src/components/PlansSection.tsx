
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, FileText, Server, Wifi, Shield } from 'lucide-react';

const PlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5571996695990?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20personalizado%20para%20os%20serviços%20da%20Sertinfo.', '_blank');
  };
  
  return (
    <section id="plans" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        {/* Background tech images */}
        <div className="absolute inset-0 opacity-5 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Tech Background" 
            className="absolute top-0 right-0 w-1/2 h-1/2 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Tech Background" 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover"
          />
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Confiáveis e Escaláveis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-on-scroll">
            Nós fornecemos serviços confiáveis e escaláveis para ajudar nossos clientes a gerenciar e proteger seus dados mais críticos. 
            Com anos de experiência no setor, estamos comprometidos em fornecer soluções de tecnologia de ponta 
            que ajudem nossos clientes a alcançar seus objetivos de negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <SolutionCard 
            title="Infraestrutura de TI" 
            icon={<Server className="h-8 w-8 text-primary mb-4" />}
            features={[
              "Consultoria e Serviços de TI",
              "Cabeamento Estruturado",
              "Rede Wireless, LAN/WAN",
              "Serviços de DataCenter",
              "Servidores e Armazenamento",
              "Proteção de Dados"
            ]}
            image="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          
          <SolutionCard 
            title="Telecomunicações" 
            icon={<Wifi className="h-8 w-8 text-primary mb-4" />}
            features={[
              "Assessoria Técnica e Gerencial",
              "Certificação de Redes",
              "Comunicação de Dados",
              "Centrais Telefônicas",
              "Balanceamento de Cargas",
              "Câmeras de Segurança e CFTV"
            ]}
            image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          
          <SolutionCard 
            title="Segurança Digital" 
            icon={<Shield className="h-8 w-8 text-primary mb-4" />}
            features={[
              "Proteção de Dados",
              "Firewall e sistemas de proteção",
              "Monitoramento em tempo real",
              "Backup e recuperação de dados",
              "Virtualização",
              "Service Desk"
            ]}
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button 
            size="lg" 
            className="quote-btn rounded-md shadow-md transition-all duration-300 flex gap-2"
            onClick={handleWhatsAppRedirect}>
            <FileText size={20} />
            <span>Solicitar Orçamento Personalizado</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface SolutionCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
  image?: string;
}

const SolutionCard = ({
  title,
  icon,
  features,
  image
}: SolutionCardProps) => (
  <Card className="animate-on-scroll service-card relative overflow-hidden border shadow-md">
    {image && (
      <div className="absolute inset-0 z-0 opacity-5">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <CardContent className="p-8 relative z-10">
      <div className="text-center mb-6">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default PlansSection;
