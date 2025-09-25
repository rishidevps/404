import React, { useState } from 'react';
import { Home, Utensils, Shirt, Languages, Building, Globe } from 'lucide-react';

interface CulturalElement {
  _id: string;
  name: string;
  category: string;
  description: string;
  region: string;
  details: string[];
  significance: string;
}

const Culture = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const culturalElements: CulturalElement[] = [
    {
      _id: '1',
      name: 'Saree',
      category: 'Attire',
      description: 'Traditional Indian garment worn by women',
      region: 'All India',
      details: ['Unstitched cloth 6-9 yards long', 'Various draping styles', 'Different fabrics like silk, cotton, chiffon'],
      significance: 'Symbol of grace, elegance, and Indian femininity'
    },
    {
      _id: '2',
      name: 'Biryani',
      category: 'Food',
      description: 'Aromatic rice dish with meat or vegetables',
      region: 'All India',
      details: ['Layered cooking technique', 'Fragrant spices and saffron', 'Regional variations like Hyderabadi, Lucknowi'],
      significance: 'Represents culinary excellence and festive celebrations'
    },
    {
      _id: '3',
      name: 'Vastu Shastra',
      category: 'Architecture',
      description: 'Ancient Indian science of architecture and design',
      region: 'All India',
      details: ['Directional alignment', 'Sacred geometry', 'Natural elements integration'],
      significance: 'Creating harmony between nature and built environment'
    },
    {
      _id: '4',
      name: 'Sanskrit',
      category: 'Languages',
      description: 'Ancient Indian language, mother of many modern languages',
      region: 'All India',
      details: ['Classical literature', 'Scientific texts', 'Religious scriptures'],
      significance: 'Foundation of Indian philosophy and knowledge systems'
    },
    {
      _id: '5',
      name: 'Taj Mahal',
      category: 'Heritage Sites',
      description: 'UNESCO World Heritage Site and symbol of love',
      region: 'Uttar Pradesh',
      details: ['Mughal architecture', 'White marble construction', 'Intricate inlay work'],
      significance: 'Represents the pinnacle of Indo-Islamic architecture'
    },
    {
      _id: '6',
      name: 'Dhoti',
      category: 'Attire',
      description: 'Traditional Indian garment worn by men',
      region: 'All India',
      details: ['Unstitched rectangular cloth', 'Various tying styles', 'Worn during ceremonies and daily life'],
      significance: 'Symbol of simplicity and traditional masculinity'
    }
  ];

  const categories = ['All', ...Array.from(new Set(culturalElements.map(c => c.category)))];
  const filteredElements = selectedCategory === 'All' 
    ? culturalElements 
    : culturalElements.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Attire': return Shirt;
      case 'Food': return Utensils;
      case 'Architecture': return Home;
      case 'Languages': return Languages;
      case 'Heritage Sites': return Building;
      default: return Globe;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Indian Culture</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the diverse cultural landscape of India, from traditional attire 
            and culinary delights to architectural marvels and linguistic heritage.
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
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredElements.map((element, index) => {
            const Icon = getCategoryIcon(element.category);
            return (
              <div
                key={element._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">{element.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {element.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{element.region}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {element.description}
                </p>

                <div className="mb-6 border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {element.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Cultural Significance:</p>
                      <p className="text-gray-600 text-sm">{element.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredElements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No cultural elements found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Culture;