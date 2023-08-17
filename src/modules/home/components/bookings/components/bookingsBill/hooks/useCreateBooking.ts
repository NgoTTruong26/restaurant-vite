import { useMutation } from "@tanstack/react-query";
import { CreateBookingDTO, GetBookingDTO } from "../../../dto/booking.dto";
import { IAxiosResponse, api } from "configs/api";
import { toast } from "react-hot-toast";

export default function useCreateBooking<T>() {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN
  );

  return useMutation(async (inputCreateBooking: CreateBookingDTO) => {
    const data = await toast.promise(
      api.post<IAxiosResponse<T>>("/booking-table", inputCreateBooking, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      }),
      {
        loading: "Loading",
        success: "Create Booking Table Success",
        error: "Create Booking Table failed",
      }
    );

    return data.data;
  });
}
