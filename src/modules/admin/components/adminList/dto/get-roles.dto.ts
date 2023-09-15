export interface GetRoleDTO {
  id: string;
  position: string;
}

export interface GetRoleListDTO {
  roles: GetRoleDTO[];
  total: number;
  totalAdmins: number;
}
