import axiosInstance from '@/api/axiosInstance';

export const templeApi = {
  getAll: async (queryStr = '') => {
    const { data } = await axiosInstance.get(`/temples?${queryStr}`);
    return data;
  },
  
  getById: async (id) => {
    const { data } = await axiosInstance.get(`/temples/${id}`);
    return data.data;
  },

  create: async (templeData) => {
    const { data } = await axiosInstance.post('/temples', templeData);
    return data.data;
  },

  update: async (id, templeData) => {
    const { data } = await axiosInstance.put(`/temples/${id}`, templeData);
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/temples/${id}`);
    return data;
  },

  toggleStatus: async (id) => {
    const { data } = await axiosInstance.put(`/temples/${id}/toggle`);
    return data;
  }
};
