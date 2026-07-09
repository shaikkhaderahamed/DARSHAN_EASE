export const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className="card w-full max-w-md p-8 md:p-10 shadow-xl border-none">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-serif font-bold text-darkbrown-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};
