import React from 'react';
import { MapPin, Star, MessageCircle, Heart, Award } from 'lucide-react';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  location: string;
  yearsLocal: number;
  reviewCount: number;
  averageRating: number;
  localScore: number;
  localStatus: 'New Local' | 'Established Local' | 'Local Expert' | 'Neighborhood Legend';
  recentActivity: string;
}

const FriendsView: React.FC = () => {
  const friends: Friend[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Mission District',
      yearsLocal: 12,
      reviewCount: 247,
      averageRating: 4.3,
      localScore: 9.2,
      localStatus: 'Neighborhood Legend',
      recentActivity: 'Reviewed Tartine Bakery'
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Castro District',
      yearsLocal: 7,
      reviewCount: 156,
      averageRating: 4.1,
      localScore: 8.8,
      localStatus: 'Local Expert',
      recentActivity: 'Loved Zuni Café'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'North Beach',
      yearsLocal: 4,
      reviewCount: 89,
      averageRating: 4.0,
      localScore: 8.3,
      localStatus: 'Established Local',
      recentActivity: 'Discovered Tony\'s Little Star'
    },
    {
      id: '4',
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'SOMA',
      yearsLocal: 2,
      reviewCount: 34,
      averageRating: 3.9,
      localScore: 7.8,
      localStatus: 'New Local',
      recentActivity: 'Tried Benu Restaurant'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Neighborhood Legend': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Local Expert': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Established Local': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'New Local': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 9.0) return 'text-green-600';
    if (score >= 8.5) return 'text-blue-600';
    if (score >= 8.0) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getStatusDotColor = (score: number) => {
    if (score >= 9.0) return 'bg-green-500';
    if (score >= 8.5) return 'bg-blue-500';
    if (score >= 8.0) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black mb-2">Local Food Friends</h1>
        <p className="text-gray-600">Connect with trusted local food experts in your area</p>
      </div>

      <div className="grid gap-4">
        {friends.map((friend) => (
          <div key={friend.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              {/* Profile Picture with Status Indicator */}
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${getStatusDotColor(friend.localScore)}`}></div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-black">{friend.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{friend.location} • {friend.yearsLocal} years local</span>
                    </div>
                  </div>
                  
                  {/* Local Score */}
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getScoreColor(friend.localScore)}`}>
                      {friend.localScore}
                    </div>
                    <div className="text-xs text-gray-500">Local Score</div>
                  </div>
                </div>

                {/* Local Status Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(friend.localStatus)}`}>
                    <Award className="w-3 h-3 mr-1" />
                    {friend.localStatus}
                  </span>
                </div>

                {/* Stats Row */}
                <div className="flex items-center space-x-6 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="font-medium text-black">{friend.reviewCount}</span>
                    <span className="ml-1">reviews</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-black">{friend.averageRating}</span>
                    <span className="ml-1">avg rating</span>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="text-sm text-gray-600">
                  <span className="text-gray-500">Recent: </span>
                  <span className="text-black font-medium">{friend.recentActivity}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Friend Button */}
      <div className="mt-6 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Find More Local Food Friends
        </button>
      </div>
    </div>
  );
};

export default FriendsView;