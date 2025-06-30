import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', component: Hero },
    { id: 'about', component: About },
    { id: 'projects', component: Projects },
    { id: 'experiences', component: Experiences },
    { id: 'skills', component: Skills },
    { id: 'contact', component: Contact }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNext = () => {
    scrollToSection('about');
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Header activeSection={activeSection} onSectionClick={scrollToSection} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Hero onScrollToNext={scrollToNext} />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="experiences">
                  <Experiences />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            } />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Curtis Martial Gnaore - Portfolio. Développé avec React & TypeScript.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              J'accepte que mes données personnelles soient traitées dans le cadre du processus de recrutement  
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;