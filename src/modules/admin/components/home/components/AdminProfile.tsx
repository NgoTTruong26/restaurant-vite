import clsx from 'clsx';
import { queryClient } from 'main';
import { GetGenderDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-gender.dto';
import {
  GetPreviewProfileDTO,
  GetUserProfileDTO,
} from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { useFormUpdateProfile } from 'modules/customer/components/user/components/accountInformation/hooks/useFormUpdateProfile';
import useGetGenders from 'modules/customer/components/user/components/accountInformation/hooks/useGetGenders';
import useUpdateProfile from 'modules/customer/components/user/components/accountInformation/hooks/useUpdateProfile';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/features/auth/setUserSlice';

interface Props {
  data: GetUserProfileDTO;
}

export interface IInputProfileDTO {
  id: string;
  fullName: string;
  day?: string | null;
  month?: string | null;
  year?: string | null;
  gender: GetGenderDTO | null;
  nationality: string | null;
}
export default function Profile({ data }: Props) {
  const genders = useGetGenders();

  const { methods } = useFormUpdateProfile({
    day: data.dateBirth
      ? new Date(data.dateBirth).getUTCDate().toString()
      : undefined,
    month: data.dateBirth
      ? (new Date(data.dateBirth).getUTCMonth() + 1).toString()
      : undefined,
    year: data.dateBirth
      ? new Date(data.dateBirth).getUTCFullYear().toString()
      : undefined,
  });

  const dispatch = useDispatch();

  const { mutate } = useUpdateProfile();

  const onSubmit = (input: IInputProfileDTO) => {
    mutate(
      { ...input, id: data.id },
      {
        onSuccess: (dataRes) => {
          queryClient.setQueryData(
            [`get_profile_user_${data.id}`],
            dataRes.data,
          );
          dispatch(
            setUser(dataRes.data || (null as GetPreviewProfileDTO | null)),
          );
        },
      },
    );
  };

  return (
    <div className="w-[50%] px-4 max-md:w-full">
      <div
        className={clsx(
          'text-lg pb-8',
          'max-sm:text-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl',
        )}
      >
        Thông tin cá nhân
      </div>
      {genders.data && (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            {/* <div
              className={clsx(
                'grid grid-cols-4 items-center gap-7 mb-4',
                'max-sm:flex',
                'max-sm:flex-col',
              )}
            >
              <div className=" flex w-full justify-center max-sm:bg-gradient-to-b from-[#31b6e7] from-60% to-transparent to-60%">
                <div
                  className={clsx(
                    'flex justify-center h-28 min-w-[112px]',
                    'max-sm:h-40 max-sm:min-w-[140px]',
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
              <div className="pl-4 col-span-3 flex items-center w-full">
                <div className="max-w-[300px] w-full max-sm:max-w-full">
                  <FieldOutline
                    id="fullName"
                    type="text"
                    defaultValue={data.fullName}
                    label
                    innerText="Tên"
                    inputClassName={clsx('focus:border-[#e11b1e] ')}
                    watch={methods.watch('fullName')}
                    error={formState.errors.fullName}
                    {...methods.register('fullName')}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="[&>div]:mb-8">
              <div
                className={clsx(
                  'grid grid-cols-4 items-center gap-7 mb-4',
                  'max-sm:grid-cols-1 max-sm:gap-3',
                )}
              >
                <div className="max-sm:w-full ">Ngày sinh</div>
                <div
                  className={clsx(
                    'pl-4 col-span-3 flex w-full flex-1 gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 ',
                    'max-xs:flex-col max-xs:items-start max-xs:[&>div]:min-w-[75px]',
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
                  'max-sm:grid-cols-1 max-sm:gap-3',
                )}
              >
                <div className="max-sm:w-full">Giới tính</div>
                <div
                  className={clsx(
                    'pl-4 col-span-3 flex gap-3 overflow-auto',
                    'max-xs:flex-col max-xs:items-start',
                  )}
                >
                  {genders.data.map((val, idx) => (
                    <div key={idx} className="form-control">
                      <label className="flex gap-3 label cursor-pointer">
                        <input
                          type="radio"
                          id={val.id}
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
                  'max-sm:grid-cols-1 max-sm:gap-3',
                )}
              >
                <div>Quốc tịch</div>
                <div className={clsx('pl-4 col-span-3 flex-1')}>
                  <select
                    defaultValue={data.nationality || 'default'}
                    className="select select-bordered w-full max-w-[300px] max-sm:max-w-full"
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
            </div> */}
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
}
