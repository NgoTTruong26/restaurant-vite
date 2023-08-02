import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetBookingWithStatusDTO } from "../dto/get-booking.dto";

interface Props {
  getBooking: string;
}

export default function useGetBooking({ getBooking }: Props) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_booking_${getBooking}`],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBookingWithStatusDTO>>(
        `/booking-table?get_booking=${getBooking}`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });
  return { status, data, error, isFetching, isLoading };
}
