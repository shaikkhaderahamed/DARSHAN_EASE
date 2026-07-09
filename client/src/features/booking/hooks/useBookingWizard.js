import { useState } from 'react';

export const useBookingWizard = (templeId) => {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  
  const goToStep = (s) => setStep(s);

  return {
    step,
    templeId,
    selectedSlot,
    setSelectedSlot,
    nextStep,
    prevStep,
    goToStep
  };
};
