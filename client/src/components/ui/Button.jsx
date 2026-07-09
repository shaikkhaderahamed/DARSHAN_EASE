export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  isLoading,
  ...props 
}) => {
  const baseClass = `btn-${variant}`;
  
  return (
    <button className={`${baseClass} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <div className="w-4 h-4 mr-2 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4 mr-2" />
      ) : null}
      {children}
    </button>
  );
};
