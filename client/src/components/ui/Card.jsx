export const Card = ({ children, className = '', hover = false, ...props }) => {
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div className={`card ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const StatsCard = ({ children, className = '', ...props }) => {
  return (
    <div className={`stats-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
};
