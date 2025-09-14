import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreVertical, Play, Pause, Volume2, VolumeX, User } from 'lucide-react';

const ReelsView: React.FC = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedReels, setLikedReels] = useState<number[]>([]);

  const reels = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        username: '@sarahc',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        isVerified: true,
      },
      restaurant: {
        name: 'Bella Vista Italian',
        location: 'Downtown',
      },
      video: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=700',
      description: 'The most incredible handmade pasta I\'ve ever had! 🍝✨ The chef makes it fresh right in front of you',
      likes: 2847,
      comments: 156,
      shares: 89,
      music: 'Italian Vibes - Acoustic Guitar',
    },
    {
      id: 2,
      user: {
        name: 'Mike Rodriguez',
        username: '@mikerod',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        isVerified: false,
      },
      restaurant: {
        name: 'Sakura Sushi Bar',
        location: 'Midtown',
      },
      video: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400&h=700',
      description: 'Omakase experience that blew my mind 🍣 Every piece was perfection!',
      likes: 1923,
      comments: 234,
      shares: 67,
      music: 'Zen Garden - Peaceful Sounds',
    },
    {
      id: 3,
      user: {
        name: 'Emma Thompson',
        username: '@emmatt',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        isVerified: true,
      },
      restaurant: {
        name: 'Green Bowl Cafe',
        location: 'Westside',
      },
      video: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=700',
      description: 'Healthy never tasted so good! 🥗 This Buddha bowl is my new obsession',
      likes: 3156,
      comments: 298,
      shares: 124,
      music: 'Fresh Vibes - Upbeat Pop',
    },
  ];

  const handleLike = (reelId: number) => {
    setLikedReels(prev => 
      prev.includes(reelId) 
        ? prev.filter(id => id !== reelId)
        : [...prev, reelId]
    );
  };

  const currentReelData = reels[currentReel];

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Main Video Container */}
      <div className="relative w-full h-full">
        {/* Video Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={currentReelData.video}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

        {/* Play/Pause Overlay */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center"
        >
          {!isPlaying && (
            <div className="bg-black/50 rounded-full p-4">
              <Play className="w-12 h-12 text-white fill-current" />
            </div>
          )}
        </button>

        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between text-white z-10">
          <div className="text-lg font-bold">Reels</div>
          <button className="p-2">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-end justify-between">
            {/* Left Content */}
            <div className="flex-1 pr-4">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={currentReelData.user.avatar}
                  alt={currentReelData.user.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{currentReelData.user.username}</span>
                    {currentReelData.user.isVerified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="text-sm opacity-90">
                    {currentReelData.restaurant.name} • {currentReelData.restaurant.location}
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Follow
                </button>
              </div>

              {/* Description */}
              <p className="text-sm mb-2 leading-relaxed">
                {currentReelData.description}
              </p>

              {/* Music */}
              <div className="flex items-center space-x-2 text-xs opacity-90">
                <span>🎵</span>
                <span>{currentReelData.music}</span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col items-center space-y-6">
              {/* Like */}
              <button
                onClick={() => handleLike(currentReelData.id)}
                className="flex flex-col items-center space-y-1"
              >
                <div className={`p-3 rounded-full ${
                  likedReels.includes(currentReelData.id) 
                    ? 'bg-red-500' 
                    : 'bg-black/30 backdrop-blur-sm'
                }`}>
                  <Heart className={`w-6 h-6 ${
                    likedReels.includes(currentReelData.id) 
                      ? 'fill-current text-white' 
                      : 'text-white'
                  }`} />
                </div>
                <span className="text-xs font-medium">
                  {currentReelData.likes + (likedReels.includes(currentReelData.id) ? 1 : 0)}
                </span>
              </button>

              {/* Comment */}
              <button className="flex flex-col items-center space-y-1">
                <div className="p-3 bg-black/30 backdrop-blur-sm rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium">{currentReelData.comments}</span>
              </button>

              {/* Share */}
              <button className="flex flex-col items-center space-y-1">
                <div className="p-3 bg-black/30 backdrop-blur-sm rounded-full">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium">{currentReelData.shares}</span>
              </button>

              {/* Volume */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 bg-black/30 backdrop-blur-sm rounded-full"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Profile */}
              <button className="relative">
                <img
                  src={currentReelData.user.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                  <User className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute top-16 left-0 right-0 px-4">
          <div className="flex space-x-1">
            {reels.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-0.5 rounded-full ${
                  index === currentReel ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Swipe Navigation Areas */}
      <div className="absolute inset-0 flex">
        {/* Previous Reel */}
        <button
          onClick={() => setCurrentReel(Math.max(0, currentReel - 1))}
          className="flex-1 h-full"
          disabled={currentReel === 0}
        />
        {/* Next Reel */}
        <button
          onClick={() => setCurrentReel(Math.min(reels.length - 1, currentReel + 1))}
          className="flex-1 h-full"
          disabled={currentReel === reels.length - 1}
        />
      </div>
    </div>
  );
};

export default ReelsView;