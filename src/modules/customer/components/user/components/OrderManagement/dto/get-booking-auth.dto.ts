import { BaseGetList } from 'interfaces/getList';
import { GetBookingDTO } from 'modules/customer/components/home/components/bookings/dto/booking.dto';

export interface GetBookingListResponse extends BaseGetList {
  data: GetBookingDTO[];
}
