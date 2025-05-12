
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Wifi, Monitor, Shield, Phone, Database } from 'lucide-react';

const ServicesSection = () => {
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
  
  const services = [
    {
      icon: <Server className="h-12 w-12 text-primary" />,
      title: "Infraestrutura",
      description: "Consultoria e Serviços de TI, Cabeamento Estruturado, Rede Wireless, LAN/WAN, DataCenter, Servidores e Armazenamento de Dados."
    }, 
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Segurança",
      description: "Segurança da Informação e Comunicação, Controle de Acessos e Rede, Serviços de Monitoramento e proteção de dados."
    }, 
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "Telecomunicações",
      description: "Assessoria Técnica e Gerencial, Certificação de Redes, Comunicação de Dados, Centrais Telefônicas e Balanceamento de Cargas."
    }, 
    {
      icon: <Wifi className="h-12 w-12 text-primary" />,
      title: "Redes",
      description: "Câmeras de Segurança, CFTV, Redes Ópticas, configuração e manutenção de infraestrutura de rede completa."
    }, 
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Informática",
      description: "Assistência técnica, Implantação de Sistemas, Processos de Manutenção Industrial e Locação de Impressoras e Multifuncionais."
    }, 
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Virtualização",
      description: "Servidores Dedicados, Service Desk, implementação e manutenção de ambientes virtualizados para maior eficiência."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas em Tecnologia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma gama completa de serviços de tecnologia e infraestrutura para atender às necessidades 
            específicas do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
