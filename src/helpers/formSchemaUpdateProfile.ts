import yup from "configs/yupGlobal";
import { validateRequireMessage } from "utils/getValidateMessage";

export const formSchemaUpdateProfile = yup.object({
  lastname: yup.string().label("Họ").required(validateRequireMessage),
  firstname: yup.string().label("Tên").required(validateRequireMessage),
  day: yup.string().label("Ngày"),
  month: yup.string().label("Tháng"),
  year: yup.string().label("Năm"),
  gender: yup.string().label("Giới tính"),
});
