import React from 'react';
import '../assets/styles/Portfolio.css';
import Project from '../components/Project';
import pwaTextEditor from '../assets/images/pwa-text-editor.png';
import weatherReport from '../assets/images/weather-report-dashboard.png';
import expressNoteTaker from '../assets/images/express-note-taker.png';

const Portfolio = () => {
  const projects = [
    { title: 'PWA Text Editor', 
      image: pwaTextEditor, 
      deployedLink: 'https://pwa-text-editor-g8vs.onrender.com/', 
      repoLink: 'https://github.com/Darkvanilla22/PWA-Text-Editor' },
    // Add more projects here
    { title: 'Weather Report Dashboard', 
      image: weatherReport, 
      deployedLink: 'https://darkvanilla22.github.io/weather-report/', 
      repoLink: 'https://github.com/Darkvanilla22/weather-report' },
    // Add more projects here
    { title: 'Express Note Taker',
      image: expressNoteTaker,
      deployedLink: 'https://express-note-taker-fadda8ca939d.herokuapp.com/',
      repoLink: 'https://github.com/Darkvanilla22/express-note-taker'
    }
  ];

  return (
    <div className="portfolio-container">
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
