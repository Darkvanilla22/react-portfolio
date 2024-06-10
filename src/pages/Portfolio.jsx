import React from 'react';
import '../assets/styles/Portfolio.css';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', deployedLink: '#', repoLink: '#' },
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
