import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, ArrowRight, Home } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
          <div className="flex items-center justify-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Thank You!</h1>
            <Heart className="h-6 w-6 text-red-500" />
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Contribution Has Been Received
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We deeply appreciate your effort to preserve and share India's rich cultural heritage. 
            Your contribution will be reviewed by our team and published soon to help others 
            learn about our beautiful traditions.
          </p>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-3">What happens next?</h3>
            <ul className="text-sm text-orange-700 space-y-2 text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Our editorial team will review your submission for accuracy and cultural sensitivity
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You'll receive an email notification once your contribution is approved
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Your contribution will be featured on our website with proper attribution
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </Link>
          
          <Link
            to="/contribute"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
          >
            Share Another Story
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>

        {/* Additional Message */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <p className="text-gray-700 italic">
            "Your story is a thread in the beautiful tapestry of Indian culture. 
            Thank you for helping us weave this heritage for future generations."
          </p>
          <p className="text-sm text-gray-500 mt-2">— Team Samskara</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;