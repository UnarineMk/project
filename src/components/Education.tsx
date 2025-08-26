import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 medium:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 medium:text-gray-600 max-w-3xl mx-auto">
            Academic foundation that drives my technical excellence and continuous learning approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-white dark:bg-gray-900 medium:bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 medium:from-blue-50 medium:to-indigo-50 rounded-xl">
                  <GraduationCap className="h-12 w-12 text-blue-600 dark:text-blue-400 medium:text-blue-600" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-2">
                      BSc Information Technology in Business Systems
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 medium:text-blue-600 font-semibold">
                      Rosebank College
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 medium:text-gray-600 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">2019 – 2021</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 medium:from-green-50 medium:to-emerald-50 p-4 rounded-xl mb-6">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-green-600 dark:text-green-400 medium:text-green-600" />
                    <span className="font-semibold text-green-800 dark:text-green-300 medium:text-green-800">
                      Graduated with Distinction
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-800 dark:text-green-300 medium:text-green-800 mt-1">
                    89% Average
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 medium:bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white medium:text-gray-800 mb-2">
                      Core Subjects
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600 space-y-1">
                      <li>• Business Systems Analysis</li>
                      <li>• Database Management</li>
                      <li>• Software Development</li>
                      <li>• System Integration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 medium:bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white medium:text-gray-800 mb-2">
                      Key Skills Gained
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 medium:text-gray-600 space-y-1">
                      <li>• Technical Problem Solving</li>
                      <li>• Project Management</li>
                      <li>• Business Process Analysis</li>
                      <li>• Strategic IT Planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Continuous Learning */}
            <div className="bg-white dark:bg-gray-900 medium:bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 medium:text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white medium:text-gray-800">
                  Continuous Learning
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 medium:text-gray-600 mb-4">
                Committed to staying current with emerging technologies and industry best practices 
                through online courses, certifications, and hands-on experimentation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 medium:bg-blue-50 text-blue-800 dark:text-blue-200 medium:text-blue-800 rounded-full">
                  Self-Directed Learning
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 medium:bg-green-50 text-green-800 dark:text-green-200 medium:text-green-800 rounded-full">
                  Technology Research
                </span>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg text-white">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 mr-3" />
                <h3 className="text-lg font-semibold">Academic Excellence</h3>
              </div>
              <p className="text-blue-100 mb-4">
                My academic achievements reflect my dedication to excellence and deep understanding 
                of information technology principles applied to business contexts.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">Top 5%</div>
                  <div className="text-sm text-blue-200">of graduating class</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;