import yup from "configs/yupGlobal";

export const formSchemaDeleteCheckedAdmin = yup.object({
  admins: yup.array<any, string>(),
});
