export const Badge = ({ children, variant = 'primary', className = '', icon: Icon }) => {
  const baseClass = `badge badge-${variant}`;
  
  return (
    <span className={`${baseClass} ${className}`}>
      {Icon && <Icon className="w-3 h-3 mr-1" />}
      {children}
    </span>
  );
};
