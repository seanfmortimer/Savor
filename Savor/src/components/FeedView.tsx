import React from 'react';
import PostCard from './PostCard';

interface FeedViewProps {
  onRestaurantSelect: (restaurant: any) => void;
}

const FeedView: React.FC<FeedViewProps> = ({ onRestaurantSelect }) => {
  const feedPosts = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        username: '@sarahc',
      },
      restaurant: {
        name: 'Mama\'s Kitchen',
        cuisine: 'Italian',
        rating: 4.8,
        location: '2.1 miles away',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceRange: '$$',
      },
      content: 'Just discovered this hidden gem! The handmade pasta is incredible and the atmosphere is so cozy. Perfect for date night! 🍝✨',
      images: [
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      likes: 24,
      comments: 8,
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        username: '@mikerod',
      },
      restaurant: {
        name: 'Sakura Sushi',
        cuisine: 'Japanese',
        rating: 4.9,
        location: '1.3 miles away',
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceRange: '$$$',
      },
      content: 'Best sushi in the neighborhood! Fresh fish, amazing presentation, and the chef is a true artist. The omakase is worth every penny.',
      images: [
        'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      likes: 42,
      comments: 15,
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      user: {
        name: 'Emma Thompson',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        username: '@emmatt',
      },
      restaurant: {
        name: 'Green Bowl Cafe',
        cuisine: 'Healthy',
        rating: 4.6,
        location: '0.8 miles away',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceRange: '$',
      },
      content: 'Perfect spot for a healthy lunch! Love their Buddha bowls and fresh juices. The quinoa salad is my new obsession 🥗',
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      likes: 18,
      comments: 5,
      timestamp: '6 hours ago',
    },
  ];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      <div className="space-y-6">
        {feedPosts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onRestaurantClick={() => onRestaurantSelect(post.restaurant)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedView;