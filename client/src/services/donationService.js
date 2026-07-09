import axiosInstance from '../api/axiosInstance';

export const donationService = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/admin/donations');
    return data.data;
  }
};
