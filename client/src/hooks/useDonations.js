import { useQuery } from '@tanstack/react-query';
import { donationService } from '../services/donationService';

export const useDonations = () => {
  return useQuery({
    queryKey: ['adminDonations'],
    queryFn: donationService.getAll
  });
};
