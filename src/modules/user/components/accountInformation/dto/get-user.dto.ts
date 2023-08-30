import { GetGenderDTO } from "./get-gender.dto";

export interface GetUserProfileDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  dateBirth: Date | null;
  gender: GetGenderDTO | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
}

export interface GetPreviewProfileDTO {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string | null;
}
