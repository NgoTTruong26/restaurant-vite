import { GetBuffetMenuDTO } from "modules/menu/dto/get-dish.dto";
import { GetChildrenCategoryDTO } from "./get-children-category.dto";
import { GetBookingStatusDTO } from "modules/user/components/OrderManagement/dto/booking-status.dto";

interface CreateBookingsForChildren {
  childrenCategoryId: string;
  childrenCategory: string;
  deals: number;
  quantity: number;
}

interface GetBookingsForChildren {
  id: "clkpj9kej0003vv8s0jjekl3d";
  quantity: 3;
  childrenCategory: GetChildrenCategoryDTO;
}

export interface CreateBookingDTO {
  buffetMenu: string;
  phoneNumber: string;
  userId?: string;
  author: string;
  bookingTime: string;
  bookingDate: string;
  numberPeople: number;
  note?: string;
  bookingsForChildren: CreateBookingsForChildren[];
}

export interface GetBookingDTO {
  id: string;
  buffetMenu: GetBuffetMenuDTO;
  phoneNumber: string;
  author: string;
  bookingTime: string;
  bookingDate: string;
  numberPeople: number;
  note?: string;
  bookingsForChildren: GetBookingsForChildren[];
  bookingStatus: GetBookingStatusDTO;
}
