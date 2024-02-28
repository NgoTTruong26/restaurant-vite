export interface GetRoleListRequest {
  page?: string | number;
  limit?: string | number;
  search?: string;
}

export interface GetRoleDTO {
  id: string;
  position: string;
}

export interface GetRoleListDTO {
  roles: GetRoleDTO[];
  total: number;
  page: number;
  previousPage: number | null;
  nextPage: number | null;
  totalPages: number;
}
