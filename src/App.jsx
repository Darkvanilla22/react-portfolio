import React, { useState } from 'react';
import './assets/styles/App.css'; // Import global styles
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
      {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
