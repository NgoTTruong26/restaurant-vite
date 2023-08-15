import { GetBuffetMenuDTO } from "modules/menu/dto/get-dish.dto";
import { GetBookingStatusDTO } from "./booking-status.dto";
import { GetChildrenCategoryDTO } from "modules/home/components/bookings/dto/get-children-category.dto";

export interface GetVATDTO {
  id: string;
  tax: number;
}

export interface GetInvoicePriceDTO {
  id: string;
  price: number;
  VAT: GetVATDTO;
}

export interface GetBookingsForChildren {
  id: string;
  childrenCategory: GetChildrenCategoryDTO;
  quantity: number;
}

export interface GetBookingDTO {
  id: string;
  phoneNumber: string;
  author: string;
  bookingTime: string;
  bookingDate: string;
  numberPeople: number;
  note?: string | null;
  buffetMenu: GetBuffetMenuDTO;
  bookingsForChildren: GetBookingsForChildren[];
  bookingStatus: GetBookingStatusDTO;
  invoicePrice: GetInvoicePriceDTO;
  cancellation: boolean;
}
