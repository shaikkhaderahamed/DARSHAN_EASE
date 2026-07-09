import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templeApi } from '../api/templeApi';
import { toast } from 'react-toastify';

export const useTemples = (queryStr = '') => {
  return useQuery({
    queryKey: ['temples', queryStr],
    queryFn: () => templeApi.getAll(queryStr),
    keepPreviousData: true
  });
};

export const useTemple = (id) => {
  return useQuery({
    queryKey: ['temple', id],
    queryFn: () => templeApi.getById(id),
    enabled: !!id
  });
};

export const useCreateTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple created successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to create temple');
    }
  });
};

export const useUpdateTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => templeApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple updated successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to update temple');
    }
  });
};

export const useDeleteTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete temple');
    }
  });
};

export const useToggleTempleStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.toggleStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      queryClient.invalidateQueries(['adminTemples']);
      toast.success('Temple status updated');
    },
    onError: () => toast.error('Failed to update status')
  });
};
