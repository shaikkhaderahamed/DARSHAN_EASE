import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../icons';
import { TempleCard } from '@/components/temple/TempleCard';
import { Loader } from '../ui/Loader';
import { EmptyState } from '../ui/EmptyState';
import axiosInstance from '../../api/axiosInstance';
import { Button } from '../ui/Button';

const fetchFeaturedTemples = async () => {
  const { data } = await axiosInstance.get('/temples?limit=6');
  return data.data ?? [];
};

export const FeaturedTemples = () => {
  const { data: temples, isLoading, error } = useQuery({
    queryKey: ['temples', 'featured'],
    queryFn: fetchFeaturedTemples
  });

  return (
    <section className="featured-section">
      <div className="header">
        <h2 className="title">Sacred Destinations</h2>
        <div className="divider"></div>
        <p className="subtitle">
          Discover India's most revered temples and book your spiritual journey today.
        </p>
      </div>

      {isLoading ? (
        <div className="loading"><Loader size={16} /></div>
      ) : error ? (
        <EmptyState 
          title="Failed to load temples" 
          description="Please try again later." 
          icon={ArrowRight} 
        />
      ) : temples?.length === 0 ? (
        <EmptyState 
          title="No temples found" 
          description="We couldn't find any temples to display." 
        />
      ) : (
        <div className="grid">
          {temples.map((temple, index) => (
            <TempleCard key={temple._id} temple={temple} idx={index} />
          ))}
        </div>
      )}
      
      <div className="footer">
        <Link to="/temples" className="btn-secondary inline-flex items-center">
          View All Temples <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};
