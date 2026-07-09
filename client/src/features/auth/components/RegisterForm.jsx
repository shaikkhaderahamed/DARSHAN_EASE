import { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await register(name, email, password);
    setLoading(false);
    if (success) {
      navigate('/login');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input 
          label="Full Name" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          placeholder="John Doe"
        />
        <Input 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="devotee@example.com"
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          placeholder="••••••••"
        />
        
        <Button type="submit" className="w-full shadow-lg shadow-saffron-500/30" isLoading={loading}>
          Create Account
        </Button>
      </form>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-saffron-600 font-semibold hover:underline">Log in</Link>
      </p>
    </>
  );
};
