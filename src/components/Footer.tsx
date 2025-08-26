import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 medium:bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Unarine Makhesha</h3>
            <p className="text-gray-400 mb-4">
              Integration Engineer passionate about connecting systems and driving innovation through seamless digital solutions.
            </p>
            <p className="text-gray-400 text-sm">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:unarine.makhesha2@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>unarine.makhesha2@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="h-4 w-4 flex items-center justify-center">📍</span>
                <span>Kempton Park, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/unarine-makhesha-063b65180/"
                className="p-2 bg-gray-800 dark:bg-gray-900 medium:bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/UnarineMk/"
                className="p-2 bg-gray-800 dark:bg-gray-900 medium:bg-gray-700 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 medium:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Unarine Makhesha. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;