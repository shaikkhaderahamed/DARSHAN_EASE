import { motion } from 'framer-motion';
import { templeImages } from '@/assets/temples';

export const WhyChooseUs = () => {
  const features = [
    { title: "Guaranteed Slots", desc: "Real-time sync with temple authorities for assured darshan." },
    { title: "Secure Donations", desc: "Transparent, blockchain-verified donation tracking." },
    { title: "AI Temple Assistant", desc: "Get instant answers about history, timings, and dress codes." }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title">Elevating your spiritual journey.</h2>
          <p className="subtitle">
            DarshanEase brings centuries-old traditions into the digital age. We ensure your focus remains on devotion, not logistics.
          </p>
          
          <ul className="list">
            {features.map((feature, idx) => (
              <li key={idx} className="item">
                <div className="icon-box">
                  <div className="icon" />
                </div>
                <div className="text-content">
                  <h4 className="item-title">{feature.title}</h4>
                  <p className="item-desc">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="image-wrapper"
        >
          <img 
            src={templeImages['Brihadeeswara Temple']} 
            alt="Devotion" 
            className="image object-cover"
            loading="lazy"
          />
          <div className="image-overlay" />
          <div className="testimonial">
            <p className="testimonial-quote">"DarshanEase transformed our Tirupati visit. Zero queues, complete peace of mind."</p>
            <p className="testimonial-author">— Rajesh & Family</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
