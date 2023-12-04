import { GetGenderDTO } from '../components/accountInformation/dto/get-gender.dto';

export interface IUpdateProfileDTO {
  id: string;
  fullName: string;
  day?: string | null;
  month?: string | null;
  year?: string | null;
  gender: GetGenderDTO | null;
  nationality: string | null;
}
