import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Star, MapPin } from 'lucide-react';

interface PostCardProps {
  post: any;
  onRestaurantClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onRestaurantClick }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* User Header */}
      <div className="p-4 flex items-center space-x-3">
        <div className="relative">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-black">{post.user.name}</h3>
          </div>
          <p className="text-sm text-gray-500">{post.user.username} • {post.timestamp}</p>
        </div>
      </div>

      {/* Restaurant Info */}
      <div 
        className="mx-4 mb-4 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={onRestaurantClick}
      >
        <div className="flex items-center space-x-3">
          <img
            src={post.restaurant.image}
            alt={post.restaurant.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-black">{post.restaurant.name}</h4>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600">{post.restaurant.cuisine}</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{post.restaurant.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-3 h-3" />
                <span>{post.restaurant.location}</span>
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-black">{post.restaurant.priceRange}</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 mb-4">
        <p className="text-black leading-relaxed">{post.content}</p>
      </div>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`px-4 mb-4 ${post.images.length > 1 ? 'grid grid-cols-2 gap-2' : ''}`}>
          {post.images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 transition-colors ${
                liked ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{post.likes + (liked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="text-gray-600 hover:text-black transition-colors">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;