import { useMutation } from '@tanstack/react-query';
import { apiClient } from 'configs/axiosInterceptor';

export interface cancelBookingRequest {
  idBooking: string;
}

export interface cancelBookingResponse {}

export async function CancelBooking({ idBooking }: cancelBookingRequest) {
  await apiClient.put(`/booking-table/cancel-booking/${idBooking}`);
}

export function useCancelBooking() {
  return useMutation({
    mutationFn: CancelBooking,
  });
}
