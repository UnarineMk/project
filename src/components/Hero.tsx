import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Integration Engineer',
    'JavaScript Developer',
    'API Specialist',
    'System Connector'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900 medium:from-gray-50 medium:via-gray-100 medium:to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
              <span className="block">Unarine</span>
              <span className="block text-blue-600 dark:text-blue-400 medium:text-blue-600">
                Makhesha
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 medium:text-gray-700 mb-8 h-10">
              <span className="font-medium">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 medium:text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Proactive Integration Engineer with 3+ years' experience designing and implementing 
              seamless integration solutions. Skilled in connecting diverse systems and enhancing 
              data flow with cutting-edge technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get In Touch
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 medium:text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:unarine.makhesha2@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 medium:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 medium:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/UnarineMk/"
              className="p-3 bg-white dark:bg-gray-800 medium:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce p-3 rounded-full bg-white/50 dark:bg-gray-800/50 medium:bg-gray-200/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 medium:hover:bg-gray-200/70 transition-all duration-200"
          >
            <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400 medium:text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;