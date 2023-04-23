import yup from "configs/yupGlobal";
import {
  validateNotMatchMessage,
  validateRequireAccept,
  validateRequireMessage,
} from "utils/getValidateMessage";

export const formSchemaSignUp = yup.object({
  last_name: yup.string().label("Họ").required(validateRequireMessage),
  first_name: yup.string().label("Tên").required(validateRequireMessage),
  username: yup
    .string()
    .label("Tên đăng nhập")
    .required(validateRequireMessage),

  password: yup
    .string()
    .label("Mật khẩu")
    .required(validateRequireMessage)
    .min(6, ({ label, min }) => `${label} chứa ít nhất ${min} kí tự `),
  repeat_password: yup
    .string()
    .label("Mật khẩu nhập lại")
    .required(validateRequireMessage)
    .oneOf([yup.ref("password")], validateNotMatchMessage),
  agree_terms_priacvy: yup
    .boolean()
    .label("Điều khoản & Dịch vụ của nhà hàng")
    .oneOf([true], validateRequireAccept),
});
