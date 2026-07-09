import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { StepHeader } from './StepHeader';
import MockPaymentGateway from '@/components/MockPaymentGateway';

export const StepReview = ({ 
  selectedSlot, 
  noOfPersons, 
  prevStep, 
  handleBook, 
  isBooking, 
  showPayment, 
  setShowPayment,
  handlePaymentSuccess 
}) => {
  const totalAmount = selectedSlot.ticketPrice * noOfPersons;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <StepHeader step={3} onBack={prevStep} />

      <div className="summary">
        <h4 className="title">Booking Summary</h4>
        <div className="list">
          <div className="row">
            <span className="label">Date</span>
            <span className="value">{new Date(selectedSlot.date).toLocaleDateString()}</span>
          </div>
          <div className="row">
            <span className="label">Time</span>
            <span className="value">{selectedSlot.startTime}</span>
          </div>
          <div className="row">
            <span className="label">Type</span>
            <span className="value">{selectedSlot.darshanType}</span>
          </div>
          <div className="row">
            <span className="label">Devotees</span>
            <span className="value">{noOfPersons} Persons</span>
          </div>
          <div className="total-row">
            <span className="total-label">Total Amount</span>
            <span className="total-value">
              ₹{totalAmount}
            </span>
          </div>
        </div>
      </div>

      {showPayment && (
        <MockPaymentGateway 
          amount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={() => setShowPayment(false)}
        />
      )}

      <Button 
        onClick={handleBook}
        isLoading={isBooking}
        disabled={showPayment}
        className="w-full"
      >
        Confirm & Pay
      </Button>
    </motion.div>
  );
};
