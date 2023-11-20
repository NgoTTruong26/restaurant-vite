import { GetGenderDTO } from './get-gender.dto';

export interface GetUserProfileDTO {
  id: string;
  username: string;
  fullName: string;
  dateBirth: Date | null;
  gender: GetGenderDTO | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
}

export interface GetPreviewProfileDTO {
  id: string;
  fullName: string;
}
