export const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-ivory-100 p-4">
      {children}
    </div>
  );
};
