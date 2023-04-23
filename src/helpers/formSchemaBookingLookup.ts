import { Regex } from "configs/constants";
import yup from "configs/yupGlobal";
import {
  validateInvalidMessage,
  validateRequireMessage,
} from "utils/getValidateMessage";

export const formSchemaBookingLookup = yup.object({
  phoneNumber: yup
    .string()
    .label("Số điện thoại")
    .required(validateRequireMessage)
    .matches(Regex.PHONENUMBER, validateInvalidMessage),
  idBooking: yup.string().label("Mã đặt bàn").required(validateRequireMessage),
});
