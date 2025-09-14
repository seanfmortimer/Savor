import React, { useState } from 'react';
import { Settings, MapPin, Calendar, Camera, Edit } from 'lucide-react';

const ProfileView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Bella Vista Italian',
      likes: 24,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Sakura Sushi',
      likes: 42,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Green Bowl Cafe',
      likes: 18,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Taco Libre',
      likes: 33,
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Spice Route',
      likes: 27,
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400',
      restaurant: 'Coastal Breeze',
      likes: 51,
    },
  ];

  const favoriteRestaurants = [
    {
      name: 'Bella Vista Italian',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
    },
    {
      name: 'Sakura Sushi',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
    },
    {
      name: 'The Garden Bistro',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.7,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sarah Chen</h1>
                <p className="text-gray-600">@sarahc</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Food enthusiast 🍽️ | Always on the hunt for the best local eats | 
              Coffee addict ☕ | Sharing my culinary adventures with you!
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined March 2023</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">87</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">1.2k</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">324</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">42</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-100">
          <nav className="flex">
            {['posts', 'favorites', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {userPosts.map((post) => (
                <div key={post.id} className="relative group cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.restaurant}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="font-semibold">{post.restaurant}</div>
                      <div className="text-sm">❤️ {post.likes}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRestaurants.map((restaurant, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                  <div className="text-sm text-gray-600">⭐ {restaurant.rating}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">📝</div>
              <p className="text-gray-600">Your reviews will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;