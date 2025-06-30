import React from 'react';
import { BookOpen, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Présentation Rapide
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Étudiant en systèmes, réseaux informatiques et télécommunications à l'<span className="font-semibold text-orange-600">ESATIC</span>, 
              passionné par la tech, de transition énergétique et le développement web, je présente ici mes 
              projets académiques, personnels et expériences bénévoles. Mon objectif 
              est de contribuer à l'innovation technologique en Afrique tout en 
              développant des solutions web modernes et accessibles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Formation</h3>
              <p className="text-gray-600">
                Développement Web & Technologies Numériques à l'ESATIC
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">
                Technologies web modernes, UX/UI Design et innovations durables
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Engagement</h3>
              <p className="text-gray-600">
                Projets communautaires et développement de solutions locales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;