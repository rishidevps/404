import React, { useState } from 'react';
import { Flower2, Heart, Users, BookOpen } from 'lucide-react';

interface Tradition {
  _id: string;
  name: string;
  category: string;
  description: string;
  region: string;
  significance: string;
  practices: string[];
}

const Traditions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const traditions: Tradition[] = [
    {
      _id: '1',
      name: 'Namaste',
      category: 'Greetings',
      description: 'Traditional Indian greeting where palms are pressed together near the heart',
      region: 'All India',
      significance: 'Recognition of the divine in another person',
      practices: ['Join palms together', 'Slight bow of the head', 'Say "Namaste"']
    },
    {
      _id: '2',
      name: 'Guru-Shishya Parampara',
      category: 'Education',
      description: 'Traditional teacher-student relationship system',
      region: 'All India',
      significance: 'Preservation and transmission of knowledge',
      practices: ['Reverence to teacher', 'Personal mentorship', 'Oral tradition']
    },
    {
      _id: '3',
      name: 'Atithi Devo Bhava',
      category: 'Hospitality',
      description: 'Guest is equivalent to God - principle of hospitality',
      region: 'All India',
      significance: 'Sacred duty to welcome and serve guests',
      practices: ['Welcome with respect', 'Offer food and shelter', 'Ensure comfort']
    },
    {
      _id: '4',
      name: 'Sankranti Celebrations',
      category: 'Seasonal',
      description: 'Transition rituals marking seasonal changes',
      region: 'All India',
      significance: 'Harmony with natural cycles',
      practices: ['Special prayers', 'Traditional foods', 'Community gatherings']
    },
    {
      _id: '5',
      name: 'Ashrama System',
      category: 'Life Stages',
      description: 'Four stages of human life with specific duties',
      region: 'All India',
      significance: 'Structured approach to spiritual growth',
      practices: ['Brahmacharya (student)', 'Grihastha (householder)', 'Vanaprastha (forest dweller)', 'Sannyasa (renunciant)']
    },
    {
      _id: '6',
      name: 'Pandhra Sanskaras',
      category: 'Ceremonies',
      description: 'Sixteen sacred ceremonies marking important life events',
      region: 'All India',
      significance: 'Purification and spiritual development',
      practices: ['Birth ceremonies', 'Naming ceremony', 'Marriage rituals', 'Last rites']
    }
  ];

  const categories = ['All', ...Array.from(new Set(traditions.map(t => t.category)))];
  const filteredTraditions = selectedCategory === 'All' 
    ? traditions 
    : traditions.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Indian Traditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the timeless customs and rituals that have shaped Indian society for millennia, 
            passing wisdom from generation to generation through sacred practices.
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
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Traditions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTraditions.map((tradition, index) => (
            <div
              key={tradition._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-red-500"
            >
              <div className="flex items-center mb-4">
                <Flower2 className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">{tradition.name}</h3>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  {tradition.category}
                </span>
                <span className="ml-2 text-sm text-gray-500">{tradition.region}</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {tradition.description}
              </p>

              <div className="mb-6 border-t pt-4">
                <div className="flex items-start mb-3">
                  <Heart className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Significance:</p>
                    <p className="text-gray-600 text-sm">{tradition.significance}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 mb-3">Traditional Practices:</p>
                    <ul className="space-y-1">
                      {tradition.practices.map((practice, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2 flex-shrink-0"></span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTraditions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No traditions found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Traditions;