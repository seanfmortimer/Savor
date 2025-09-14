import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import MapView from './MapView';
import { Filter, Star, Map, List } from 'lucide-react';

interface ExploreViewProps {
  onRestaurantSelect: (restaurant: any) => void;
}

const ExploreView: React.FC<ExploreViewProps> = ({ onRestaurantSelect }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const restaurants = [
    {
      id: 1,
      name: 'Bella Vista Italian',
      cuisine: 'Italian',
      rating: 4.8,
      reviews: 234,
      location: '1.2 miles away',
      address: '123 Main St, Downtown',
      coordinates: { lat: 37.7749, lng: -122.4194 },
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$$',
      tags: ['Romantic', 'Date Night', 'Wine Bar'],
      isOpen: true,
      recentVisitors: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 9.2,
        localExpertReviews: 12,
        establishedLocalReviews: 8,
        newLocalReviews: 15,
        totalLocalReviews: 35,
        topLocalReviewer: {
          name: 'Sarah Chen',
          badge: 'Local Expert',
          yearsLocal: '5+ years'
        }
      }
    },
    {
      id: 2,
      name: 'Sakura Sushi Bar',
      cuisine: 'Japanese',
      rating: 4.9,
      reviews: 189,
      location: '0.8 miles away',
      address: '456 Oak Ave, Midtown',
      coordinates: { lat: 37.7849, lng: -122.4094 },
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$$$',
      tags: ['Fresh', 'Authentic', 'Omakase'],
      isOpen: true,
      recentVisitors: [
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 9.5,
        localExpertReviews: 18,
        establishedLocalReviews: 12,
        newLocalReviews: 9,
        totalLocalReviews: 39,
        topLocalReviewer: {
          name: 'Mike Rodriguez',
          badge: 'Established Local',
          yearsLocal: '3+ years'
        }
      }
    },
    {
      id: 3,
      name: 'Taco Libre',
      cuisine: 'Mexican',
      rating: 4.6,
      reviews: 156,
      location: '1.5 miles away',
      address: '789 Pine St, Mission',
      coordinates: { lat: 37.7649, lng: -122.4294 },
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$',
      tags: ['Casual', 'Family Friendly', 'Tacos'],
      isOpen: false,
      recentVisitors: [
        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 8.7,
        localExpertReviews: 6,
        establishedLocalReviews: 14,
        newLocalReviews: 22,
        totalLocalReviews: 42,
        topLocalReviewer: {
          name: 'Emma Thompson',
          badge: 'New Local',
          yearsLocal: '1+ year'
        }
      }
    },
    {
      id: 4,
      name: 'The Garden Bistro',
      cuisine: 'American',
      rating: 4.7,
      reviews: 298,
      location: '2.1 miles away',
      address: '321 Elm St, Uptown',
      coordinates: { lat: 37.7949, lng: -122.3994 },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$$',
      tags: ['Outdoor Seating', 'Brunch', 'Healthy'],
      isOpen: true,
      recentVisitors: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 8.9,
        localExpertReviews: 10,
        establishedLocalReviews: 16,
        newLocalReviews: 18,
        totalLocalReviews: 44,
        topLocalReviewer: {
          name: 'Alex Kim',
          badge: 'Local Expert',
          yearsLocal: '5+ years'
        }
      }
    },
    {
      id: 5,
      name: 'Spice Route',
      cuisine: 'Indian',
      rating: 4.5,
      reviews: 167,
      location: '1.8 miles away',
      address: '654 Cedar Blvd, Westside',
      coordinates: { lat: 37.7549, lng: -122.4394 },
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$$',
      tags: ['Spicy', 'Vegetarian Options', 'Curry'],
      isOpen: true,
      recentVisitors: [
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 8.4,
        localExpertReviews: 4,
        establishedLocalReviews: 11,
        newLocalReviews: 19,
        totalLocalReviews: 34,
        topLocalReviewer: {
          name: 'Jessica Park',
          badge: 'Established Local',
          yearsLocal: '3+ years'
        }
      }
    },
    {
      id: 6,
      name: 'Coastal Breeze',
      cuisine: 'Seafood',
      rating: 4.8,
      reviews: 201,
      location: '2.5 miles away',
      address: '987 Beach Dr, Waterfront',
      coordinates: { lat: 37.7449, lng: -122.4494 },
      image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$$$',
      tags: ['Fresh Seafood', 'Ocean View', 'Fine Dining'],
      isOpen: true,
      recentVisitors: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      ],
      localRanking: {
        score: 9.1,
        localExpertReviews: 15,
        establishedLocalReviews: 9,
        newLocalReviews: 12,
        totalLocalReviews: 36,
        topLocalReviewer: {
          name: 'David Wilson',
          badge: 'Local Expert',
          yearsLocal: '10+ years'
        }
      }
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'italian', label: 'Italian', color: 'bg-green-500' },
    { id: 'japanese', label: 'Japanese', color: 'bg-red-500' },
    { id: 'mexican', label: 'Mexican', color: 'bg-orange-500' },
    { id: 'american', label: 'American', color: 'bg-blue-500' },
    { id: 'indian', label: 'Indian', color: 'bg-yellow-500' },
    { id: 'seafood', label: 'Seafood', color: 'bg-cyan-500' },
  ];

  const filteredRestaurants = activeFilter === 'all' 
    ? restaurants 
    : restaurants.filter(r => r.cuisine.toLowerCase() === activeFilter);

  // Sort restaurants by local ranking score for display
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => b.localRanking.score - a.localRanking.score);

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black mb-2">Discover</h1>
        <p className="text-gray-600">Find amazing restaurants near you</p>
      </div>

      {/* View Toggle */}
      <div className="flex bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-1 mb-4">
        <button
          onClick={() => setViewMode('map')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
            viewMode === 'map'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          <Map className="w-4 h-4" />
          <span>Map</span>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
            viewMode === 'list'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          <List className="w-4 h-4" />
          <span>List</span>
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Filter className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-600">Filter by cuisine</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === filter.id
                  ? `${filter.color || 'bg-indigo-500'} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {viewMode === 'map' ? (
        <MapView 
          restaurants={filteredRestaurants} 
          onRestaurantSelect={onRestaurantSelect}
        />
      ) : (
        <>
          {/* Local Favorites Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <h2 className="text-lg font-bold text-black">Local Favorites</h2>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-blue-700">Ranked by Local Experts</span>
              </div>
            </div>
            <div className="space-y-4">
              {sortedRestaurants.slice(0, 3).map((restaurant, index) => (
                <div key={restaurant.id} className="relative">
                  {/* Local Ranking Badge */}
                  <div className={`absolute -top-2 -left-2 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                    index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                    'bg-gradient-to-r from-orange-400 to-red-500'
                  }`}>
                    {index + 1}
                  </div>
                  <RestaurantCard
                    restaurant={restaurant}
                    onClick={() => onRestaurantSelect(restaurant)}
                    featured
                    localRanking={restaurant.localRanking}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* All Restaurants */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4">All Restaurants</h2>
            <div className="space-y-4">
              {sortedRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={() => onRestaurantSelect(restaurant)}
                  localRanking={restaurant.localRanking}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExploreView;