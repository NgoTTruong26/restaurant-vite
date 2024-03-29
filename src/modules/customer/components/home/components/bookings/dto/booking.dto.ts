import { GetBuffetMenuDTO } from 'modules/customer/components/menu/dto/get-dish.dto';
import { GetBookingStatusDTO } from 'modules/customer/components/user/components/OrderManagement/dto/booking-status.dto';
import { GetChildrenCategoryDTO } from './get-children-category.dto';

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
  buffetMenu: GetBuffetMenuDTO;
  phoneNumber: string;
  author: string;
  bookingTime: string;
  bookingDate: string;
  numberPeople: number;
  note?: string;
  bookingsForChildren: GetBookingsForChildren[];
  bookingStatus: GetBookingStatusDTO;
  invoicePrice: GetInvoicePriceDTO;
  cancellation: boolean;
}

export interface CreateBookingsForChildren {
  childrenCategoryId: string;
  childrenCategory: string;
  deals: number;
  quantity: number;
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
