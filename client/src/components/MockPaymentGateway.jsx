import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, CreditCard, Shield } from '../icons';
import { Button } from './ui/Button';

const MockPaymentGateway = ({ amount, onPaymentSuccess, onPaymentCancel }) => {
  const [status, setStatus] = useState('IDLE'); // IDLE, PROCESSING, SUCCESS, FAILED
  const [progress, setProgress] = useState(0);

  const handlePay = () => setStatus('PROCESSING');

  const hasFired = React.useRef(false);

  useEffect(() => {
    if (status === 'PROCESSING') {
      const interval = setInterval(() => {
        setProgress(prev => {
          const nextProgress = Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
          if (nextProgress >= 100) {
            clearInterval(interval);
            setStatus('SUCCESS');
            if (!hasFired.current) {
              hasFired.current = true;
              setTimeout(() => {
                onPaymentSuccess({
                  razorpay_payment_id: 'pay_mock_' + Math.random().toString(36).substr(2, 9),
                  razorpay_signature: 'sig_mock_' + Math.random().toString(36).substr(2, 9)
                });
              }, 1000);
            }
            return 100;
          }
          return nextProgress;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [status, onPaymentSuccess]);

  return (
    <div className="payment-modal-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="payment-modal"
      >
        <div className="payment-modal-header">
          <Shield className="payment-modal-icon" />
          <h2 className="payment-modal-title">DarshanEase Secure Pay</h2>
          <p className="payment-modal-subtitle">Test Environment</p>
        </div>

        <div className="payment-modal-body">
          <div className="payment-modal-amount-row">
            <span className="payment-modal-amount-label">Amount to Pay</span>
            <span className="payment-modal-amount-value">₹{amount}</span>
          </div>

          <AnimatePresence mode="wait">
            {status === 'IDLE' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="payment-modal-idle">
                <div className="payment-modal-card">
                  <div className="payment-modal-card-icon-wrapper">
                    <CreditCard className="payment-modal-card-icon" />
                  </div>
                  <div className="payment-modal-card-info">
                    <p className="payment-modal-card-number">•••• •••• •••• 4242</p>
                    <p className="payment-modal-card-type">Mock Card</p>
                  </div>
                </div>

                <div className="payment-modal-actions">
                  <Button variant="outline" onClick={onPaymentCancel} className="payment-modal-btn-cancel">
                    Cancel
                  </Button>
                  <Button onClick={handlePay} className="payment-modal-btn-pay">
                    Pay ₹{amount}
                  </Button>
                </div>
              </motion.div>
            )}

            {status === 'PROCESSING' && (
              <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="payment-modal-processing">
                <div className="payment-modal-progress-wrapper">
                  <svg className="payment-modal-progress-svg" viewBox="0 0 100 100">
                    <circle className="payment-modal-progress-bg" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
                    <circle className="payment-modal-progress-fg progress-ring__circle" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * progress) / 100} style={{ transition: 'stroke-dashoffset 0.3s' }}></circle>
                  </svg>
                  <div className="payment-modal-progress-text">
                    {progress}%
                  </div>
                </div>
                <h3 className="payment-modal-processing-title">Processing Payment...</h3>
                <p className="payment-modal-processing-desc">Please do not close this window.</p>
              </motion.div>
            )}

            {status === 'SUCCESS' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="payment-modal-success">
                <div className="payment-modal-success-icon-wrapper">
                  <CheckCircle className="payment-modal-success-icon" />
                </div>
                <h3 className="payment-modal-success-title">Payment Successful!</h3>
                <p className="payment-modal-success-desc">Redirecting to confirmation...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MockPaymentGateway;
