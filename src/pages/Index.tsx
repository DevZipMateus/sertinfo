
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EgestorERP from '@/components/EgestorERP';
import PacoTelefonia from '@/components/PacoTelefonia';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animations a bit earlier (80% of viewport height instead of 90%)
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add classes for slide-in animations
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    slideInElements.forEach((el) => observer.observe(el));
    
    return () => {
      slideInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Sertinfo - Soluções em Tecnologia | Há mais de 20 anos no mercado</title>
        <meta name="description" content="A SERTINFO cria e implementa soluções que buscam a otimização dos processos de tecnologia, aliando facilidade de operação, inteligência e alta conectividade." />
        <meta name="keywords" content="sertinfo, tecnologia, infraestrutura, telecomunicações, informática, soluções em TI, Bahia, Lauro de Freitas" />
        <meta property="og:title" content="Sertinfo - Soluções em Tecnologia" />
        <meta property="og:description" content="Soluções que buscam a otimização dos processos de tecnologia, aliando facilidade de operação, inteligência e alta conectividade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sertinfo.com.br" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sertinfo.com.br" />
      </Helmet>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EgestorERP />
      <PacoTelefonia />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
