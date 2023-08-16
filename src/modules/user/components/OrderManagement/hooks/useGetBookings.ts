import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import { GetBookingDTO } from "../dto/get-booking.dto";
import AxiosInterceptorResponse from "configs/axiosInterceptor";

export default function useGetBookingsTable() {
  const apiInterceptor = AxiosInterceptorResponse(() => {});

  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN
  );

  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_bookings_table_${token}`],
    queryFn: async () => {
      const { data } = await apiInterceptor.get<
        IAxiosResponse<GetBookingDTO[]>
      >(`/auth/get-bookings-table`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });
  return { status, data, error, isFetching, isLoading };
}
