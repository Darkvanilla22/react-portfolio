import React from 'react';
import '../assets/styles/Resume.css';

const Resume = () => (
  <section>
    <h2>Resume</h2>
    <a href="path/to/resume.pdf" download>Download Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>Proficiency 1</li>
      <li>Proficiency 2</li>
      <li>Proficiency 3</li>
      {/* Add more proficiencies here */}
    </ul>
  </section>
);

export default Resume;
