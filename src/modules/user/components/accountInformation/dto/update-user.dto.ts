import { IInputProfileDTO } from "../components/Profile";

export interface DataUpdateDTO
  extends Omit<IInputProfileDTO, "day" | "month" | "year"> {
  id: string;
  dateBirth?: Date;
}

export interface ChangePasswordDTO {
  id: string;
  password: string;
  newPassword: string;
  repeatNewPassword: string;
}
