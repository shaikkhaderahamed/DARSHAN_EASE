import { ArrowLeft } from '@/icons';

export const StepHeader = ({ step, onBack, title, stepCount = 3 }) => {
  return (
    <div className="step-header">
      <button onClick={onBack} className="back-btn">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </button>
      <span className="badge">
        Step {step} of {stepCount}
      </span>
    </div>
  );
};
