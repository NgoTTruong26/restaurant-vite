import { useMutation } from "@tanstack/react-query";
import { CreateBookingDTO, GetBookingDTO } from "../../../dto/booking.dto";
import { IAxiosResponse, api } from "configs/api";

export default function useCreateBooking() {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN
  );

  return useMutation((data: CreateBookingDTO) =>
    api.post<IAxiosResponse<GetBookingDTO>>("/booking-table", data, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    })
  );
}
