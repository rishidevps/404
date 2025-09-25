import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

interface State {
  id: string;
  name: string;
  capital: string;
  region: string;
  description: string;
}

const StatesDirectory = () => {
  const states: State[] = [
    {
      id: 'andhra-pradesh',
      name: 'Andhra Pradesh',
      capital: 'Amaravati',
      region: 'South India',
      description: 'Known for Kuchipudi dance, Tirupati temple, and rich cultural heritage'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      region: 'South India',
      description: 'God\'s Own Country with backwaters, Kathakali, and Ayurveda'
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      capital: 'Jaipur',
      region: 'North India',
      description: 'Land of kings with majestic palaces, folk music, and desert culture'
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      region: 'East India',
      description: 'Cultural hub known for Durga Puja, Bengali literature, and sweets'
    },
    {
      id: 'punjab',
      name: 'Punjab',
      capital: 'Chandigarh',
      region: 'North India',
      description: 'Land of five rivers, Bhangra dance, and Golden Temple'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      region: 'West India',
      description: 'Home to Bollywood, Ganesh Chaturthi, and Marathi culture'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      capital: 'Gandhinagar',
      region: 'West India',
      description: 'Land of Gandhi, Navratri celebrations, and entrepreneurial spirit'
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      capital: 'Chennai',
      region: 'South India',
      description: 'Classical Tamil culture, Bharatanatyam, and ancient temples'
    }
  ];

  const regions = Array.from(new Set(states.map(state => state.region)));

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">States & Union Territories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the diverse cultural landscape of India through its states and union territories, 
            each with unique traditions, festivals, and heritage.
          </p>
        </div>

        {/* States organized by regions */}
        {regions.map(region => (
          <div key={region} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{region}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {states
                .filter(state => state.region === region)
                .map((state) => (
                  <Link
                    key={state.id}
                    to={`/states/${state.id}`}
                    className="group block transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-purple-500 h-full">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-6 w-6 text-purple-600 mr-2" />
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {state.name}
                        </h3>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Capital: </span>
                        <span className="text-sm font-medium text-gray-700">{state.capital}</span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {state.description}
                      </p>

                      <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                        Explore Culture
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        {/* Union Territories Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Union Territories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Delhi', 'Puducherry', 'Chandigarh', 'Goa', 'Jammu & Kashmir', 'Ladakh', 'Andaman & Nicobar', 'Lakshadweep'].map((ut) => (
              <div key={ut} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Link
                  to={`/states/${ut.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
                >
                  {ut}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesDirectory;