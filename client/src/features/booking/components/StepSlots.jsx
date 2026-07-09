import { motion } from 'framer-motion';
import { Calendar } from '@/icons';
import { Loader } from '@/components/ui/Loader';
import { Button } from '@/components/ui/Button';
import { SlotCard } from './SlotCard';

export const StepSlots = ({ slots, isSlotsLoading, selectedSlot, setSelectedSlot, nextStep }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="slots-step">
      <p className="title">
        <Calendar className="slots-step-icon" /> Select Date & Time
      </p>
      
      {isSlotsLoading ? (
        <Loader size={8} />
      ) : slots?.length > 0 ? (
        <div className="slots-step-list">
          {slots.map(slot => (
            <SlotCard 
              key={slot._id} 
              slot={slot} 
              selectedSlot={selectedSlot} 
              onSelect={setSelectedSlot} 
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          No Darshan Slots Available
        </div>
      )}

      <Button disabled={!selectedSlot} onClick={nextStep} className="slots-step-btn">
        Continue
      </Button>
    </motion.div>
  );
};
