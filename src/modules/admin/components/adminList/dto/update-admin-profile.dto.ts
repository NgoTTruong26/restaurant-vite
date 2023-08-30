import { IInputAdminProfileDTO } from "../components/adminDetails/AdminProfile";

export interface IUpdateAdminProfileDTO {
  id: string;
  lastname: string;
  firstname: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nationality: string;
}

export interface DataUpdateDTO
  extends Omit<IInputAdminProfileDTO, "day" | "month" | "year"> {
  id: string;
  dateBirth?: Date;
}

export interface ChangePasswordDTO {
  id: string;
  password: string;
  newPassword: string;
  repeatNewPassword: string;
}
