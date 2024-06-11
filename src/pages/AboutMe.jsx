import React from 'react';
import '../assets/styles/AboutMe.css';
import profilePic from '../assets/images/profile.jpg';

const AboutMe = () => (
  <div className="about-me-container">
    <section className="about-me">
      <h2>About Me</h2>
      <img src={profilePic} alt="Developer" className="profile-pic" />
      <p>
        Hi, I'm Finian Cordett, a dedicated and passionate web developer with a strong focus on creating dynamic, responsive, and user-friendly web applications. With several years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks like React, allowing me to deliver high-quality and efficient solutions.
      </p>
      <p>
        In my work, I prioritize the user experience, ensuring that every application I build is intuitive and accessible. I believe that a great website should not only look good but also provide a seamless and enjoyable experience for its users. To achieve this, I stay updated with the latest trends and best practices in web development, constantly learning and experimenting with new technologies.
      </p>
      <p>
        I'm always excited to take on new challenges and bring innovative ideas to life. Whether it's building a complex web application from scratch or optimizing an existing project, I approach every task with enthusiasm and a problem-solving mindset. Thank you for visiting my portfolio. Feel free to explore my work, and don't hesitate to get in touch if you'd like to collaborate or learn more about my projects.
      </p>
    </section>
  </div>
);

export default AboutMe;
