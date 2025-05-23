
import { Button } from '@/components/ui/button';
import { ChevronUp, Mail, Phone, MapPin, FileText, Shield } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-blue-50 text-gray-700 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-5">
            <div className="flex items-center mb-4">
              <img alt="Sertinfo Logo" src="/lovable-uploads/05440ee2-defe-48c8-a194-4373f6106bf4.png" className="h-24 w-auto mr-3" />
            </div>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Soluções em tecnologia que otimizam processos, aliam facilidade de operação, 
              inteligência e alta conectividade.
            </p>
            <div className="mt-6">
              <img 
                src="/lovable-uploads/1685c64e-4040-46ad-849a-18ad7caa1e02.png" 
                alt="Selo PROCON-SP Empresa Verificada" 
                className="max-w-[160px] h-auto" 
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#plans">Soluções</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary">Serviços</h4>
            <ul className="space-y-3">
              <FooterNavItem href="#services">Infraestrutura de TI</FooterNavItem>
              <FooterNavItem href="#services">Segurança</FooterNavItem>
              <FooterNavItem href="#services">Telecomunicações</FooterNavItem>
              <FooterNavItem href="#services">Redes</FooterNavItem>
              <FooterNavItem href="#services">Informática</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary">Contato</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(71) 99669-5990</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(71) 3838-8793</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>comercial@sertinfo.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Av. Luiz Tarquínio Pontes, 74, Parque Jockey Clube, Lauro de Freitas/BA</span>
              </li>
              <li className="flex items-center gap-2 pl-6">
                Segunda a Sexta, 8h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Documentos e Políticas */}
        <div className="mt-10">
          <h4 className="text-lg font-semibold mb-4 text-primary">Documentos</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://politica.sertinfo.com.br/termo-garantia.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Termo de Garantia dos Produtos</span>
            </a>
            <a 
              href="https://politica.sertinfo.com.br/politica.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Política de Segurança da Informação</span>
            </a>
          </div>
        </div>

        <hr className="border-gray-200 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sertinfo Tecnologia. Todos os direitos reservados.
          </p>
          <div className="mt-6 md:mt-0">
            <Button onClick={scrollToTop} variant="outline" size="icon" className="rounded-full bg-primary hover:bg-primary/90 border-primary/30 text-white hover:text-white shadow-md hover:shadow-lg transition-all">
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({
  href,
  children
}: FooterNavItemProps) => <li>
    <a href={href} className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center">
      <span className="hover:translate-x-1 transition-transform duration-300">{children}</span>
    </a>
  </li>;

export default Footer;
