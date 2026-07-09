import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminService } from '../services/adminService';
import { toast } from 'react-toastify';

export const useAdminStats = () => {
  return useQuery({
    queryKey: ['adminStats'],
    queryFn: adminService.getStats
  });
};

export const useAdminUsers = () => {
  return useQuery({
    queryKey: ['adminUsers'],
    queryFn: adminService.getUsers
  });
};

export const useUpdateUserRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, role }) => adminService.updateUserRole(id, role),
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
      toast.success('User role updated');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to update role');
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: adminService.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
      toast.success('User deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete user');
    }
  });
};
