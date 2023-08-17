import { GetBookingDTO } from "modules/home/components/bookings/dto/booking.dto";

export interface GetBookingAuthDTO extends GetBookingDTO {
  user: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
}
