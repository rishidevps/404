import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Heart, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Festivals', path: '/festivals' },
    { name: 'Traditions', path: '/traditions' },
    { name: 'Culture', path: '/culture' },
    { name: 'Art Forms', path: '/art-forms' },
    { name: 'States & UTs', path: '/states' },
    { name: 'Contribute', path: '/contribute' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Flower2 className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Samskara
              </span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Celebrating and preserving India's rich cultural heritage through stories, 
              traditions, and the collective wisdom of our diverse communities.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made with love for Bharat</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Explore</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-orange-400" />
                <a 
                  href="mailto:hello@samskara.in" 
                  className="hover:text-orange-400 transition-colors"
                >
                  hello@samskara.in
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="h-4 w-4 text-orange-400" />
                <span>Celebrating unity in diversity</span>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-400">
                  Join us in preserving the beautiful traditions and cultural wisdom 
                  that make India extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Samskara. Preserving heritage, inspiring futures.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/contribute" className="hover:text-orange-400 transition-colors">
                Contribute
              </Link>
              <span>•</span>
              <span>Cultural Heritage</span>
              <span>•</span>
              <span>Unity in Diversity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;