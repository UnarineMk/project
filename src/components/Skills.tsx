import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Cog, Users, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'C#', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Cog,
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'NextJS', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Integration Platforms',
      icon: Database,
      skills: [
        { name: 'Tray.io', level: 95 },
        { name: 'Synatic', level: 90 },
        { name: 'Flowgear', level: 85 },
        { name: 'OAuth Authentication', level: 85 },
        { name: 'Microsoft Azure', level: 80 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Azure DevOps', level: 85 },
        { name: 'Azure Entra', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Kibana', level: 75 }
      ]
    }
  ];

  const processes = [
    'SDLC Compliance',
    'Agile (Scrum)',
    'Data Mapping & Transformation',
    'ETL Processes',
    'OAuth Implementation',
    'Version Control (Git)',
    'Problem-Solving & Troubleshooting',
    'Team Collaboration',
    'Project Management'
  ];

  const apis = [
    'Netsuite (SuiteQL)', 'Shopify', 'Magento', 'Centra (GraphQL)', 'Salesforce', 'Syspro',
    'Facebook API', 'TikTok API', 'Google Ads API', 'LinkedIn Ads', 'Google Sheets API',
    'Zoom API', 'Eventbrite', 'Typeform', 'Cvent', 'Gorgias', 'Trustpilot', 'Yotpo', 'Stamped.io',
    'Raiser\'s Edge API'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 medium:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 medium:text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in integration engineering
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 medium:bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 medium:bg-blue-50 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white medium:text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 medium:text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 medium:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 medium:bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Processes & Methodologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 medium:from-gray-50 medium:to-blue-50 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 medium:text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800">
                Processes & Methodologies
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {processes.map((process, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 medium:text-gray-700">
                    {process}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 medium:from-gray-50 medium:to-green-50 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-green-600 dark:text-green-400 medium:text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800">
                API Integrations
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {apis.map((api, index) => (
                <span
                  key={index}
                  className="px-3 py-2 text-sm font-medium bg-green-100 dark:bg-green-900 medium:bg-green-50 text-green-800 dark:text-green-200 medium:text-green-800 rounded-lg border border-green-200 dark:border-green-700 medium:border-green-200"
                >
                  {api}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-xl text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Certifications & Learning</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">Udemy Certifications:</h4>
                <p className="text-blue-100">
                  • HTML, CSS, JavaScript<br />
                  • Bootstrap & Responsive Design<br />
                  • ReactJS & Node.js<br />
                  • SQL & Database Management<br />
                  • Web Design & UX/UI Design
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Azure Integration:</h4>
                <p className="text-blue-100">
                  Currently pursuing Azure Integration Certification, enhancing expertise in Azure integrations and cloud solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Oracle Integration:</h4>
                <p className="text-blue-100">
                  Currently pursuing Oracle Integration Certification, focusing on enterprise-level integration solutions and cloud platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;