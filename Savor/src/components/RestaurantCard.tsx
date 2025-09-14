import React, { useState } from 'react';
import { Star, MapPin, Clock, Heart, Share2, Award, Shield } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: any;
  onClick: () => void;
  featured?: boolean;
  localRanking?: {
    score: number;
    localExpertReviews: number;
    establishedLocalReviews: number;
    newLocalReviews: number;
    totalLocalReviews: number;
    topLocalReviewer: {
      name: string;
      badge: string;
      yearsLocal: string;
    };
  };
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick, featured, localRanking }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Share functionality would go here
  };

  const getScoreColor = (score: number) => {
    if (score >= 9.0) return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
    if (score >= 8.5) return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
    if (score >= 8.0) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
    return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Local Expert': return 'bg-gradient-to-r from-purple-600 to-purple-700 text-white';
      case 'Neighborhood Legend': return 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white';
      case 'Established Local': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'New Local': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all hover:shadow-md ${featured ? 'ring-2 ring-black' : ''}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-40 object-cover"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
          restaurant.isOpen 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {restaurant.isOpen ? 'Open' : 'Closed'}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <button
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-black line-clamp-1">{restaurant.name}</h3>
          <span className="text-lg font-bold text-black">{restaurant.priceRange}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-black">{restaurant.rating}</span>
            <span className="text-sm text-gray-500">({restaurant.reviews})</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{restaurant.location}</span>
          </div>
        </div>

        {/* Local Ranking Section */}
        {localRanking && (
          <div className="mb-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-black">Local Score</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-sm font-bold ${getScoreColor(localRanking.score)}`}>
                {localRanking.score}/10
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-blue-500" />
                <span className="text-gray-600">{localRanking.totalLocalReviews} local reviews</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-500">Top:</span>
                <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(localRanking.topLocalReviewer.badge)}`}>
                  {localRanking.topLocalReviewer.badge}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {restaurant.tags.slice(0, 2).map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {restaurant.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{restaurant.tags.length - 2}
            </span>
          )}
        </div>

        {/* Hours */}
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{restaurant.isOpen ? 'Open until 10:00 PM' : 'Opens at 11:00 AM'}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;