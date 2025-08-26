import React from 'react';
import { MapPin, Mail, Phone, Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: '3+ Years Experience',
      description: 'Specialized in integration solutions and system connectivity'
    },
    {
      icon: Award,
      title: 'Performance Focused',
      description: 'Improved processing speeds by up to 25% across projects'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong track record of cross-team collaboration and project delivery'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 medium:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 medium:text-gray-700 mb-6 leading-relaxed">
              I'm a proactive Integration Engineer with over 4 years of experience in designing and 
              implementing seamless integration solutions. My expertise lies in connecting diverse 
              systems, enhancing data flow, and delivering high-quality, performant integrations 
              that drive business growth.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 medium:text-gray-700 mb-8 leading-relaxed">
              With a strong foundation in JavaScript, TypeScript, and various integration platforms 
              like Tray.io, Synatic, and Flowgear, I've successfully managed multiple projects under 
              tight deadlines while maintaining SDLC compliance and Agile collaboration standards.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 medium:text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                <span>Kempton Park, South Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 medium:text-gray-600">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                <a 
                  href="mailto:unarine.makhesha2@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
                >
                  unarine.makhesha2@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 medium:text-gray-600">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                <a 
                  href="tel:0833089367"
                  className="hover:text-blue-600 dark:hover:text-blue-400 medium:hover:text-blue-600 transition-colors"
                >
                  083 308 9367
                </a>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 medium:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 medium:bg-blue-50 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white medium:text-gray-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 medium:text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objective */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">My Objective</h3>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto">
              I'm passionate about driving impactful integration projects and contributing to 
              business growth within innovative, forward-thinking teams. Let's connect diverse 
              systems and create seamless digital experiences together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;