import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

// Interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      if (parsedUser && parsedUser.token) {
        config.headers.Authorization = `Bearer ${parsedUser.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
