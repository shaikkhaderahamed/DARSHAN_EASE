import axiosInstance from '../api/axiosInstance';

export const reviewService = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/reviews');
    return data.data;
  },

  getByTemple: async (templeId) => {
    const { data } = await axiosInstance.get(`/reviews/temple/${templeId}`);
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/reviews/${id}`);
    return data;
  }
};
