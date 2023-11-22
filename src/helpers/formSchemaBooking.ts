import { Regex } from 'configs/constants';
import yup from 'configs/yupGlobal';

import { validateRequireNumberType } from 'utils/getValidateMessage';
import { object } from 'yup';

const test = {
  quantity: yup
    .number()
    .label('Trẻ em')
    .typeError(validateRequireNumberType)

    .test({
      test: (value) => (value === 0 || value ? value >= 0 || false : false),
      message: 'Trẻ em ít nhất là 0 người',
    }),
};

export const formSchemaBooking = yup.object({
  numberPeople: yup
    .number()
    .label('Number People')
    .required()
    .test({
      test: (value) => (value >= 1 ? true : false),
      message: ({ label }) => label + 'at least 1 person',
    }),
  bookingDate: yup
    .string()
    .label('Booking Date')
    .required()
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
      message: ({ label }) => `${label} must be from today to the next 3 days`,
    }),
  bookingTime: yup
    .string()
    .label('Booking Time')
    .required()
    .test({
      test: (value) => {
        const currentTime = new Date();
        const bookingTime = new Date().setHours(
          parseInt(value.split(':')[0]),
          parseInt(value.split(':')[1]),
          0,
          0,
        );

        return (bookingTime > currentTime.setHours(9, 0, 0, 0) &&
          bookingTime < currentTime.setHours(14, 30, 0, 0)) ||
          (bookingTime > currentTime.setHours(17, 0, 0, 0) &&
            bookingTime < currentTime.setHours(23, 0, 0, 0))
          ? true
          : false;
      },
      message: ({ label }) =>
        `${label} invalid Morning: 9h -> 14h30 \n Tonight: 5h -> 11h30 `,
    }),
  author: yup.string().label('Name').required(),
  phoneNumber: yup
    .string()
    .label('Phone Number')
    .required()
    .matches(Regex.PHONENUMBER, ({ label }) => label + ' ' + 'not match'),
  buffetMenu: yup
    .string()
    .label('Buffet Menu')
    .required()
    .test({
      test: (value) => (value !== 'default' ? true : false),
    }),
  bookingsForChildren: yup.array().of(object().shape(test)),
});
