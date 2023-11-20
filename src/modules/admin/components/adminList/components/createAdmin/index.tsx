import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Regex } from 'configs/constants';

import LoadingProfile from 'components/Profile/LoadingProfile';
import LoadingSecurity from 'components/Profile/LoadingSecurity';
import useGetGenders from 'modules/customer/components/user/components/accountInformation/hooks/useGetGenders';
import { useFieldArray, useForm } from 'react-hook-form';
import { GrFormClose } from 'react-icons/gr';
import {
  validateInvalidMessage,
  validateNotMatchMessage,
  validateRequireMessage,
} from 'utils/getValidateMessage';
import * as yup from 'yup';
import useCreateAdmin from '../hooks/useCreateAdmin';
import AdminProfile from './AdminProfile';
import AdminSecurityAndConnectivity from './AdminSecurityAndConnectivity';

interface Props {
  handleCloseShowCreateAdmin: () => void;
}

export interface IInputArrayRole {
  roleId: string;
  position: string;
}

export interface IInputDataCreateAdmin {
  username: string;
  password: string;
  repeat_password: string;
  fullName: string;
  day?: string | null;
  month?: string | null;
  year?: string | null;
  gender?: string | null;
  roles: IInputArrayRole[];
  nationality?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
}

const CreateAdmin: React.FC<Props> = ({ handleCloseShowCreateAdmin }) => {
  const genders = useGetGenders();

  const { handleSubmit, methods, roles } = useFormCreateAdmin();

  const { mutate } = useCreateAdmin();

  const onSubmit = (data: IInputDataCreateAdmin) => {
    mutate(data);
  };

  return (
    <div className="z-50 absolute top-0 left-0 bottom-0 flex justify-center items-center w-full bg-[#00000042] px-10">
      <div
        className={clsx(
          ' flex flex-col bg-[#ffffff] shadow-xl rounded-2xl p-5 max-w-4xl w-full overflow-x-auto max-h-[75vh] min-h-[600px]',
          'animate-opacity opacity-100 transition-all',
        )}
      >
        {genders.status === 'loading' ? (
          <>
            <div
              className={clsx('w-full flex [&>div]:py-4', 'max-md:flex-col')}
            >
              <LoadingProfile />
              <div
                className={clsx(
                  'my-4 border-l-2 border-[#ebebf0]',
                  'max-md:border-l-0 max-md:border-t-2',
                )}
              ></div>
              <LoadingSecurity />
            </div>
          </>
        ) : genders.data ? (
          <>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={clsx('w-full flex [&>div]:py-4', 'max-md:flex-col')}
            >
              <AdminProfile genders={genders.data} methods={methods} />
              <div
                className={clsx(
                  'my-4 border-l-2 border-[#ebebf0]',
                  'max-md:my-0 max-md:border-l-0 max-md:border-t-2',
                )}
              ></div>
              <AdminSecurityAndConnectivity methods={methods} roles={roles} />
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

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
  gender: yup.string().nullable().label('Giới tính'),
  roles: yup
    .array<any, IInputArrayRole>()
    .label('Chức vụ')
    .nullable()
    .required(validateRequireMessage),
  nationality: yup.string().label('Quốc tịch'),
  phoneNumber: yup
    .string()
    .label('Số điện thoại')
    .test({
      test: (value) => {
        if (value && !Regex.PHONENUMBER.test(value)) {
          return false;
        }

        return true;
      },
      message: validateInvalidMessage,
    }),

  email: yup.string().label('Email').nullable(),
});

function useFormCreateAdmin() {
  const { handleSubmit, ...methods } = useForm<IInputDataCreateAdmin>({
    defaultValues: {
      username: '',
      password: '',
      repeat_password: '',
      fullName: '',
      day: 'default',
      month: 'default',
      year: 'default',
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

  return {
    handleSubmit,
    methods,
    roles,
  };
}

export default CreateAdmin;
