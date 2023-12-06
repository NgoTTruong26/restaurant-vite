import { GetBookingDTO } from '../../home/components/bookings/dto/booking.dto';
import { GetBookingStatusDTO } from '../../user/components/OrderManagement/dto/booking-status.dto';

export interface GetBookingWithStatusDTO extends GetBookingDTO {
  allBookingStatus: GetBookingStatusDTO[];
}
