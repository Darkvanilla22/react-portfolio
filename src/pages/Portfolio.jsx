import React from 'react';
import '../assets/styles/Portfolio.css';
import Project from '../components/Project';
import pwaTextEditor from '../assets/images/pwa-text-editor.png';

const Portfolio = () => {
  const projects = [
    { title: 'PWA Text Editor', 
      image: pwaTextEditor, 
      deployedLink: 'https://pwa-text-editor-g8vs.onrender.com/', 
      repoLink: 'https://github.com/Darkvanilla22/PWA-Text-Editor' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
