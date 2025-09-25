import React, { useState } from 'react';
import { Music, Drama, Palette, Users } from 'lucide-react';

interface ArtForm {
  _id: string;
  name: string;
  category: string;
  description: string;
  origin: string;
  characteristics: string[];
  significance: string;
}

const ArtForms = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const artForms: ArtForm[] = [
    {
      _id: '1',
      name: 'Bharatanatyam',
      category: 'Dance',
      description: 'Classical dance form from Tamil Nadu with intricate movements and expressions',
      origin: 'Tamil Nadu',
      characteristics: ['Hand gestures (mudras)', 'Facial expressions (abhinaya)', 'Rhythmic footwork', 'Spiritual themes'],
      significance: 'One of the oldest classical dance forms, expressing devotion and storytelling'
    },
    {
      _id: '2',
      name: 'Hindustani Classical Music',
      category: 'Music',
      description: 'North Indian classical music tradition with ragas and talas',
      origin: 'North India',
      characteristics: ['Raga system', 'Improvisation', 'Tala (rhythm)', 'Alapa, Jor, Jhala structure'],
      significance: 'Spiritual and meditative music connecting performer and audience with divine'
    },
    {
      _id: '3',
      name: 'Madhubani Painting',
      category: 'Crafts',
      description: 'Traditional folk art from Bihar using natural dyes and pigments',
      origin: 'Bihar',
      characteristics: ['Geometric patterns', 'Natural colors', 'Mythological themes', 'Wall and paper medium'],
      significance: 'Preserves rural artistic traditions and women\'s creative expression'
    },
    {
      _id: '4',
      name: 'Kathakali',
      category: 'Theater',
      description: 'Classical dance-drama from Kerala with elaborate costumes and makeup',
      origin: 'Kerala',
      characteristics: ['Elaborate face painting', 'Dramatic costumes', 'Martial arts movements', 'Epic stories'],
      significance: 'Combines dance, drama, music, and visual arts in spectacular performances'
    },
    {
      _id: '5',
      name: 'Carnatic Music',
      category: 'Music',
      description: 'South Indian classical music tradition emphasizing compositions',
      origin: 'South India',
      characteristics: ['Kriti compositions', 'Improvisation within structure', 'Trinity composers', 'Devotional content'],
      significance: 'Preserves ancient musical knowledge and devotional traditions'
    },
    {
      _id: '6',
      name: 'Kuchipudi',
      category: 'Dance',
      description: 'Classical dance form from Andhra Pradesh combining dance and drama',
      origin: 'Andhra Pradesh',
      characteristics: ['Fluid movements', 'Dramatic sequences', 'Speech and song', 'Storytelling'],
      significance: 'Bridges classical and folk traditions with narrative richness'
    }
  ];

  const categories = ['All', ...Array.from(new Set(artForms.map(a => a.category)))];
  const filteredArtForms = selectedCategory === 'All' 
    ? artForms 
    : artForms.filter(a => a.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dance': return Users;
      case 'Music': return Music;
      case 'Crafts': return Palette;
      case 'Theater': return Drama;
      default: return Palette;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Indian Art Forms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the magnificent world of Indian performing and visual arts, where 
            ancient traditions continue to inspire and enchant audiences worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Art Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArtForms.map((artForm, index) => {
            const Icon = getCategoryIcon(artForm.category);
            return (
              <div
                key={artForm._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-green-500"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">{artForm.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {artForm.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{artForm.origin}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {artForm.description}
                </p>

                <div className="mb-6 border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Characteristics:</h4>
                  <ul className="space-y-1">
                    {artForm.characteristics.map((characteristic, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                        {characteristic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start">
                    <Palette className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Cultural Significance:</p>
                      <p className="text-gray-600 text-sm">{artForm.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredArtForms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No art forms found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtForms;