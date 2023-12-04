import yup from 'configs/yupGlobal';

export const formSchemaUpdateProfile = yup.object({
  fullName: yup.string().label('Full Name'),
  day: yup.string().label('Day'),
  month: yup.string().label('Month'),
  year: yup.string().label('Year'),
  gender: yup.string().label('Gender'),
  nationality: yup.string().label('Nationality'),
});
