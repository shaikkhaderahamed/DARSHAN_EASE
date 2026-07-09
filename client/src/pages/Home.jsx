import { HomeHero } from '../components/home/HomeHero';
import { FeaturedTemples } from '../components/home/FeaturedTemples';
import { WhyChooseUs } from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <div className="min-h-screen bg-ivory-100 font-sans text-darkbrown-900">
      <HomeHero />
      <FeaturedTemples />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
