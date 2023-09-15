import { GetBookingDTO } from 'modules/home/components/bookings/dto/booking.dto';

export interface GetBookingAuthDTO extends GetBookingDTO {
  user: {
    id: string;
    fullName: string;
  } | null;
}
