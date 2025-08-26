import React from 'react';
import { Menu, X, Sun, Moon, Monitor, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark': return <Moon className="h-5 w-5" />;
      case 'light': return <Sun className="h-5 w-5" />;
      default: return <Monitor className="h-5 w-5" />;
    }
  };

  const cycleTheme = () => {
    const themes = ['light', 'medium', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 medium:bg-gray-100/80 border-b border-gray-200/50 dark:border-gray-700/50 medium:border-gray-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white medium:text-gray-800">
              Unarine Makhesha
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600">
              Integration Engineer
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 dark:text-gray-300 medium:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Contact Info */}
            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600">
              <a 
                href="mailto:unarine.makhesha2@gmail.com"
                className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">unarine.makhesha2@gmail.com</span>
              </a>
              <a 
                href="tel:0833089367"
                className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">083 308 9367</span>
              </a>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 medium:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 medium:hover:bg-gray-300 transition-colors duration-200"
            >
              {getThemeIcon()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={cycleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 medium:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 medium:hover:bg-gray-300 transition-colors duration-200"
            >
              {getThemeIcon()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 medium:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 medium:hover:bg-gray-300 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 medium:bg-gray-100/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 medium:border-gray-300/50">
            <div className="px-4 py-6 space-y-4">
              {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 medium:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 medium:border-gray-300 space-y-3">
                <a 
                  href="mailto:unarine.makhesha2@gmail.com"
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>unarine.makhesha2@gmail.com</span>
                </a>
                <a 
                  href="tel:0833089367"
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>083 308 9367</span>
                </a>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Kempton Park</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;