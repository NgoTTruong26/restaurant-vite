import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetBookingStatusDTO } from "../dto/booking-status.dto";

export default function useGetBookingStatus() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_status`],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBookingStatusDTO[]>>(
        `/booking-table/get-booking-status`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });
  return { status, data, error, isFetching, isLoading };
}
