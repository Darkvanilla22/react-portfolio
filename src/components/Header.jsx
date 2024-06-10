import React from 'react';
import '../assets/styles/Header.css';
import Navigation from './Navigation';

const Header = ({ currentSection, setCurrentSection }) => (
  <header className="header">
    <h1 className="title">Finian Corbett's Portfolio</h1>
    <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
  </header>
);

export default Header;
