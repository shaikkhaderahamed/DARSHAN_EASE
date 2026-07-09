export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className = '' 
}) => {
  return (
    <div className={`text-center bg-white p-12 rounded-2xl border border-gray-100 shadow-sm ${className}`}>
      {Icon && <Icon className="w-12 h-12 mx-auto text-gray-300 mb-4" />}
      <h3 className="text-xl font-medium text-gray-700">{title}</h3>
      {description && <p className="mt-2 text-gray-500">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
