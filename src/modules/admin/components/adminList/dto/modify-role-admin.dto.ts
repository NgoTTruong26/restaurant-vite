export interface IUpdateRolesAdminDTO {
  adminId: string;
  roles: (string | false)[];
  removeRoles?: string[];
}

export interface IModifyAdminRoleDTO {
  modifyAdminRole: any[];
}
