import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { EBookingStatus } from '../dto/booking-status.dto';
import { GetBookingListResponse } from '../dto/get-booking-auth.dto';

interface GetBookingTableListRequest {
  take?: number;
  page: number;
  bookingStatus?: keyof typeof EBookingStatus;
}

export async function getBookingTableList({
  take = 5,
  page,
  bookingStatus,
}: GetBookingTableListRequest) {
  return (
    await ApiClient(() => {}).get<IAxiosResponse<GetBookingListResponse>>(
      `/booking-table/get-bookings-table?page=${page}&take=${take}${
        bookingStatus ? '&status=' + bookingStatus : ''
      }`,
    )
  ).data;
}

export default function useGetBookingTableList({
  take = 5,
  page,
  bookingStatus,
}: GetBookingTableListRequest) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_bookings_table`, take, page, bookingStatus],
    queryFn: async () => getBookingTableList({ take, page, bookingStatus }),
  });
  return { status, data, error, isFetching, isLoading };
}
