export const Section = ({ children, className = '' }) => {
  return (
    <div className={`section mt-12 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};
