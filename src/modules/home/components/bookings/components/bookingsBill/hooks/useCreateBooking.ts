import { useMutation } from "@tanstack/react-query";
import { CreateBookingDTO, GetBookingDTO } from "../../../dto/booking.dto";
import { IAxiosResponse, api } from "configs/api";

export default function useCreateBooking() {
  return useMutation((data: CreateBookingDTO) =>
    api.post<IAxiosResponse<GetBookingDTO>>("/booking-table", data)
  );
}
