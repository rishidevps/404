import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Festival {
  _id: string;
  name: string;
  state: string;
  description: string;
  season: string;
  significance: string;
}

const Festivals = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [selectedState, setSelectedState] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFestivals();
  }, []);

  const fetchFestivals = async () => {
    try {
      // Mock data for now - will connect to backend later
      const mockFestivals: Festival[] = [
        {
          _id: '1',
          name: 'Diwali',
          state: 'All India',
          description: 'The festival of lights celebrated across India with great enthusiasm',
          season: 'Autumn',
          significance: 'Victory of light over darkness and good over evil'
        },
        {
          _id: '2',
          name: 'Durga Puja',
          state: 'West Bengal',
          description: 'Grand celebration honoring Goddess Durga',
          season: 'Autumn',
          significance: 'Celebration of divine feminine power'
        },
        {
          _id: '3',
          name: 'Onam',
          state: 'Kerala',
          description: 'Harvest festival marking the homecoming of King Mahabali',
          season: 'Monsoon',
          significance: 'Celebration of prosperity and unity'
        },
        {
          _id: '4',
          name: 'Baisakhi',
          state: 'Punjab',
          description: 'Harvest festival and Sikh New Year',
          season: 'Spring',
          significance: 'Thanksgiving for good harvest'
        },
        {
          _id: '5',
          name: 'Ganesh Chaturthi',
          state: 'Maharashtra',
          description: 'Celebration of Lord Ganesha with grand processions',
          season: 'Monsoon',
          significance: 'Removal of obstacles and new beginnings'
        },
        {
          _id: '6',
          name: 'Pongal',
          state: 'Tamil Nadu',
          description: 'Harvest festival dedicated to the Sun God',
          season: 'Winter',
          significance: 'Gratitude for successful harvest'
        }
      ];
      setFestivals(mockFestivals);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching festivals:', error);
      setLoading(false);
    }
  };

  const states = ['All', ...Array.from(new Set(festivals.map(f => f.state)))];
  const filteredFestivals = selectedState === 'All' 
    ? festivals 
    : festivals.filter(f => f.state === selectedState);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-orange-600">Loading festivals...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Indian Festivals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the colorful tapestry of Indian festivals that bring communities together 
            in celebration of life, harvest, and spirituality throughout the year.
          </p>
        </div>

        {/* State Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {states.map(state => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedState === state
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival, index) => (
            <div
              key={festival._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-orange-500"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">{festival.name}</h3>
              </div>
              
              <div className="flex items-center mb-3 text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{festival.state}</span>
                <span className="ml-4 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  {festival.season}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {festival.description}
              </p>

              <div className="border-t pt-4">
                <div className="flex items-start">
                  <Users className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">Significance:</p>
                    <p className="text-sm text-gray-600">{festival.significance}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No festivals found for the selected state.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Festivals;