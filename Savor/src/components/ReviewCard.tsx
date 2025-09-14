import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface ReviewCardProps {
  review: any;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-start space-x-4">
        <img
          src={review.user.avatar}
          alt={review.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-black">{review.user.name}</h4>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-black text-black'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-3 leading-relaxed">{review.content}</p>
          
          {review.images && review.images.length > 0 && (
            <div className="flex space-x-3 mb-3">
              {review.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsHelpful(!isHelpful)}
              className={`flex items-center space-x-1 text-sm transition-colors ${
                isHelpful
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${isHelpful ? 'fill-current' : ''}`} />
              <span>Helpful ({review.helpful + (isHelpful ? 1 : 0)})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;