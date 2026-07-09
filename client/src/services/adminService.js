import axiosInstance from '../api/axiosInstance';

export const adminService = {
  getStats: async () => {
    const { data } = await axiosInstance.get('/admin/stats');
    return data.data;
  },

  getUsers: async () => {
    const { data } = await axiosInstance.get('/admin/users');
    return data.data;
  },

  updateUserRole: async (id, role) => {
    const { data } = await axiosInstance.put(`/admin/users/${id}/role`, { role });
    return data;
  },

  deleteUser: async (id) => {
    const { data } = await axiosInstance.delete(`/admin/users/${id}`);
    return data;
  }
};
