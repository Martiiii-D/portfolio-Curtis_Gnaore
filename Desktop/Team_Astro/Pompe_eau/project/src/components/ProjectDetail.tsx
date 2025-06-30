import React from 'react';
import { useParams, Link } from 'react-router-dom';
import imgA from '../../assets/images/A.png';
import imgB from '../../assets/images/B.png';
import imgC from '../../assets/images/C.png'
import imgD from '../../assets/images/D.png'
import imgE from '../../assets/images/E.png'
import imgQ from '../../assets/images/Q.png'
import imgF from '../../assets/images/IMG-20250525-WA0014.jpg'
import imgI from '../../assets/images/Screenshot_20250626-130616.png'
import imgH from '../../assets/images/accueil.png'
import imgK from '../../assets/images/IMG-20250525-WA0016.jpg'

const projectDescriptions: Record<string, string> = {
  '1': "Ce projet a consisté en la conception et le développement d'un prototype de jeu vidéo destiné aux plateformes mobiles et web, ayant pour objectif de valoriser la culture africaine. En tant que chef d'équipe, j'ai supervisé l'ensemble du processus, depuis la conception UX/UI jusqu'au développement du prototype sur Godot Engine. Le travail en équipe et le respect du cahier des charges et des délais ont été des éléments clés de la réussite de ce projet.",
  '2': "Ce projet visait à développer une application mobile permettant aux utilisateurs d'explorer la richesse culturelle, touristique et traditionnelle de la Côte d'Ivoire. L'objectif était de créer une plateforme intuitive pour découvrir les destinations mises en avant, les festivals, les traditions populaires, les langues et les proverbes locaux."
};

// Exemple de données de projets avec des captures d'écran
const projectScreenshots: Record<string, string[]> = {
  '1': [
    imgA,
    imgD,
    imgQ,
    imgB,
    imgE,
    imgC,
  ],
  '2': [
    imgH,
    imgI,
    imgF,
    imgK,

  ]
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const screenshots = projectScreenshots[projectId || ''] || [];
  const description = projectDescriptions[projectId || ''] || '';

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/" className="text-orange-600 hover:underline mb-6 inline-block">← Retour aux projets</Link>
      <h1 className="text-3xl font-bold mb-4">Détails du projet {projectId}</h1>
      {description && (
        <p className="text-lg text-gray-700 mb-8">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.length > 0 ? (
          screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Capture d'écran ${idx + 1}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ))
        ) : (
          <p>Aucune capture d'écran disponible pour ce projet.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 