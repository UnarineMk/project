import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'unarine.makhesha2@gmail.com',
      href: 'mailto:unarine.makhesha2@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '083 308 9367',
      href: 'tel:0833089367'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kempton Park, South Africa',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 medium:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 medium:text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next integration project? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 medium:text-gray-600 mb-8 text-lg">
                I'm always interested in discussing new opportunities, innovative projects, and 
                potential collaborations. Whether you need integration solutions or want to 
                explore how technology can drive your business forward, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 medium:bg-white rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 medium:bg-blue-50 rounded-lg group-hover:bg-blue-600 dark:group-hover:bg-blue-600 medium:group-hover:bg-blue-600 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 medium:text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white medium:text-gray-800">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 medium:text-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-300 medium:group-hover:text-gray-800">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white medium:text-gray-800 mb-4">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/unarine-makhesha-063b65180/"
                  className="p-3 bg-gray-100 dark:bg-gray-800 medium:bg-gray-200 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 medium:hover:bg-blue-600 text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/UnarineMk/"
                  className="p-3 bg-gray-100 dark:bg-gray-800 medium:bg-gray-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 medium:hover:bg-gray-900 text-gray-600 dark:text-gray-400 medium:text-gray-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 medium:bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white medium:text-gray-800 mb-6">
              Send a Message
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 medium:bg-green-50 border border-green-200 dark:border-green-700 medium:border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 medium:text-green-600" />
                <span className="text-green-800 dark:text-green-300 medium:text-green-800 font-medium">
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 medium:text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 medium:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 medium:bg-white text-gray-900 dark:text-white medium:text-gray-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 medium:text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 medium:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 medium:bg-white text-gray-900 dark:text-white medium:text-gray-900 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 medium:text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 medium:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 medium:bg-white text-gray-900 dark:text-white medium:text-gray-900 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 medium:text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 medium:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 medium:bg-white text-gray-900 dark:text-white medium:text-gray-900 transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;