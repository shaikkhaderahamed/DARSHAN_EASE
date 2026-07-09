import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import { toast } from 'react-toastify';

export const useAllReviews = () => {
  return useQuery({
    queryKey: ['adminReviews'],
    queryFn: reviewService.getAll
  });
};

export const useTempleReviews = (templeId) => {
  return useQuery({
    queryKey: ['templeReviews', templeId],
    queryFn: () => reviewService.getByTemple(templeId),
    enabled: !!templeId
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reviewService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminReviews']);
      toast.success('Review deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete review');
    }
  });
};
