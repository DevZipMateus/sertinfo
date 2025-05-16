
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Wifi, Monitor, Shield, Phone, Database, FileChartPie } from 'lucide-react';
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
  const services = [{
    icon: <Server className="h-12 w-12 text-primary" />,
    title: "Infraestrutura",
    description: "Consultoria e Serviços de TI, Cabeamento Estruturado, Rede Wireless, LAN/WAN, DataCenter, Servidores e Armazenamento de Dados."
  }, {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Segurança",
    description: "Segurança da Informação e Comunicação, Controle de Acessos e Rede, Serviços de Monitoramento e proteção de dados."
  }, {
    icon: <Phone className="h-12 w-12 text-primary" />,
    title: "Telecomunicações",
    description: "Assessoria Técnica e Gerencial, Certificação de Redes, Comunicação de Dados, Centrais Telefônicas e Balanceamento de Cargas."
  }, {
    icon: <Wifi className="h-12 w-12 text-primary" />,
    title: "Redes",
    description: "Câmeras de Segurança, CFTV, Redes Ópticas, configuração e manutenção de infraestrutura de rede completa."
  }, {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Informática",
    description: "Assistência técnica, Implantação de Sistemas, Processos de Manutenção Industrial e Locação de Impressoras e Multifuncionais."
  }, {
    icon: <FileChartPie className="h-12 w-12 text-primary" />,
    title: "Sistema de Gestão (ERP)",
    description: "Sistema completo de gestão para pequenas e médias empresas, com foco no controle de estoque, vendas, PDV e finanças."
  }, {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Virtualização",
    description: "Servidores Dedicados, Service Desk, implementação e manutenção de ambientes virtualizados para maior eficiência."
  }];

  // Imagem de fundo para a seção de serviços
  const techImage = "/lovable-uploads/c48a2e9c-3c62-4ede-a04d-6f12c3f9da60.png";
  return <section id="services" ref={sectionRef} className="section-padding relative bg-gradient-to-b from-gray-50 to-white">
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

        {/* Seção de Hero inspirada na imagem de referência */}
        <div className="flex flex-col md:flex-row gap-8 overflow-hidden rounded-xl shadow-xl mb-16">
          {/* Coluna da esquerda - Texto e serviços */}
          <div className="w-full md:w-2/5 bg-primary/90 text-white p-8 md:p-12 flex flex-col justify-center animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A SERTINFO cria e implementa soluções que buscam:
            </h3>
            <p className="mb-8 text-white/90">
              A otimização dos processos de tecnologia, aliando facilidade de operação, inteligência e alta conectividade.
            </p>
            <a href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20serviços%20de%20TI" className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 w-fit">
              Entrar em contato
            </a>
          </div>
          
          {/* Coluna da direita - Grid com 4 imagens */}
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-1 animate-slide-in-right">
            <div className="relative bg-black overflow-hidden">
              <img src="/lovable-uploads/9c142ae0-c514-4227-a17c-124aff48e838.png" alt="Consultoria estratégica" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
            </div>
            <div className="relative bg-black overflow-hidden">
              <img src="/lovable-uploads/4cde55c3-d64c-4d37-b682-ee7a11b582d7.png" alt="Desenvolvimento de software" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
            </div>
            <div className="relative bg-black overflow-hidden">
              <img src="/lovable-uploads/f3b8f6b5-87f1-475c-ba3d-75a1775e61df.png" alt="Analytics e monitoramento" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
            </div>
            <div className="relative bg-black overflow-hidden h-full">
              <img src="/lovable-uploads/2215bb0c-0261-4ee5-83fa-95e7d945318f.png" alt="Infraestrutura de rede" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
            </div>
          </div>
        </div>

        {/* Destaque para Sistema ERP - Egestor */}
        <div className="p-6 bg-gradient-to-r from-[#e0f7ea] to-[#f0f9f5] rounded-xl shadow-md mb-16 animate-slide-in-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img alt="Egestor ERP" className="w-full max-w-[300px] mx-auto" src="https://egestor.com.br/assets/img/logo.png" />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <FileChartPie className="h-8 w-8 text-[#7CFFA0]" />
                <h3 className="text-2xl font-bold">Sistema de Gestão Empresarial (ERP)</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Oferecemos o <span className="font-semibold">Egestor</span>, um sistema completo de gestão 
                para pequenas e médias empresas, com foco no controle de estoque, vendas, PDV e finanças. 
                Otimize seus processos e aumente seus lucros com uma solução completa e fácil de usar.
              </p>
              <a href="#egestorERP" className="inline-block py-3 px-8 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Conheça mais sobre o Egestor
              </a>
            </div>
          </div>
        </div>

        {/* Destaque para Telefonia IP - PACO */}
        <div className="p-6 bg-gradient-to-r from-[#e6eef8] to-[#f0f5fa] rounded-xl shadow-md mb-16 animate-slide-in-right">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img alt="Paco Telefonia IP" className="w-full max-w-[300px] mx-auto" src="/lovable-uploads/dc355663-57a6-4d32-9a12-15824a1bf6c8.png" />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-8 w-8 text-[#3066BE]" />
                <h3 className="text-2xl font-bold">Sistema de Telefonia em Nuvem</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Reduza seus custos de Telefonia e tenha autonomia e flexibilidade com nossa 
                <span className="font-semibold"> Plataforma de Telefonia em Nuvem</span> que funciona 100% em IP, 
                com funcionalidade em qualquer lugar. Inclui gravação de voz e URA com configuração personalizada para sua empresa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#3066BE]/20 p-1 rounded-full">
                    <span className="text-[#3066BE] text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Telefonia 100% IP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3066BE]/20 p-1 rounded-full">
                    <span className="text-[#3066BE] text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Plano com PABX</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3066BE]/20 p-1 rounded-full">
                    <span className="text-[#3066BE] text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">URA customizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3066BE]/20 p-1 rounded-full">
                    <span className="text-[#3066BE] text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Fixo Brasil: Ilimitado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#3066BE]/20 p-1 rounded-full">
                    <span className="text-[#3066BE] text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Sem fidelidade</span>
                </div>
              </div>
              
              <a href="https://falepaco.com.br/parceiro/MzY5OTc" target="_blank" rel="noopener noreferrer" className="inline-block py-3 px-8 bg-[#3066BE] hover:bg-[#2755a0] text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Teste 7 dias grátis
              </a>
            </div>
          </div>
        </div>

        {/* Cards de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} index={index} />)}
        </div>
      </div>
    </section>;
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
}: ServiceCardProps) => <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>;
export default ServicesSection;

