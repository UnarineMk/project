import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'medium');
    root.classList.add(theme);

    // Handle medium theme
    if (theme === 'medium') {
      root.style.setProperty('--tw-bg-opacity', '1');
    }
  }, [theme]);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      <Header
        theme={theme}
        setTheme={setTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;