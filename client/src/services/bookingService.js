import axiosInstance from '../api/axiosInstance';

export const bookingService = {
  getMyBookings: async () => {
    const { data } = await axiosInstance.get('/bookings/mybookings');
    return data.data;
  },

  create: async (bookingData) => {
    const { data } = await axiosInstance.post('/bookings', bookingData);
    return data;
  },

  verify: async (verifyData) => {
    const { data } = await axiosInstance.post('/bookings/verify', verifyData);
    return data;
  },

  cancel: async (id) => {
    const { data } = await axiosInstance.put(`/bookings/${id}/cancel`);
    return data.data;
  },

  getAll: async () => {
    const { data } = await axiosInstance.get('/bookings');
    return data.data;
  }
};
