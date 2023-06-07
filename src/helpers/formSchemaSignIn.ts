import yup from "configs/yupGlobal";
import {
  validateRequireBooleanType,
  validateRequireMessage,
} from "utils/getValidateMessage";

export const formSchemaSignIn = yup.object({
  username: yup
    .string()
    .label("Tên đăng nhập")
    .required(validateRequireMessage),
  reqPassword: yup.string().label("Mật khẩu").required(validateRequireMessage),
  remember_account: yup
    .boolean()
    .label("Nhớ mật khẩu")
    .typeError(validateRequireBooleanType),
});
