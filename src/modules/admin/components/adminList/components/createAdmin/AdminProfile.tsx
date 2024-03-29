import clsx from 'clsx';
import Days from 'components/Date/Days';
import Months from 'components/Date/Months';
import Years from 'components/Date/Years';
import FieldOutline from 'components/field/FieldOutline';
import { GetGenderDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-gender.dto';
import { UseFormReturn } from 'react-hook-form';
import { IInputDataCreateAdmin } from '.';

interface Props {
  genders: GetGenderDTO[];
  methods: Omit<UseFormReturn<IInputDataCreateAdmin>, 'handleSubmit'>;
}

export interface IInputAdminProfileDTO {
  fullName: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nationality: string;
}
const AdminProfile: React.FC<Props> = ({ genders, methods }) => {
  return (
    <div className="w-[50%] pr-6 pl-4 max-md:w-full">
      <div className={clsx('text-lg pb-8 font-medium')}>Thêm Admin</div>

      <div className="[&>div]:mb-9 max-sm:[&>div]:mb-6">
        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div>Username</div>
          <div className="relative col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="username"
              type="text"
              label
              innerText="Username"
              labelClassName="bg-[#ffffff]"
              errorClassName="absolute top-12 text-xs"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('username')}
              error={methods.formState.errors.username}
              {...methods.register('username')}
            />
          </div>
        </div>
        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div>Password</div>
          <div className="relative col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="password"
              type="password"
              label
              innerText="Password"
              errorClassName="absolute top-12 text-xs"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('password')}
              error={methods.formState.errors.password}
              {...methods.register('password')}
            />
          </div>
        </div>
        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div>Repeat Password</div>
          <div className="relative col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="repeat_password"
              type="password"
              label
              innerText="Repeat Password"
              errorClassName="absolute top-12 text-xs"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('repeat_password')}
              error={methods.formState.errors.repeat_password}
              {...methods.register('repeat_password')}
            />
          </div>
        </div>
        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div>Họ & Tên</div>
          <div className="relative col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="fullName"
              type="text"
              label
              innerText="Họ & Tên"
              errorClassName="absolute top-12 text-xs"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('fullName')}
              error={methods.formState.errors.fullName}
              {...methods.register('fullName')}
            />
          </div>
        </div>

        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div className="max-sm:w-full ">Ngày sinh</div>
          <div
            className={clsx(
              'col-span-3 flex w-full flex-1 gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 ',
              'max-xs:flex-col',
            )}
          >
            <Days
              month={methods.watch('month') || undefined}
              year={methods.watch('year') || undefined}
            />
            <Months />
            <Years />
          </div>
        </div>
        <div
          className={clsx(
            'grid grid-cols-4 items-center gap-7',
            'max-md:!mb-0',
            'max-sm:grid-cols-1 max-sm:gap-3',
          )}
        >
          <div className="max-sm:w-full">Giới tính</div>
          <div
            className={clsx(
              'col-span-3 flex gap-3',
              'max-xs:flex-col max-xs:items-start',
            )}
          >
            {genders.map((val, idx) => (
              <div key={idx} className="form-control">
                <label className="flex gap-3 label cursor-pointer">
                  <input
                    type="radio"
                    id={val.id}
                    value={val.id}
                    className="radio checked:bg-red-500"
                    {...methods.register('gender')}
                  />
                  <span className="label-text capitalize">{val.gender}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
