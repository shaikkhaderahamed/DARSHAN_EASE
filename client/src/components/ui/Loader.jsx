import { Loader2 } from 'lucide-react';

export const Loader = ({ className = '', size = 8 }) => (
  <div className={`flex justify-center items-center py-20 ${className}`}>
    <Loader2 className={`w-${size} h-${size} animate-spin text-saffron-500`} />
  </div>
);

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory-100">
    <Loader2 className="w-12 h-12 animate-spin text-saffron-500" />
  </div>
);
