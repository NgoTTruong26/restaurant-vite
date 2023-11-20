import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { GetBookingAuthDTO } from '../dto/get-booking-auth.dto';

export default function useGetBookingsTable() {
  const apiClient = ApiClient(() => {});

  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN,
  );

  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_bookings_table_${token}`],
    queryFn: async () => {
      const { data } = await apiClient.get<IAxiosResponse<GetBookingAuthDTO[]>>(
        `/auth/get-bookings-table`,
      );

      return data.data;
    },
  });
  return { status, data, error, isFetching, isLoading };
}
