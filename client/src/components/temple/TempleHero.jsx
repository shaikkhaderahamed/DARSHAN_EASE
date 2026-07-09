import { Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from '@/icons';
import { templeImages } from '@/assets/temples';

export const TempleHero = ({ temple }) => {
  const imageSrc = templeImages[temple?.name] || templeImages['Tirumala Venkateswara Temple'];

  return (
    <div className="hero">
      <img 
        src={imageSrc} 
        alt={temple.name}
        className="image object-cover"
        loading="lazy"
      />
      <div className="overlay"></div>
      <div className="content">
        <Link to="/temples" className="back-link">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Temples
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="category">
            {temple.category || 'Pilgrimage'}
          </span>
          <div className="flex items-center text-gold-400 text-sm font-medium">
            <Star className="w-4 h-4 mr-1 fill-gold-400" /> {temple.ratings} ({temple.reviewsCount} reviews)
          </div>
        </div>
        <h1 className="title">{temple.name}</h1>
        <p className="location">
          <MapPin className="w-5 h-5 mr-2 text-saffron-500" />
          {temple.address}, {temple.city}, {temple.state}
        </p>
      </div>
    </div>
  );
};
