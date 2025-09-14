import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Heart, 
  Share2,
  Camera,
  MessageCircle,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';
import ReviewCard from './ReviewCard';

interface RestaurantDetailProps {
  restaurant: any;
  onBack: () => void;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  // Mock local ranking data for the selected restaurant
  const localRanking = {
    score: 9.2,
    rank: 1,
    totalRestaurants: 156,
    localExpertReviews: 12,
    establishedLocalReviews: 8,
    newLocalReviews: 15,
    totalLocalReviews: 35,
    topLocalReviewer: {
      name: 'Sarah Chen',
      badge: 'Local Expert',
      yearsLocal: '5+ years',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    recentLocalReviews: [
      {
        reviewer: 'Mike Rodriguez',
        badge: 'Established Local',
        rating: 5,
        snippet: 'Best pasta in the neighborhood!'
      },
      {
        reviewer: 'Emma Thompson',
        badge: 'New Local',
        rating: 4,
        snippet: 'Great atmosphere and service.'
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: {
        name: 'Jessica Kim',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      },
      rating: 5,
      date: '3 days ago',
      content: 'Absolutely amazing experience! The pasta was perfectly cooked and the service was exceptional. Will definitely be coming back.',
      images: [
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
      helpful: 12,
    },
    {
      id: 2,
      user: {
        name: 'David Chen',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      },
      rating: 4,
      date: '1 week ago',
      content: 'Great atmosphere and delicious food. The tiramisu was the highlight of our meal. Only minor complaint is that it can get quite noisy during peak hours.',
      helpful: 8,
    },
    {
      id: 3,
      user: {
        name: 'Maria Santos',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      },
      rating: 5,
      date: '2 weeks ago',
      content: 'Perfect date night spot! The wine selection is excellent and the staff really knows their stuff. Highly recommend the seafood risotto.',
      helpful: 15,
    },
  ];

  const photos = [
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Local Expert': return 'bg-black text-white';
      case 'Neighborhood Legend': return 'bg-gray-800 text-white';
      case 'Established Local': return 'bg-gray-600 text-white';
      case 'New Local': return 'bg-gray-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="relative">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="opacity-90">({restaurant.reviews} reviews)</span>
                </div>
                <span className="opacity-90">{restaurant.cuisine}</span>
                <span className="font-bold text-white">{restaurant.priceRange}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                  isLiked 
                    ? 'bg-black text-white' 
                    : 'bg-white/80 text-gray-700 hover:bg-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Local Ranking Banner */}
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black">#{localRanking.rank} Local Favorite</h3>
                  <p className="text-sm text-gray-600">Ranked by {localRanking.totalLocalReviews} local residents</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-black">{localRanking.score}/10</div>
                <div className="text-sm text-gray-600">Local Score</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-black mb-3">Contact & Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>123 Main Street, Downtown</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>www.restaurant.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Open until 10:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {restaurant.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-100">
            <nav className="flex">
              {['overview', 'local-ranking', 'reviews', 'photos'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {tab === 'local-ranking' ? 'Local Ranking' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-bold text-black mb-4">About This Restaurant</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience authentic Italian cuisine in the heart of downtown. Our family-owned restaurant 
                  has been serving traditional recipes passed down through generations since 1985. From our 
                  handmade pasta to our wood-fired pizzas, every dish is crafted with love and the finest 
                  imported ingredients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-black mb-1">4.8</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-black mb-1">{restaurant.reviews}</div>
                    <div className="text-sm text-gray-600">Total Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-black mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years in Business</div>
                  </div>
                </div>

                <h4 className="font-semibold text-black mb-3">Popular Dishes</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Margherita Pizza', 'Carbonara', 'Tiramisu', 'Caesar Salad'].map((dish, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-700">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'local-ranking' && (
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-bold text-black">Local Community Ranking</h3>
                </div>

                {/* Ranking Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">#{localRanking.rank}</div>
                    <div className="text-sm text-gray-600">out of {localRanking.totalRestaurants} restaurants</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{localRanking.score}</div>
                    <div className="text-sm text-gray-600">Local Expert Score</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{localRanking.totalLocalReviews}</div>
                    <div className="text-sm text-gray-600">Local Reviews</div>
                  </div>
                </div>

                {/* Review Breakdown */}
                <div className="mb-8">
                  <h4 className="font-semibold text-black mb-4">Local Review Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="font-medium text-black">Local Expert Reviews</span>
                      </div>
                      <span className="font-bold text-black">{localRanking.localExpertReviews}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-gray-800">Established Local Reviews</span>
                      </div>
                      <span className="font-bold text-gray-800">{localRanking.establishedLocalReviews}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-orange-500" />
                        <span className="font-medium text-gray-700">New Local Reviews</span>
                      </div>
                      <span className="font-bold text-gray-700">{localRanking.newLocalReviews}</span>
                    </div>
                  </div>
                </div>

                {/* Top Local Reviewer */}
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-4">Top Local Reviewer</h4>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <img
                        src={localRanking.topLocalReviewer.avatar}
                        alt={localRanking.topLocalReviewer.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h5 className="font-semibold text-black">{localRanking.topLocalReviewer.name}</h5>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(localRanking.topLocalReviewer.badge)}`}>
                            {localRanking.topLocalReviewer.badge}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{localRanking.topLocalReviewer.yearsLocal} in the area</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Local Reviews */}
                <div>
                  <h4 className="font-semibold text-black mb-4">Recent Local Reviews</h4>
                  <div className="space-y-3">
                    {localRanking.recentLocalReviews.map((review, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-black">{review.reviewer}</span>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(review.badge)}`}>
                              {review.badge}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{review.snippet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-black">Reviews</h3>
                  <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Write Review</span>
                  </button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-black">Photos</h3>
                  <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Camera className="w-4 h-4" />
                    <span>Add Photo</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt=""
                      className="w-full h-48 object-cover rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;