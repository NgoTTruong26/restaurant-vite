import yup from 'configs/yupGlobal';

export const formSchemaSignIn = yup.object({
  username: yup.string().label('Username').required(),
  reqPassword: yup.string().label('Password').required(),
  remember_account: yup.boolean().label('Remember password'),
});
