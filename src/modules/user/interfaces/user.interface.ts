import { EGender } from "../constant";

export interface IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  dateBirth: string | null;
  gender: EGender | null;
  age: number | null;
  email: string | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}
