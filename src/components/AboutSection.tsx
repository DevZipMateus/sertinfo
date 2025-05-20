
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Experiência e Inovação em Tecnologia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais que empresa de tecnologia, somos parceiro estratégico comprometido com
            o crescimento e otimização da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Conte com a Sertinfo Comércio e Serviços
              </h3>
              <p className="text-muted-foreground mb-6 text-justify">
                Há mais de 20 anos, ajudamos empresas a otimizar seus processos de tecnologia.
                Nossa abordagem combina expertise técnica com um atendimento personalizado,
                garantindo soluções que aliam facilidade de operação, inteligência e alta conectividade.
              </p>
              <ul className="space-y-3">
                {[
                  'Equipe multidisciplinar e altamente qualificada',
                  'Tecnologia de ponta para processos inteligentes',
                  'Atendimento personalizado e soluções sob medida',
                  'Mais de 20 anos de experiência no mercado'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Otimizar processos de tecnologia, proporcionando soluções que aliam facilidade de operação, inteligência e alta conectividade."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser referência em soluções tecnológicas, criando relacionamentos duradouros baseados em confiança e resultados."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Comprometimento, excelência técnica, inovação constante e foco total na satisfação do cliente."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Com mais de 20 anos de experiência, nossa equipe especializada oferece soluções personalizadas para cada cliente."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
