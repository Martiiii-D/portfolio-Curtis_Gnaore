import React from 'react';
import { ChevronDown, Linkedin, Github, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            CMG
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Curtis Martial Gnaore
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Étudiant en Systèmes, Réseaux Informatiques et Télécommunications à l'ESATIC
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>curtisgnaore@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>+225 07 77 00 24 84</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Portfolio – Projets & Réalisations
          </h3>
          <h4 className="text-lg md:text-xl text-gray-700">
            en Technologies numériques
          </h4>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-orange-600 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;