import { GetGenderDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-gender.dto';
import { GetRoleDTO } from './get-roles.dto';

export interface GetAdminsByRoleDTO {
  position: string;
}

export interface GetAdminDTO {
  id: string;
  username: string;
  fullName: string;
  dateBirth: Date | null;
  gender: GetGenderDTO | null;
  email: string | null;
  phone: string | null;
  nationality: string | null;
  roles: GetRoleDTO[];
}

export interface GetAdminListDTO {
  adminList: GetAdminDTO[];
  page: number;
  previousPage: number | null;
  nextPage: number | null;
  totalPages: number;
}
