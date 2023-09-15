import clsx from 'clsx';
import * as yup from 'yup';
import AdminProfile from './AdminProfile';
import AdminSecurityAndConnectivity from './AdminSecurityAndConnectivity';
import { GrFormClose } from 'react-icons/gr';
import useGetGenders from 'modules/user/components/accountInformation/hooks/useGetGenders';
import {
  validateInvalidMessage,
  validateNotMatchMessage,
  validateRequireMessage,
} from 'utils/getValidateMessage';
import { Regex } from 'configs/constants';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  handleCloseShowCreateAdmin: () => void;
}

interface IInputArrayRole {
  roleId: string;
  position: string;
}

export interface IInputDataCreateAdmin {
  username: string;
  password: string;
  repeat_password: string;
  fullName: string;
  day?: string;
  month?: string;
  year?: string;
  gender?: string;
  roles: IInputArrayRole[];
  nationality?: string;
  phoneNumber?: string;
  email?: string;
}

const CreateAdmin: React.FC<Props> = ({ handleCloseShowCreateAdmin }) => {
  const formSchemaCreateAdmin = yup.object().shape({
    username: yup
      .string()
      .label('Tên đăng nhập')
      .required(validateRequireMessage),

    password: yup
      .string()
      .label('Mật khẩu')
      .required(validateRequireMessage)
      .min(6, ({ label, min }) => `${label} chứa ít nhất ${min} kí tự `),
    repeat_password: yup
      .string()
      .label('Mật khẩu nhập lại')
      .required(validateRequireMessage)
      .oneOf([yup.ref('password')], validateNotMatchMessage),
    fullName: yup.string().label('Họ và Tên').required(validateRequireMessage),
    day: yup.string().label('Ngày'),
    month: yup.string().label('Tháng'),
    year: yup.string().label('Năm'),
    gender: yup.string().label('Giới tính'),
    roles: yup
      .array<any, string>()
      .label('Chức vụ')
      .required(validateRequireMessage),
    nationality: yup.string().label('Quốc tịch'),
    phoneNumber: yup
      .string()
      .label('Số điện thoại')
      .required(validateRequireMessage)
      .matches(Regex.PHONENUMBER, validateInvalidMessage),
    email: yup.string().label('Email'),
  });

  const { handleSubmit, ...methods } = useForm<IInputDataCreateAdmin>({
    defaultValues: {
      username: '',
      password: '',
      repeat_password: '',
      fullName: '',
      day: 'default',
      month: 'default',
      year: 'default',
      gender: '',
      roles: [],
      nationality: 'default',
      phoneNumber: '',
      email: '',
    },
    resolver: yupResolver(formSchemaCreateAdmin),
  });

  const roles = useFieldArray({
    control: methods.control,
    name: 'roles',
  });

  const genders = useGetGenders();

  const onSubmit = (data: IInputDataCreateAdmin) => {
    console.log(data);
  };

  return (
    <div className="z-30 absolute top-0 left-0 bottom-0 flex justify-center items-center w-full bg-[#00000042] px-10">
      <div
        className={clsx(
          ' flex flex-col bg-[#ffffff] shadow-xl rounded-2xl p-5 max-w-4xl w-full max-h-[800px] overflow-x-auto',
          'animate-opacity opacity-100 transition-all',
        )}
      >
        <span className="sticky top-0 flex justify-end float-right">
          <GrFormClose
            className="hover:cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleCloseShowCreateAdmin();
            }}
            size={25}
          />
        </span>
        {genders.data && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx('w-full flex [&>div]:py-4', 'max-md:flex-col')}
          >
            <AdminProfile genders={genders.data} methods={methods} />
            <div
              className={clsx(
                'my-4 border-l-2 border-[#ebebf0]',
                'max-md:border-l-0 max-md:border-t-2',
              )}
            ></div>
            <AdminSecurityAndConnectivity methods={methods} roles={roles} />
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateAdmin;
