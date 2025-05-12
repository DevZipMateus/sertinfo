
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

const testimonials = [
  {
    name: "Grasiele Cersosimo",
    company: "2 avaliações",
    image: "/lovable-uploads/9291648b-e742-414a-936a-46fd9e4b2583.png",
    text: "Excelente profissionais. Atendimento nota 1000",
    time: "um ano atrás"
  },
  {
    name: "Natielle Brito",
    company: "1 avaliação",
    image: "/lovable-uploads/ba2091ca-6180-44e3-9b15-f71e19b45fad.png",
    text: "Extremamente atenciosos e responsáveis com os clientes. Além de agilidade e qualidade. Obrigada pelo atendimento.",
    time: "um ano atrás"
  },
  {
    name: "Elaine Letícia",
    company: "1 avaliação",
    image: "/lovable-uploads/f4df3b3d-f137-40da-8bc0-4538158df92a.png",
    text: "Qualidade em atendimento e serviços, excelente! Indico para todos!!!",
    time: "um ano atrás"
  },
  {
    name: "THERJ IND COM LTDA",
    company: "Local Guide • 42 avaliações",
    image: "/lovable-uploads/25a37fad-1b10-49ea-9170-f1cbb16e445c.png",
    text: "Excelente empresa, prestativos, coerentes e honestos, pontuais em tudo que foi negociado, precisamos de mais empresas como a SERTINFO comércio e serviços no mercado",
    time: "um mês atrás"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloadImages = () => {
      testimonials.forEach((testimonial) => {
        const img = new Image();
        img.src = testimonial.image;
        img.onload = () => setImagesLoaded(prev => ({ ...prev, [testimonial.image]: true }));
        img.onerror = () => setImagesLoaded(prev => ({ ...prev, [testimonial.image]: true })); // Consider it loaded even if error
      });
    };

    preloadImages();
  }, []);

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

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getVisibleTestimonials = () => {
    // For mobile, only show one testimonial
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    
    // For larger screens, show multiple testimonials
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Atendimento personalizado e resultados concretos são nossa marca registrada.
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="animate-on-scroll">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 testimonial-slider transform`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard 
                  key={index} 
                  testimonial={testimonial} 
                  isLoaded={Boolean(imagesLoaded[testimonial.image])} 
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index || 
                    (index === (currentIndex + 1) % testimonials.length && window.innerWidth >= 768) 
                      ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    company: string;
    image: string;
    text: string;
    time: string;
  };
  isLoaded: boolean;
}

const TestimonialCard = ({ testimonial, isLoaded }: TestimonialCardProps) => (
  <Card className="border border-border/50 shadow-md service-card h-full">
    <CardContent className="p-8 h-full flex flex-col">
      <div className="mb-6 text-primary">
        <Quote size={32} />
      </div>
      
      <p className="text-foreground mb-6 flex-grow">{testimonial.text}</p>
      
      <div className="flex items-center">
        {!isLoaded ? (
          <Skeleton className="w-12 h-12 rounded-full mr-4" />
        ) : (
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        )}
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <div className="flex items-center space-x-1">
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            <span className="text-sm text-muted-foreground">•</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{testimonial.time}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
