import React from 'react';
import '../assets/styles/AboutMe.css';
import profilePic from '../assets/images/profile.jpg';

const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <img src={profilePic} alt="Developer" className="profile-pic" />
    <p>Short bio about the developer.</p>
  </section>
);

export default AboutMe;
