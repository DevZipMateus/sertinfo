
import React from 'react';
import { Phone } from 'lucide-react';

const PacoTelefonia = () => {
  // Link for the CTA button
  const pacoLink = "https://falepaco.com.br/parceiro/MzY5OTc";
  
  return (
    <section id="pacoTelefonia" className="py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-[#e6eef8] text-[#3066BE] rounded-full text-sm font-medium mb-4">
            Solução Recomendada
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Sistema de Telefonia em Nuvem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto">
            Reduza seus custos de Telefonia e tenha autonomia e flexibilidade
          </p>
        </div>
        
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-10">
          {/* Left column - Enhanced content */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0 animate-fade-in">
            <div className="bg-gradient-to-br from-[#f9fcfe] to-[#e6eef8] p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#3066BE] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Paco Telefonia IP</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#3066BE] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Telefonia 100% IP</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3066BE] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Plano de Telefonia com PABX</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3066BE] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">URA customizado</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3066BE] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Fixo Brasil: Ilimitado</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3066BE] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Sem fidelidade</span>
                </li>
              </ul>
              
              <a href={pacoLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <button className="py-3 px-8 bg-[#3066BE] hover:bg-[#2755a0] text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">Teste 7 dias grátis</button>
              </a>
            </div>
          </div>
          
          {/* Right column with Paco logo */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in flex items-center justify-center p-8 bg-white">
            <div className="relative">
              <span className="absolute -top-2 -right-2 bg-[#3066BE] text-white py-1 px-4 rounded-full text-sm font-medium">Recomendado</span>
              <img 
                src="/lovable-uploads/dc355663-57a6-4d32-9a12-15824a1bf6c8.png" 
                alt="Paco Telefonia IP" 
                className="w-full max-w-[350px] mx-auto"
              />
              <div className="mt-8 bg-[#f9fcfe] border border-[#e6eef8] p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Plataforma de Telefonia em Nuvem</span> que funciona 100% em IP, 
                  com funcionalidade em qualquer lugar. Inclui gravação de voz e URA com configuração personalizada para sua empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional benefits section */}
        <div className="bg-[#f9fcfe] border border-[#e6eef8] p-6 rounded-lg text-center mt-12 animate-fade-in">
          <p className="text-gray-700 italic mb-4">"Reduza custos e ganhe flexibilidade com nossa solução completa de telefonia IP."</p>
          <a href={pacoLink} target="_blank" rel="noopener noreferrer" className="text-[#3066BE] font-medium">
            Saiba mais sobre como o Paco Telefonia pode ajudar seu negócio →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PacoTelefonia;
