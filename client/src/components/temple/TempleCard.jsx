import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock } from '../../icons';
import { templeImages } from '@/assets/temples';

export const TempleCard = ({ temple, idx = 0 }) => {
  const imageSrc = templeImages[temple.name] || templeImages['Tirumala Venkateswara Temple']; // default fallback to first local image

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="temple-card group"
    >
      <div className="image-wrapper">
        <img 
          src={imageSrc} 
          alt={temple.name} 
          className="image object-cover"
          loading="lazy"
        />
        <div className="rating">
          <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500 mr-1" />
          {temple.ratings || '4.5'} <span className="text-gray-400 text-xs ml-1">({temple.reviewsCount || 0})</span>
        </div>
        <div className="category">
          {temple.categories?.[0] || 'Pilgrimage'}
        </div>
      </div>
      <div className="body">
        <h3 className="name">{temple.name}</h3>
        <div className="city">
          <MapPin className="w-4 h-4 mr-1 text-saffron-500 shrink-0" />
          <span className="truncate">{temple.city}, {temple.state}</span>
        </div>
        <p className="desc">
          {temple.description}
        </p>
        <div className="footer">
          <div className="time">
            <Clock className="w-4 h-4 mr-1 text-gray-400" />
            {temple.openingTime} - {temple.closingTime}
          </div>
          <Link to={`/temples/${temple._id}`} className="btn">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
