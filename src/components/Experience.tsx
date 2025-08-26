import React from 'react';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Integration Engineer',
      company: 'Dotdigital',
      location: 'London (Remote)',
      period: '2023 – Present',
      highlights: [
        'Built integrations using Tray.io and multiple APIs (Netsuite, Eventbrite, Zoom, Google Ads, Facebook, TikTok, LinkedIn, Centra)',
        'Enhanced Integration Capabilities: Successfully integrated multiple third-party APIs, expanding Dotdigital\'s platform functionality',
        'Process Improvement: Improved integration processing speed by 20% through optimized scripting and efficient use of Tray.io',
        'Team Collaboration: Completed integration projects ahead of schedule by effectively collaborating with cross-functional teams and participating in Agile ceremonies',
        'SDLC Compliance: Familiar and confident with Dotdigital\'s Software Development Life Cycle processes, ensuring all work meets Definition of Ready and Definition of Done',
        'Problem-Solving: Investigate and resolve complex integration issues, maintaining a proactive attitude and reaching out to other teams when necessary'
      ],
      technologies: ['Tray.io', 'JavaScript', 'Netsuite (SuiteQL)', 'Azure DevOps', 'Azure Entra', 'OAuth', 'GraphQL']
    },
    {
      title: 'Junior Integration Developer',
      company: 'Core Group',
      location: 'Sandton (Hybrid)',
      period: '2022 – 2023',
      highlights: [
        'Workflow Automation: Connected various systems using Flowgear to automate workflows, enabling seamless data exchange',
        'Custom Scripting: Wrote C# scripts for data transformations, implementing custom logic to meet client-specific requirements',
        'System Integration: Integrated platforms like Syspro, Salesforce, Magento, and Shopify for smooth operations',
        'Problem-Solving: Troubleshot complex integration issues, providing swift and effective solutions while maintaining a positive attitude',
        'Project Management: Managed multiple projects simultaneously, demonstrating strong organizational and time-management skills',
        'Efficient Project Delivery: Managed over eight projects under tight deadlines without compromising quality',
        'Optimization: Reduced data processing times by 15% through efficient flow designs and code optimization'
      ],
      technologies: ['Flowgear', 'C#', 'Salesforce', 'Magento', 'Shopify', 'Syspro', 'Data Transformation']
    },
    {
      title: 'Graduate Integration Developer',
      company: 'Syaptor Systems',
      location: 'Midrand (Remote)',
      period: '2022',
      highlights: [
        'Built robust pipelines with Synatic and implemented ETL processes using JavaScript',
        'Developed a delivery app with ReactJS, Ionic, and Supabase, cutting deployment time by 25%',
        'Implemented comprehensive ETL processes for data integration and transformation',
        'Created robust data pipelines ensuring reliable and efficient data flow between systems'
      ],
      technologies: ['Synatic', 'JavaScript', 'ReactJS', 'Ionic', 'Supabase', 'ETL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 medium:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 medium:text-gray-600 max-w-3xl mx-auto">
            A journey of growth and innovation in integration engineering and system connectivity
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 medium:border-gray-100 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 medium:bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-3">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 medium:text-gray-700">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white medium:text-gray-800 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 medium:bg-blue-50 text-blue-800 dark:text-blue-200 medium:text-blue-800 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;