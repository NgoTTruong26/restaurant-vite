import { Regex } from "config/constants";
import yup from "config/yupGlobal";

import {
  validateInvalidMessage,
  validateRequireMessage,
  validateRequireNumberType,
} from "utils/getValidateMessage";
import { MessageParams } from "yup";

export const formSchemaBooking = yup.object({
  numberPeople: yup
    .number()
    .label("Số người")
    .typeError(validateRequireNumberType)
    .required(validateRequireMessage)

    .test({
      test: (value) => (value >= 1 ? true : false),
      message: "Số người ít nhất là 1 người",
    }),
  date: yup
    .string()
    .label("Ngày đặt bàn")
    .required(validateRequireMessage)
    .test({
      test: (value) => {
        const currentDate = new Date();
        const bookingDate = new Date(value);

        return bookingDate.setHours(0, 0, 0, 0) >=
          currentDate.setHours(0, 0, 0, 0) &&
          bookingDate.setHours(0, 0, 0, 0) <=
            currentDate.setDate(currentDate.getDate() + 3)
          ? true
          : false;
      },
      message: ({ label }: MessageParams) =>
        `${label} phải là từ ngày hôm nay đến 3 ngày gần nhất`,
    }),
  time: yup
    .string()
    .label("Giờ đặt bàn")
    .required(validateRequireMessage)
    .test({
      test: (value) => {
        const currentTime = new Date();
        const bookingTime = new Date().setHours(
          parseInt(value.split(":")[0]),
          parseInt(value.split(":")[1]),
          0,
          0
        );
        console.log(currentTime + "-------" + new Date(bookingTime));

        return (bookingTime > currentTime.setHours(9, 0, 0, 0) &&
          bookingTime < currentTime.setHours(14, 30, 0, 0)) ||
          (bookingTime > currentTime.setHours(17, 0, 0, 0) &&
            bookingTime < currentTime.setHours(23, 0, 0, 0))
          ? true
          : false;
      },
      message: ({ label }: MessageParams) =>
        `${label} không hợp lệ Sáng: 9h -> 14h30 Tối: 5h -> 11h30 `,
    }),
  name: yup.string().label("Tên").required(validateRequireMessage),
  phoneNumber: yup
    .string()
    .label("Số điện thoại")
    .required(validateRequireMessage)
    .matches(Regex.PHONENUMBER, validateInvalidMessage),
});
