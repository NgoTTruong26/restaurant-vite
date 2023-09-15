export interface IRole {
  roleId: string;
}

export interface IUpdateRolesAdminDTO {
  adminId: string;
  roles: IRole[];
  removeRoles?: string[];
}

export interface IInputModifyAdminRole {
  modifyAdminRole: IRole[];
}
