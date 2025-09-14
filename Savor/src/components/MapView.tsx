import React, { useState } from 'react';
import { MapPin, Star, Navigation, Phone, Clock, Award, Shield } from 'lucide-react';

interface MapViewProps {
  restaurants: any[];
  onRestaurantSelect: (restaurant: any) => void;
}

const MapView: React.FC<MapViewProps> = ({ restaurants, onRestaurantSelect }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const handleMarkerClick = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
  };

  const handleGetDirections = (restaurant: any) => {
    const address = encodeURIComponent(restaurant.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <div className="space-y-4">
      {/* Black and White Map Container */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 rounded-3xl overflow-hidden h-96 shadow-xl">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="snapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#snapGrid)" />
          </svg>
        </div>

        {/* Floating Islands/Areas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-20 h-16 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-20 bg-white/10 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/2 w-16 h-12 bg-white/10 rounded-full blur-sm"></div>
        </div>

        {/* Restaurant Markers with Black/White Design */}
        {restaurants.map((restaurant, index) => (
          <button
            key={restaurant.id}
            onClick={() => handleMarkerClick(restaurant)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
              selectedRestaurant?.id === restaurant.id ? 'scale-125 z-30' : 'z-20'
            }`}
            style={{
              left: `${15 + (index * 12) % 70}%`,
              top: `${20 + (index * 15) % 60}%`,
            }}
          >
            <div className={`relative ${
              selectedRestaurant?.id === restaurant.id 
                ? 'animate-bounce' 
                : ''
            }`}>
              {/* Main Marker */}
              <div className={`relative w-12 h-12 rounded-full shadow-lg border-3 border-white overflow-hidden ${
                restaurant.isOpen 
                  ? 'bg-black' 
                  : 'bg-gray-500'
              }`}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    restaurant.isOpen ? 'bg-white' : 'bg-gray-300'
                  }`}>
                    <MapPin className={`w-3 h-3 ${restaurant.isOpen ? 'text-black' : 'text-gray-600'} fill-current`} />
                  </div>
                </div>
              </div>

              {/* Activity Pulse */}
              {restaurant.isOpen && (
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></div>
              )}

              {/* Selection Indicator */}
              {selectedRestaurant?.id === restaurant.id && (
                <div className="absolute -inset-2 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
              )}
            </div>
          </button>
        ))}

        {/* Your Location */}
        <div className="absolute bottom-6 left-6">
          <div className="relative">
            <div className="w-10 h-10 bg-black rounded-full border-3 border-white shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Navigation className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Weather/Time Overlay */}
        <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-2xl p-3">
          <div className="flex items-center space-x-2 text-white">
            <div className="text-2xl">☀️</div>
            <div>
              <div className="text-sm font-semibold">72°F</div>
              <div className="text-xs opacity-90">Sunny</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Restaurant Card */}
      {selectedRestaurant && (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-300 animate-in slide-in-from-bottom-4">
          <div className="relative">
            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Restaurant Info Overlay */}
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="font-bold text-lg">{selectedRestaurant.name}</h3>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="w-4 h-4 fill-white text-white" />
                <span>{selectedRestaurant.rating}</span>
                <span className="opacity-90">•</span>
                <span className="opacity-90">{selectedRestaurant.cuisine}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
              selectedRestaurant.isOpen 
                ? 'bg-black text-white' 
                : 'bg-gray-500 text-white'
            }`}>
              {selectedRestaurant.isOpen ? 'Open' : 'Closed'}
            </div>
          </div>

          <div className="p-4">
            {/* Quick Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{selectedRestaurant.location}</span>
                </div>
              </div>
              <span className="text-lg font-bold text-black">{selectedRestaurant.priceRange}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => onRestaurantSelect(selectedRestaurant)}
                className="flex-1 bg-black text-white py-3 px-4 rounded-2xl text-sm font-semibold hover:bg-gray-800 transition-all"
              >
                View Details
              </button>
              <button
                onClick={() => handleGetDirections(selectedRestaurant)}
                className="bg-gray-100 text-gray-700 py-3 px-4 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                <Navigation className="w-5 h-5" />
              </button>
              <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-2xl hover:bg-gray-200 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Local Experts Section */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <Award className="w-5 h-5 text-black" />
          <h3 className="font-bold text-black">Local Food Experts</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-sm">Sarah Chen</p>
                <div className="flex items-center space-x-1 bg-black px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">5+ Years Local</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">127 reviews • Mission District resident</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-black">4.9</div>
              <div className="text-xs text-gray-500">avg rating</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-sm">Mike Rodriguez</p>
                <div className="flex items-center space-x-1 bg-gray-600 px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">3+ Years Local</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">89 reviews • Downtown resident</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-black">4.7</div>
              <div className="text-xs text-gray-500">avg rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-black text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-800">
          <div className="flex items-center space-x-2">
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">Navigate</span>
          </div>
        </button>
        <button className="bg-gray-800 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-700">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Check In</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MapView;