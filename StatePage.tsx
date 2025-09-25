import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Palette, Heart, MapPin } from 'lucide-react';

interface StateData {
  name: string;
  capital: string;
  region: string;
  description: string;
  festivals: string[];
  traditions: string[];
  culture: string[];
  artForms: string[];
  languages: string[];
  famousFor: string[];
}

const StatePage = () => {
  const { stateId } = useParams();

  // Mock data - in real app this would come from API
  const stateData: { [key: string]: StateData } = {
    'kerala': {
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      region: 'South India',
      description: 'Known as "God\'s Own Country", Kerala is famous for its backwaters, spice plantations, Ayurvedic treatments, and rich cultural heritage.',
      festivals: ['Onam', 'Thrissur Pooram', 'Theyyam', 'Boat Races', 'Vishu'],
      traditions: ['Ayurveda', 'Backwater Tourism', 'Spice Trade', 'Matrilineal System', 'Traditional Architecture'],
      culture: ['Malayalam Literature', 'Coconut-based Cuisine', 'Traditional Sarees', 'Thatched Houses', 'Martial Arts'],
      artForms: ['Kathakali', 'Mohiniyattam', 'Theyyam', 'Koodiyattam', 'Chenda Melam'],
      languages: ['Malayalam', 'Tamil', 'English'],
      famousFor: ['Backwaters', 'Spices', 'Ayurveda', 'Houseboats', 'Coconuts']
    },
    'rajasthan': {
      name: 'Rajasthan',
      capital: 'Jaipur',
      region: 'North India',
      description: 'The "Land of Kings" is renowned for its magnificent palaces, desert landscapes, vibrant folk culture, and royal heritage.',
      festivals: ['Pushkar Fair', 'Desert Festival', 'Teej', 'Gangaur', 'Karni Mata Fair'],
      traditions: ['Royal Heritage', 'Desert Life', 'Puppet Shows', 'Camel Trading', 'Folk Music'],
      culture: ['Rajasthani Cuisine', 'Colorful Turbans', 'Lehenga Choli', 'Haveli Architecture', 'Desert Culture'],
      artForms: ['Ghoomar Dance', 'Kalbeliya Dance', 'Folk Music', 'Miniature Paintings', 'Puppet Theater'],
      languages: ['Hindi', 'Rajasthani', 'Marwari'],
      famousFor: ['Thar Desert', 'Palaces', 'Forts', 'Folk Culture', 'Gemstones']
    }
  };

  const currentState = stateData[stateId || ''] || {
    name: 'State Not Found',
    capital: '',
    region: '',
    description: 'Information about this state is not available.',
    festivals: [],
    traditions: [],
    culture: [],
    artForms: [],
    languages: [],
    famousFor: []
  };

  const sections = [
    { title: 'Festivals', items: currentState.festivals, icon: Calendar, color: 'orange' },
    { title: 'Traditions', items: currentState.traditions, icon: Users, color: 'red' },
    { title: 'Culture', items: currentState.culture, icon: Heart, color: 'blue' },
    { title: 'Art Forms', items: currentState.artForms, icon: Palette, color: 'green' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/states"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to States Directory
        </Link>

        {/* State Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 mr-3" />
            <h1 className="text-5xl font-bold">{currentState.name}</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xl mb-4">{currentState.description}</p>
              <div className="space-y-2 text-purple-100">
                <p><span className="font-semibold">Capital:</span> {currentState.capital}</p>
                <p><span className="font-semibold">Region:</span> {currentState.region}</p>
                <p><span className="font-semibold">Languages:</span> {currentState.languages.join(', ')}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-200">Famous For:</h3>
              <div className="flex flex-wrap gap-2">
                {currentState.famousFor.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4"
                style={{ borderLeftColor: 
                  section.color === 'orange' ? '#ea580c' :
                  section.color === 'red' ? '#dc2626' :
                  section.color === 'blue' ? '#2563eb' : '#16a34a'
                }}
              >
                <div className="flex items-center mb-6">
                  <Icon 
                    className={`h-6 w-6 mr-3`}
                    style={{ color: 
                      section.color === 'orange' ? '#ea580c' :
                      section.color === 'red' ? '#dc2626' :
                      section.color === 'blue' ? '#2563eb' : '#16a34a'
                    }}
                  />
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>

                {section.items.length > 0 ? (
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: 
                            section.color === 'orange' ? '#ea580c' :
                            section.color === 'red' ? '#dc2626' :
                            section.color === 'blue' ? '#2563eb' : '#16a34a'
                          }}
                        ></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No information available for this section.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatePage;