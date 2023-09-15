import clsx from 'clsx';
import FieldOutline from 'components/field/FieldOutline';
import Days from 'components/Date/Days';
import Months from 'components/Date/Months';
import Years from 'components/Date/Years';
import useUpdateAdminProfile from '../hooks/useUpdateAdminProfile';
import { useFormUpdateAdminProfile } from '../hooks/useFormUpdateAdminProfile';
import useGetGenders from 'modules/user/components/accountInformation/hooks/useGetGenders';
import { GetAdminDTO } from '../../dto/get-admins.dto';
import { queryClient } from 'main';

interface Props {
  data?: GetAdminDTO | null;
}

export interface IInputAdminProfileDTO {
  fullName: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nationality: string;
}
const AdminProfile: React.FC<Props> = ({ data }) => {
  const genders = useGetGenders();

  const { formState, methods } = useFormUpdateAdminProfile();

  const { mutate } = useUpdateAdminProfile();

  console.log(methods.watch('fullName'));

  const onSubmit = (input: IInputAdminProfileDTO) => {
    if (data) {
      console.log(input);

      mutate(
        { ...input, id: data.id },
        {
          onSuccess: async (dataRes) => {
            queryClient.setQueryData(
              [`get_profile_admin_${data.id}`],
              dataRes.data,
            );
          },
        },
      );
    }
  };

  return (
    <div className="w-[50%] pr-6 pl-4 max-md:w-full">
      <div
        className={clsx(
          'text-lg pb-8 font-medium',
          'max-sm:text-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl',
        )}
      >
        Thông tin Admin
      </div>
      {genders.data && data && (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <div className={clsx('flex gap-7 mb-4', 'max-sm:flex-col')}>
              <div className="flex justify-center max-sm:bg-gradient-to-b from-[#31b6e7] from-60% to-transparent to-60%">
                <div
                  className={clsx(
                    'flex justify-center h-28 w-28',
                    'max-sm:h-40 max-sm:w-40',
                  )}
                >
                  <img
                    className={clsx(
                      'w-full h-full rounded-full ',
                      'max-sm:p-2 bg-[#ffffff]',
                    )}
                    src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div>
                  <FieldOutline
                    id="fullName"
                    type="text"
                    defaultValue={data.fullName}
                    label
                    innerText="Họ & Tên"
                    inputClassName="focus:border-[#e11b1e] max-w-[350px]"
                    watch={methods.watch('fullName')}
                    error={formState.errors.fullName}
                    {...methods.register('fullName')}
                  />
                </div>
              </div>
            </div>
            <div className="[&>div]:mb-8">
              <div
                className={clsx(
                  'grid grid-cols-4 items-center gap-7 mb-4',
                  'max-sm:grid-cols-1',
                )}
              >
                <div className="max-sm:w-full ">Ngày sinh</div>
                <div
                  className={clsx(
                    'col-span-3 flex w-full flex-1 gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 ',
                  )}
                >
                  <Days
                    defaultValue={
                      data.dateBirth
                        ? new Date(data.dateBirth).getUTCDate()
                        : 'default'
                    }
                    month={
                      methods.watch('month') ||
                      (data.dateBirth
                        ? (
                            new Date(data.dateBirth).getUTCMonth() + 1
                          ).toString()
                        : undefined)
                    }
                    year={
                      methods.watch('year') ||
                      (data.dateBirth
                        ? new Date(data.dateBirth).getUTCFullYear().toString()
                        : undefined)
                    }
                    error={formState.errors.day}
                    {...methods.register('day')}
                  />
                  <Months
                    defaultValue={
                      (data.dateBirth
                        ? new Date(data.dateBirth).getUTCMonth() + 1
                        : methods.watch('month')) || 'default'
                    }
                    error={formState.errors.month}
                    {...methods.register('month')}
                  />
                  <Years
                    defaultValue={
                      (data.dateBirth
                        ? new Date(data.dateBirth).getUTCFullYear()
                        : methods.watch('year')) || 'default'
                    }
                    error={formState.errors.year}
                    {...methods.register('year')}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  'grid grid-cols-4 items-center gap-7 mb-4',
                  'max-sm:grid-cols-1',
                )}
              >
                <div className="max-sm:w-full">Giới tính</div>
                <div
                  className={clsx(
                    'col-span-3 flex gap-3',
                    'max-xs:flex-col max-xs:items-start',
                  )}
                >
                  {genders.data.map((val, idx) => (
                    <div key={idx} className="form-control">
                      <label className="flex gap-3 label cursor-pointer">
                        <input
                          type="radio"
                          id="gender"
                          value={val.id}
                          defaultChecked={val.id === data.gender?.id}
                          className="radio checked:bg-red-500"
                          {...methods.register('gender')}
                        />
                        <span className="label-text capitalize">
                          {val.gender}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={clsx(
                  'grid grid-cols-4 items-center gap-7 mb-4',
                  'max-sm:grid-cols-1',
                )}
              >
                <div>Quốc tịch</div>
                <div className={clsx('col-span-3 flex-1')}>
                  <select
                    defaultValue={data.nationality || 'default'}
                    className="select select-bordered w-full max-w-md"
                    {...methods.register('nationality')}
                  >
                    <option value={'default'} disabled>
                      Chọn quốc tịch
                    </option>
                    <option value={'vietnam'}>Việt Nam</option>
                    <option value={'korea'}>Hàn Quốc</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className={clsx(
                'btn min-h-0 h-10 min-w-[110px] max-w-[250px] w-full btn-info text-[#ffffff] max-xs:min-w-[80px]',
              )}
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminProfile;
