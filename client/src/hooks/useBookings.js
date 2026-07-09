import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingService } from '../services/bookingService';
import { toast } from 'react-toastify';

export const useMyBookings = () => {
  return useQuery({
    queryKey: ['myBookings'],
    queryFn: bookingService.getMyBookings
  });
};

export const useAllBookings = () => {
  return useQuery({
    queryKey: ['allBookings'],
    queryFn: bookingService.getAll
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: bookingService.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries(['myBookings']);
      queryClient.invalidateQueries(['allBookings']);
      toast.success('Booking cancelled successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to cancel booking');
    }
  });
};
