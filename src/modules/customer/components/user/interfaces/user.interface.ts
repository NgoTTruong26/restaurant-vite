import { GetGenderDTO } from '../components/accountInformation/dto/get-gender.dto';

export interface IUser {
  id: string;
  username: string;
  fullName: string;
  dateBirth: Date | null;
  gender: GetGenderDTO | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}
