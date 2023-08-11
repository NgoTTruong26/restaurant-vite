import { IInputProfileDTO } from "../components/Profile";

export interface DataUpdateDTO
  extends Omit<IInputProfileDTO, "day" | "month" | "year"> {
  id: string;
  dateBirth?: Date;
}
