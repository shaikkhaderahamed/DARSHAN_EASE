import { Star, User } from '@/icons';
import { useTempleReviews } from '@/hooks/useReviews';
import { Loader } from '@/components/ui/Loader';

export const TempleReviews = ({ templeId }) => {
  const { data: reviews, isLoading } = useTempleReviews(templeId);

  if (isLoading) {
    return <Loader size={8} />;
  }

  return (
    <div className="card mt-8">
      <h2 className="title mb-6 flex items-center">
        <Star className="w-6 h-6 mr-3 text-saffron-500 fill-saffron-500" />
        Devotee Reviews
      </h2>

      {reviews?.length > 0 ? (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  <User className="icon" />
                </div>
                <div>
                  <h4 className="font-semibold text-darkbrown-800 text-sm">
                    {review.userId?.name || 'Anonymous Devotee'}
                  </h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          Be the first to review.
        </div>
      )}
    </div>
  );
};
