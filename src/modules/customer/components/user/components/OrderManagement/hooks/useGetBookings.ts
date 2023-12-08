import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import useCheckAuth from 'modules/customer/components/auth/hooks/useCheckAuth';
import { toast } from 'react-hot-toast';
import { EBookingStatus } from '../dto/booking-status.dto';
import { GetBookingListResponse } from '../dto/get-booking-auth.dto';

interface GetBookingTableListRequest {
  take?: number;
  page: number;
  bookingStatus?: keyof typeof EBookingStatus;
}

export async function getBookingTableList(
  { take = 5, page, bookingStatus }: GetBookingTableListRequest,
  signOut: () => void,
) {
  try {
    return (
      await ApiClient(signOut).get<IAxiosResponse<GetBookingListResponse>>(
        `/booking-table/get-bookings-table?page=${page}&take=${take}${
          bookingStatus ? '&status=' + bookingStatus : ''
        }`,
      )
    ).data;
  } catch (error) {
    toast.error("Can't get booking table list");
    return null;
  }
}

export default function useGetBookingTableList({
  take = 5,
  page,
  bookingStatus,
}: GetBookingTableListRequest) {
  const { signOut } = useCheckAuth();

  return useQuery({
    queryKey: [`get_bookings_table`, take, page, bookingStatus],
    queryFn: async () =>
      getBookingTableList({ take, page, bookingStatus }, signOut),
  });
}
