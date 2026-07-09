import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { bookingService } from '@/services/bookingService';
import { toast } from 'react-toastify';

export const useBooking = (templeId) => {
  const queryClient = useQueryClient();
  const [bookingResult, setBookingResult] = useState(null);

  const bookTempleMutation = useMutation({
    mutationFn: async (payload) => {
      const data = await bookingService.create(payload);
      
      const verifyData = {
        razorpay_order_id: data.orderId,
        razorpay_payment_id: payload.paymentId || 'pay_free_123',
        razorpay_signature: payload.signature || 'sig_free_123',
        bookingId: data.data._id
      };
      
      return bookingService.verify(verifyData);
    },
    onSuccess: (res) => {
      setBookingResult(res.data);
      queryClient.invalidateQueries(['slots', templeId]);
      toast.success('Darshan booked successfully!');
    },
    onError: (err) => {
      toast.error(err.response?.data?.error || 'Booking failed');
    }
  });

  return {
    bookTemple: bookTempleMutation.mutateAsync,
    isBooking: bookTempleMutation.isPending,
    bookingResult
  };
};
