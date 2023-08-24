import { GetRoleDTO } from "./get-roles.dto";

export interface GetAdminsByRoleDTO {
  position: string;
}

export interface GetAdminDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  roles: {
    role: GetRoleDTO;
  }[];
}

export interface GetAdminListDTO {
  adminList: GetAdminDTO[];
  page: number;
  previousPage: number | null;
  nextPage: number | null;
  totalPages: number;
  total: number;
}
