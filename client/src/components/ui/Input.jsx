export const Input = ({ 
  label, 
  id, 
  error, 
  icon: Icon,
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input 
          id={id}
          className={`input ${Icon ? 'pl-10' : ''} ${error ? 'border-red-300 focus:ring-red-500' : ''} ${className}`}
          {...props} 
        />
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
