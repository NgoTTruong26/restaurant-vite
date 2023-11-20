import { GetBookingStatusDTO } from '../../user/components/OrderManagement/dto/booking-status.dto';
import { GetBookingAuthDTO } from '../../user/components/OrderManagement/dto/get-booking-auth.dto';

export interface GetBookingWithStatusDTO extends GetBookingAuthDTO {
  allBookingStatus: GetBookingStatusDTO[];
}
