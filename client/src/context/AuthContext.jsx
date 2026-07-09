import { createContext, useState, useEffect } from 'react';
import axiosInstance from '@/api/axiosInstance';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        try {
          const { data } = await axiosInstance.get('/auth/profile');
          setUser(data.data);
          localStorage.setItem('userInfo', JSON.stringify(data.data));
        } catch (error) {
          console.error(error);
          localStorage.removeItem('userInfo');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data.data));
      setUser(data.data);
      toast.success('Logged in successfully!');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await axiosInstance.post('/auth/register', { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data.data));
      setUser(data.data);
      toast.success('Registered successfully!');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    toast.info('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
