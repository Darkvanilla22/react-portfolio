import React from 'react';
import '../assets/styles/Navigation.css';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="navList">
        {sections.map((section) => (
          <li
            key={section}
            className={`navItem ${currentSection === section ? 'active' : ''}`}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
