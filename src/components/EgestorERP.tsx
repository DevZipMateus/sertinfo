
import React from 'react';
import { FileChartPie } from 'lucide-react';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/7187";

  return (
    <section id="egestorERP" className="py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-[#e0f7ea] text-primary rounded-full text-sm font-medium mb-4">
            Sistema Recomendado
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Sistema de gestão empresarial
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto">
            Dobre seus lucros otimizando sua gestão com o Egestor
          </p>
        </div>
        
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-10">
          {/* Left column - Enhanced content */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0 animate-fade-in">
            <div className="bg-gradient-to-br from-[#f9fefc] to-[#e0f7ea] p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7CFFA0] p-3 rounded-full">
                  <FileChartPie className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Egestor</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#7CFFA0] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-gray-800 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Controle completo de estoque e vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7CFFA0] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-gray-800 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">PDV (Ponto de Venda) integrado</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7CFFA0] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-gray-800 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Gestão financeira simplificada</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7CFFA0] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-gray-800 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Relatórios gerenciais detalhados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#7CFFA0] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-gray-800 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Atualização constante e suporte técnico</span>
                </li>
              </ul>
              
              <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <button className="py-3 px-8 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Teste grátis por 7 dias
                </button>
              </a>
            </div>
          </div>
          
          {/* Right column - Video Container with enhanced styling */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <div className="relative">
              <span className="absolute -top-2 -right-2 bg-[#7CFFA0] text-black py-1 px-4 rounded-full text-sm font-medium">Recomendado</span>
              <video className="w-full aspect-video object-cover rounded" autoPlay muted loop playsInline poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png">
                <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
        
        {/* Testimonial or call-to-action section */}
        <div className="bg-[#f9fefc] border border-[#e0f7ea] p-6 rounded-lg text-center mt-12 animate-fade-in">
          <p className="text-gray-700 italic mb-4">"O Egestor transformou a maneira como gerenciamos nosso negócio. Simplificou processos e aumentou nossa produtividade."</p>
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="text-primary font-medium">
            Saiba mais sobre como o Egestor pode ajudar seu negócio →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
