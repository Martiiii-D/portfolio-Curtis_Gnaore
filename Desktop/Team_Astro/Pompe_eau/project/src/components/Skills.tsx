import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Développement Frontend",
      color: "orange",
      skills: [
        { name: "React / TypeScript", level: 65 },
        { name: "Vue.js", level: 78 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "JavaScript ES6+", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Développement Backend",
      color: "blue",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Python", level: 88 },
        { name: "MongoDB", level: 50 },
        { name: "REST APIs", level: 65 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX/UI",
      color: "purple",
      skills: [
        { name: "Figma", level: 82 },
        { name: "Adobe illustrator", level: 75 },
        { name: "Canva", level: 85 },
        { name: "Design System", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "Outils & Technologies",
      color: "green",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Vite / Webpack", level: 72 },
        { name: "Docker", level: 60 },
        { name: "CI/CD", level: 65 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', progress: 'bg-orange-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', progress: 'bg-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', progress: 'bg-purple-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', progress: 'bg-green-600' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compétences Clés
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une synthèse de mes compétences techniques et créatives acquises à travers 
            mes projets académiques et expériences personnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${colorClasses.bg} flex items-center justify-center`}>
                    <category.icon className={colorClasses.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className={`text-sm font-bold ${colorClasses.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${colorClasses.progress} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Technologies & Outils</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "React", color: "text-blue-500" },
              { name: "TypeScript", color: "text-blue-600" },
              { name: "Vue.js", color: "text-green-500" },
              { name: "Node.js", color: "text-green-600" },
              { name: "MongoDB", color: "text-green-700" },
              { name: "Figma", color: "text-purple-500" },
              { name: "Git", color: "text-orange-500" },
              { name: "Docker", color: "text-blue-700" }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className={`text-2xl font-bold ${tech.color}`}>
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-600 mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;