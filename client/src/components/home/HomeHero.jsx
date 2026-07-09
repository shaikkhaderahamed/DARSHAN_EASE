import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search } from '../../icons';
import { Button } from '../ui/Button';
import { templeImages } from '@/assets/temples';

export const HomeHero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Randomly select a hero image from our local assets
  const heroImage = useMemo(() => {
    const images = Object.values(templeImages);
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/temples?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="home-hero">
      <div className="image-container">
        <img 
          src={heroImage} 
          alt="Temple architecture" 
          className="image object-cover"
          loading="lazy"
        />
        <div className="overlay" />
      </div>

      <div className="content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Divine Darshan, <br />
          <span className="title-highlight">Simplified.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="subtitle"
        >
          Experience the spiritual heritage of India. Book priority darshan, manage donations, and explore ancient temples with unmatched ease.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSearch}
          className="home-search"
        >
          <div className="input-wrapper">
            <Search className="icon" />
            <input 
              type="text" 
              placeholder="Search temples by name or city..." 
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" className="btn">
            Find Temples
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
