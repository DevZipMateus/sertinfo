import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center mb-3">
              <img alt="Sertinfo Logo" className="h-10 w-auto mr-3" src="/lovable-uploads/05440ee2-defe-48c8-a194-4373f6106bf4.png" />
              <h3 className="text-xl font-bold">
                <span className="text-primary">Sertinfo</span> Tecnologia
              </h3>
            </div>
            <p className="text-white/80 max-w-xs">
              Soluções em tecnologia que otimizam processos, aliam facilidade de operação, inteligência e alta conectividade.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink href="#" aria-label="Facebook" />
              <FooterSocialLink href="#" aria-label="Instagram" />
              <FooterSocialLink href="#" aria-label="LinkedIn" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#plans">Soluções</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Infraestrutura de TI</FooterNavItem>
              <FooterNavItem href="#services">Segurança</FooterNavItem>
              <FooterNavItem href="#services">Telecomunicações</FooterNavItem>
              <FooterNavItem href="#services">Redes</FooterNavItem>
              <FooterNavItem href="#services">Informática</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(71) 99669-5990</li>
              <li>comercial@sertinfo.com.br</li>
              <li>Av. Luiz Tarquínio Pontes, 74, Parque Jockey Clube, Lauro de Freitas/BA</li>
              <li>Segunda a Sexta, 8h às 18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Sertinfo Tecnologia. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button onClick={scrollToTop} variant="outline" size="icon" className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white">
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
    <a href={href} className="text-white/70 hover:text-primary transition-colors duration-200">
      {children}
    </a>
  </li>;
interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
}
const FooterSocialLink = (props: FooterSocialLinkProps) => <a {...props} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-primary/80 transition-colors duration-200" />;
export default Footer;