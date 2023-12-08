import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import useCheckAuth from 'modules/customer/components/auth/hooks/useCheckAuth';
import { toast } from 'react-hot-toast';
import { CreateBookingDTO, GetBookingDTO } from '../../../dto/booking.dto';

async function createBooking(inputCreateBooking: CreateBookingDTO) {
  const { signOut } = useCheckAuth();

  try {
    return (
      await ApiClient(signOut).post<IAxiosResponse<GetBookingDTO>>(
        '/booking-table',
        inputCreateBooking,
      )
    ).data;
  } catch (error) {
    toast.error("Can't create booking table");
  }
}

export default function useCreateBooking() {
  return useMutation({
    mutationFn: createBooking,
  });
}
