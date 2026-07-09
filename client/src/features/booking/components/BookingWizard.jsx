import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { useDevotees } from '../hooks/useDevotees';
import { useBooking } from '../hooks/useBooking';

import { StepSlots } from './StepSlots';
import { StepDevotees } from './StepDevotees';
import { StepReview } from './StepReview';
import { StepSuccess } from './StepSuccess';

export const BookingWizard = ({ templeId, slots, isSlotsLoading }) => {
  const { user } = useContext(AuthContext);
  const wizard = useBookingWizard(templeId);
  const devoteeState = useDevotees();
  const { bookTemple, isBooking, bookingResult } = useBooking(templeId);

  const [showPayment, setShowPayment] = useState(false);
  const [pendingPayload, setPendingPayload] = useState(null);

  const handleBook = () => {
    if (!user) return toast.error('Please login to book Darshan');
    if (!wizard.selectedSlot) return toast.error('Please select a slot');
    if (!devoteeState.isValid) return toast.error('Please fill all details');

    const totalAmount = wizard.selectedSlot.ticketPrice * devoteeState.noOfPersons || 0;
    const payload = {
      templeId,
      slotId: wizard.selectedSlot._id,
      noOfPersons: devoteeState.noOfPersons,
      devoteeDetails: devoteeState.devotees,
      totalAmount
    };

    if (totalAmount > 0) {
      setPendingPayload(payload);
      setShowPayment(true);
    } else {
      bookTemple(payload).then(() => wizard.goToStep(4)).catch(() => {});
    }
  };

  const handlePaymentSuccess = (paymentDetails) => {
    setShowPayment(false);
    bookTemple({ ...pendingPayload, ...paymentDetails })
      .then(() => wizard.goToStep(4))
      .catch(() => {});
  };

  const steps = {
    1: <StepSlots slots={slots} isSlotsLoading={isSlotsLoading} {...wizard} />,
    2: <StepDevotees {...devoteeState} {...wizard} />,
    3: <StepReview 
          {...wizard} 
          {...devoteeState} 
          handleBook={handleBook}
          isBooking={isBooking}
          showPayment={showPayment}
          setShowPayment={setShowPayment}
          handlePaymentSuccess={handlePaymentSuccess}
        />,
    4: <StepSuccess bookingResult={bookingResult} />
  };

  return (
    <div className="booking">
      <div className="strip" />
      <h3 className="title mb-6">Book Darshan</h3>
      
      <AnimatePresence mode="wait">
        {steps[wizard.step]}
      </AnimatePresence>
    </div>
  );
};
