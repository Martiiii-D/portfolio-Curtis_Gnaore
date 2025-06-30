import React from 'react';
import { Gamepad2, Megaphone, ExternalLink, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      icon: Gamepad2,
      title: "Jeu sur la Culture Africaine",
      subtitle: "APP1 - Projet Académique",
      description: "Développement d'un jeu éducatif interactif pour promouvoir la richesse de la culture africaine auprès des jeunes.",
      objectives: [
        "Sensibiliser à la diversité culturelle africaine",
        "Créer une expérience ludique et éducative",
        "Utiliser des technologies de developpements modernes"
      ],
      tools: ["Godot Engine", "GDScript", "C#", "Blender 3D"],
      contributions: [
        "Conception UI/UX de l'interface utilisateur",
        "Recherche approfondie sur les cultures africaines",
        "Implémentation du prototype du jeu interactive"
      ],
      image: "assets/images/E.png",
      color: "orange"
    },
    {
      id: 2,
      icon: Megaphone,
      title: "Communication & ODD",
      subtitle: "APP2 - Projet Social",
      description: "Création d'une plateforme de communication pour sensibiliser aux Objectifs de Développement Durable en Afrique.",
      objectives: [
        "Promouvoir les ODD dans le contexte africain",
        "Faciliter la communication communautaire",
        "Créer un impact social positif"
      ],
      tools: ["Flutter/Dart", "Figma", "Firebase", "Canva"],
      contributions: [
        "Développement d'une application mobile responsive",
        "Création de présentations interactives",
        "Recherche et analyse des solutions aux ODD"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        project.color === 'orange' ? 'bg-orange-100' : 'bg-blue-100'
                      }`}>
                        <project.icon className={`${
                          project.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                        }`} size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className={`text-sm font-medium ${
                          project.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                        }`}>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Link
                        to={`/projects/${project.id}`}
                        className={`px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 ${
                          project.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'
                        } transition-colors`}
                      >
                        <ExternalLink size={16} />
                        Voir le projet
                      </Link>
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        <Code size={16} />
                        Code source
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Objectifs du projet</h4>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          project.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'
                        }`}></div>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Outils utilisés</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.color === 'orange' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Mes contributions</h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          project.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'
                        }`}></div>
                        <span className="text-gray-700">{contribution}</span>
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

export default Projects;