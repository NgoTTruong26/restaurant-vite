import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiClient } from 'configs/axiosInterceptor';
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
      await apiClient.get<IAxiosResponse<GetBookingListResponse>>(
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
  return useQuery({
    queryKey: [`get_bookings_table`, take, page, bookingStatus],
    queryFn: async () =>
      getBookingTableList({ take, page, bookingStatus }, () => {}),
  });
}
