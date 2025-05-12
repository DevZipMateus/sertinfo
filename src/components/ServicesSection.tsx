
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Wifi, Monitor, Shield, Phone, Database } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  
  const techImages = [
    {
      src: "/lovable-uploads/9c142ae0-c514-4227-a17c-124aff48e838.png",
      alt: "Equipe de tecnologia em reunião analisando dados",
      caption: "Consultoria estratégica para otimização de processos de TI"
    },
    {
      src: "/lovable-uploads/4cde55c3-d64c-4d37-b682-ee7a11b582d7.png",
      alt: "Código de programação em tela",
      caption: "Desenvolvimento de soluções personalizadas"
    },
    {
      src: "/lovable-uploads/f3b8f6b5-87f1-475c-ba3d-75a1775e61df.png",
      alt: "Dashboard de análise de dados",
      caption: "Monitoramento e análise de desempenho de sistemas"
    },
    {
      src: "/lovable-uploads/2215bb0c-0261-4ee5-83fa-95e7d945318f.png",
      alt: "Infraestrutura de rede com cabos de fibra",
      caption: "Infraestrutura de redes de alta performance"
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Banner image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-xl animate-on-scroll">
          <AspectRatio ratio={16/5} className="bg-gray-100">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/b4a47583-54bb-4862-8ddb-715085bb1758.png" 
                alt="Infraestrutura de TI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-6">
                  <div className="max-w-lg text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Infraestrutura completa para sua empresa</h3>
                    <p className="text-white/90">Soluções integradas em tecnologia da informação</p>
                  </div>
                </div>
              </div>
            </div>
          </AspectRatio>
        </div>

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

        {/* Modern Tech Images Section */}
        <div className="mb-16 space-y-12 animate-on-scroll">
          {techImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <div className="relative">
                <AspectRatio ratio={21/9} className="bg-gray-100">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl font-medium">{image.caption}</p>
                  </div>
                </AspectRatio>
              </div>
            </div>
          ))}
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
