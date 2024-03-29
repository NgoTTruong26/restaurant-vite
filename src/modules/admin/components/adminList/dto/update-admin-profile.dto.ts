import { GetGenderDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-gender.dto';
import { IInputAdminProfileDTO } from '../components/adminDetails/AdminProfile';

export interface IUpdateAdminProfileDTO {
  id: string;
  fullName: string;
  day: string;
  month: string;
  year: string;
  gender: GetGenderDTO | null;
  nationality: string | null;
}

export interface DataUpdateAdminDTO
  extends Omit<IInputAdminProfileDTO, 'day' | 'month' | 'year'> {
  id: string;
  dateBirth?: Date;
}

export interface ChangePasswordByIdDTO {
  id: string;
  newPassword: string;
  repeatNewPassword: string;
}
