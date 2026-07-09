import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { slotService } from '../services/slotService';
import { toast } from 'react-toastify';

export const useTempleSlots = (templeId) => {
  return useQuery({
    queryKey: ['slots', templeId],
    queryFn: () => slotService.getByTempleId(templeId),
    enabled: !!templeId
  });
};

export const useAllSlots = () => {
  return useQuery({
    queryKey: ['adminSlots'],
    queryFn: slotService.getAll
  });
};

export const useCreateSlot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: slotService.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminSlots']);
      queryClient.invalidateQueries(['slots']);
      toast.success('Slot created successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to create slot');
    }
  });
};

export const useDeleteSlot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: slotService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminSlots']);
      queryClient.invalidateQueries(['slots']);
      toast.success('Slot deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete slot');
    }
  });
};
