import yup from "configs/yupGlobal";
import {
  validateNotMatchMessage,
  validateRequireMessage,
} from "utils/getValidateMessage";

export const formSchemaChangePassword = yup.object({
  old_password: yup
    .string()
    .label("Mật khẩu cũ")
    .required(validateRequireMessage)
    .min(6, ({ label, min }) => `${label} chứa ít nhất ${min} kí tự `),
  new_password: yup
    .string()
    .label("Mật khẩu mới")
    .required(validateRequireMessage)
    .min(6, ({ label, min }) => `${label} chứa ít nhất ${min} kí tự `),
  repeat_new_password: yup
    .string()
    .label("Mật khẩu mới nhập lại")
    .required(validateRequireMessage)
    .oneOf([yup.ref("new_password")], validateNotMatchMessage),
});

export const formSchemaChangePasswordAdmin = yup.object({
  new_password: yup
    .string()
    .label("Mật khẩu mới")
    .required(validateRequireMessage)
    .min(6, ({ label, min }) => `${label} chứa ít nhất ${min} kí tự `),
  repeat_new_password: yup
    .string()
    .label("Mật khẩu mới nhập lại")
    .required(validateRequireMessage)
    .oneOf([yup.ref("new_password")], validateNotMatchMessage),
});
