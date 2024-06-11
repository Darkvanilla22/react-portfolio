import React from 'react';
import '../assets/styles/Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <a href="path/to/resume.pdf" download>Download Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MongoDB</li>
    </ul>
  </section>
);

export default Resume;
