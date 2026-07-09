import axiosInstance from '../api/axiosInstance';

export const slotService = {
  getByTempleId: async (templeId) => {
    const { data } = await axiosInstance.get(`/slots/temple/${templeId}`);
    return data.data;
  },

  getAll: async () => {
    const { data } = await axiosInstance.get('/slots');
    return data.data;
  },

  create: async (slotData) => {
    const { data } = await axiosInstance.post('/slots', slotData);
    return data.data;
  },

  update: async (id, slotData) => {
    const { data } = await axiosInstance.put(`/slots/${id}`, slotData);
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/slots/${id}`);
    return data;
  }
};
