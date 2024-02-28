import { GetGenderDTO } from './get-gender.dto';

export interface GetUserProfileDTO {
  id: string;
  username: string;
  avatarUrl: string | null;
  fullName: string;
  dateBirth: Date | null;
  gender: GetGenderDTO | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
}
