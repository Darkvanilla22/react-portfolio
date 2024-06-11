import React from 'react';
import '../assets/styles/Resume.css';
import finianCorbettResume from '../assets/resume/FinianCorbettResume - Main (2024).docx';

const Resume = () => (
  <div className="resume-container">
    <section className="resume">
      <h2>Resume</h2>
      <a href= {finianCorbettResume} download>Download Resume</a>
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
  </div>
);

export default Resume;
