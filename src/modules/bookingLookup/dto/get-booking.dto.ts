import { GetBookingDTO } from "modules/home/components/bookings/dto/booking.dto";
import { GetBookingStatusDTO } from "modules/home/components/bookings/dto/get-booking-status.dto";

export interface GetBookingWithStatusDTO extends GetBookingDTO {
  allBookingStatus: GetBookingStatusDTO[];
}
