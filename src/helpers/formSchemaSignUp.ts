import yup from 'configs/yupGlobal';

export const formSchemaSignUp = yup.object({
  fullName: yup.string().label('Full Name').required(),
  username: yup.string().label('Username').required(),

  password: yup.string().label('Password').required().min(6),
  repeat_password: yup
    .string()
    .label('Repeat password')
    .required()
    .oneOf([yup.ref('password')]),
});
