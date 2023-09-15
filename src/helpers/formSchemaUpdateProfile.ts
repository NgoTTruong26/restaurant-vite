import yup from 'configs/yupGlobal';
import { validateRequireMessage } from 'utils/getValidateMessage';

export const formSchemaUpdateProfile = yup.object({
  fullName: yup.string().label('Họ và Tên').required(validateRequireMessage),
  day: yup.string().label('Ngày'),
  month: yup.string().label('Tháng'),
  year: yup.string().label('Năm'),
  gender: yup.string().label('Giới tính'),
  nationality: yup.string().label('Quốc tịch'),
});
