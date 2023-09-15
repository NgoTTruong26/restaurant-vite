import clsx from 'clsx';
import FieldOutline from 'components/field/FieldOutline';
import { GetGenderDTO } from 'modules/user/components/accountInformation/dto/get-gender.dto';
import { UseFormReturn } from 'react-hook-form';
import { IInputDataCreateAdmin } from '.';
import Days from 'components/Date/Days';
import Months from 'components/Date/Months';
import Years from 'components/Date/Years';

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
      <div
        className={clsx(
          'text-lg pb-8 font-medium',
          'max-sm:text-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl',
        )}
      >
        Thêm Admin
      </div>

      <div className="[&>div]:mb-8">
        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
        >
          <div>Username</div>
          <div className="col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="username"
              type="text"
              label
              innerText="Username"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('username')}
              error={methods.formState.errors.username}
              {...methods.register('username')}
            />
          </div>
        </div>
        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
        >
          <div>Password</div>
          <div className="col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="password"
              type="password"
              label
              innerText="Password"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('password')}
              error={methods.formState.errors.password}
              {...methods.register('password')}
            />
          </div>
        </div>
        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
        >
          <div>Repeat Password</div>
          <div className="col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="repeat_password"
              type="password"
              label
              innerText="Repeat Password"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('repeat_password')}
              error={methods.formState.errors.repeat_password}
              {...methods.register('repeat_password')}
            />
          </div>
        </div>
        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
        >
          <div>Họ & Tên</div>
          <div className="col-span-3 flex-1 flex-col items-center">
            <FieldOutline
              id="fullName"
              type="text"
              label
              innerText="Họ & Tên"
              inputClassName="focus:border-[#e11b1e] max-w-[250px]"
              watch={methods.watch('fullName')}
              error={methods.formState.errors.fullName}
              {...methods.register('fullName')}
            />
          </div>
        </div>

        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
        >
          <div className="max-sm:w-full ">Ngày sinh</div>
          <div
            className={clsx(
              'col-span-3 flex w-full flex-1 gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 ',
            )}
          >
            <Days
              month={methods.watch('month') || undefined}
              year={methods.watch('year') || undefined}
              error={methods.formState.errors.day}
              {...methods.register('day')}
            />
            <Months
              error={methods.formState.errors.month}
              {...methods.register('month')}
            />
            <Years
              error={methods.formState.errors.year}
              {...methods.register('year')}
            />
          </div>
        </div>
        <div
          className={clsx('grid grid-cols-4 gap-7 mb-4', 'max-sm:grid-cols-1')}
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
                    id="gender"
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
