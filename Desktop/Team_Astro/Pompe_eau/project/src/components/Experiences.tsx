import React from 'react';
import { Trophy, MessageSquare, Users, Calendar } from 'lucide-react';

const Experiences: React.FC = () => {
  const experiences = [
    {
      icon: Trophy,
      title: "Technovore Hackathon 2025",
      subtitle: "2 ème place - Catégorie Developpement",
      period: "Mars 2025",
      description: "Conception d'un système pour l'optimisation de la gestion de l'eau dans les zones rurales.",
      achievements: [
        "Solution primée pour l'innovation technologique",
        "Développement d'une app mobile en 48h",
        "Collaboration en équipe multidisciplinaire"
      ],
      image: "assets/images/Screenshot_20250626-125756.png",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Community Manager Bénévole",
      subtitle: "Pâtisserie vanille chocolat",
      period: "Sept 2023 - Présent",
      description: "Gestion des réseaux sociaux pour promouvoir les produits de la pâtisserie et inciter les clients à venir déguster nos produits.",
      achievements: [
        "Croissance de l'engagement sur les réseaux",
        "Organisation d'événements communautaires",
        "Création de contenu et de visuel pour les produits"
      ],
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Autres Expériences
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center ${
                  experience.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <experience.icon className={`${
                    experience.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`} size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">{experience.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                <p className={`text-sm font-medium mb-3 ${
                  experience.color === 'green' ? 'text-green-600' : 'text-purple-600'
                }`}>{experience.subtitle}</p>
                
                <p className="text-gray-600 mb-4">{experience.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Users size={16} />
                    Réalisations clés
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          experience.color === 'green' ? 'bg-green-600' : 'bg-purple-600'
                        }`}></div>
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;