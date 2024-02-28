import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiClient } from 'configs/axiosInterceptor';
import { toast } from 'react-hot-toast';
import { EBookingStatus } from '../dto/booking-status.dto';
import { GetBookingListResponse } from '../dto/get-booking-auth.dto';

interface GetBookingTableListRequest {
  take?: number;
  page: number;
  cancellation?: boolean;
  status?: keyof typeof EBookingStatus;
}

export async function getBookingTableList({
  take = 5,
  page,
  status,
  cancellation,
}: GetBookingTableListRequest) {
  try {
    return (
      await apiClient.get<IAxiosResponse<GetBookingListResponse>>(
        `/booking-table/get-bookings-table`,
        {
          params: {
            page,
            take,
            status,
            cancellation,
          },
        },
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
  status,
  cancellation,
}: GetBookingTableListRequest) {
  return useQuery({
    queryKey: [`get_bookings_table`, take, page, status, cancellation],
    queryFn: async () =>
      getBookingTableList({ take, page, status, cancellation }),
  });
}
