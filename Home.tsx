import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Palette, Map, Heart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Festivals',
      description: 'Discover the vibrant festivals celebrated across India',
      icon: Calendar,
      path: '/festivals',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Traditions',
      description: 'Explore ancient customs and rituals that define our heritage',
      icon: Users,
      path: '/traditions',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Culture',
      description: 'Delve into food, attire, architecture, and languages',
      icon: Heart,
      path: '/culture',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Art Forms',
      description: 'Experience dance, music, crafts, and theater traditions',
      icon: Palette,
      path: '/art-forms',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'States & UTs',
      description: 'Journey through diverse cultural landscapes of India',
      icon: Map,
      path: '/states',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Samskara
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold text-orange-200">
            Celebrating India's Cultural Heritage
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Journey through the rich tapestry of Indian culture, traditions, and heritage. 
            From ancient festivals to timeless art forms, discover the soul of Bharat that 
            continues to inspire generations across the world.
          </p>
          <Link
            to="/festivals"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Our Cultural Treasures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the diverse cultural heritage of India through our comprehensive collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.path}
                  className="group block transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 h-full border-t-4 border-orange-400">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                      Explore Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contribute to Our Cultural Archive
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Share your knowledge, stories, and experiences to help preserve and celebrate 
            India's rich cultural heritage for future generations.
          </p>
          <Link
            to="/contribute"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Share Your Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;