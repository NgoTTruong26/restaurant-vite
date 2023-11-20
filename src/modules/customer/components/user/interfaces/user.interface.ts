import { EGender } from '../constant';

export interface IUser {
  id: string;
  username: string;
  fullName: string;
  dateBirth: string | null;
  gender: EGender | null;
  age: number | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}
