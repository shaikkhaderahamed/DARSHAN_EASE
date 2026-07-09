import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { DevoteeCard } from './DevoteeCard';
import { StepHeader } from './StepHeader';

export const StepDevotees = ({ 
  selectedSlot, 
  noOfPersons, 
  devotees, 
  updateDevoteeCount, 
  handleDevoteeChange, 
  isValid,
  nextStep, 
  prevStep 
}) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="devotees-form">
      <StepHeader step={2} onBack={prevStep} />

      <div className="field-group">
        <label className="label">Number of Devotees (Max 5)</label>
        <select 
          value={noOfPersons}
          onChange={(e) => updateDevoteeCount(Number(e.target.value), selectedSlot?.availableSeats)}
          className="input"
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n} disabled={n > selectedSlot?.availableSeats}>{n}</option>
          ))}
        </select>
      </div>

      <div className="list">
        {devotees.map((devotee, index) => (
          <DevoteeCard 
            key={index} 
            devotee={devotee} 
            index={index} 
            onChange={handleDevoteeChange} 
          />
        ))}
      </div>

      <Button disabled={!isValid} onClick={nextStep} className="w-full mt-6">
        Review Booking
      </Button>
    </motion.div>
  );
};
