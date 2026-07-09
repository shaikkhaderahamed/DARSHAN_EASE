export const ContentLayout = ({ children }) => {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-3 gap-12">
      {children}
    </div>
  );
};
