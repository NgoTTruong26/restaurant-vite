import { GetBookingDTO } from "modules/home/components/bookings/dto/booking.dto";
import { GetBookingStatusDTO } from "modules/user/components/OrderManagement/dto/booking-status.dto";

export interface GetBookingWithStatusDTO extends GetBookingDTO {
  allBookingStatus: GetBookingStatusDTO[];
}
