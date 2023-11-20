import yup from 'configs/yupGlobal';
import { validateRequireMessage } from 'utils/getValidateMessage';

export const formSchemaBookingLookup = yup.object({
  idBooking: yup.string().label('Mã đặt bàn').required(validateRequireMessage),
});
