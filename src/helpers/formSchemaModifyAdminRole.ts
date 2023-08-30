import yup from "configs/yupGlobal";

export const formSchemaModifyAdminRole = yup.object({
  modifyAdminRole: yup.array<any, string>(),
});
