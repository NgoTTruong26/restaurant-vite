import clsx from 'clsx';
import Days from 'components/Date/Days';
import Months from 'components/Date/Months';
import Years from 'components/Date/Years';
import Field from 'components/field';

import { Button } from '@nextui-org/react';
import { queryClient } from 'main';
import { FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/features/auth/setUserSlice';
import { GetGenderDTO } from '../dto/get-gender.dto';
import { GetPreviewProfileDTO, GetUserProfileDTO } from '../dto/get-user.dto';
import { useFormUpdateProfile } from '../hooks/useFormUpdateProfile';
import useGetGenders from '../hooks/useGetGenders';
import useUpdateProfile from '../hooks/useUpdateProfile';

interface Props {
  data: GetUserProfileDTO;
}

export interface IInputProfileDTO {
  fullName: string;
  day?: string | null;
  month?: string | null;
  year?: string | null;
  gender: GetGenderDTO | null;
  nationality: string | null;
}
const Profile: React.FC<Props> = ({ data }) => {
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
    <div className="w-[50%] pr-6 pl-4 max-md:w-full">
      <div
        className={clsx(
          'text-lg pb-8',
          'max-sm:text-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl',
        )}
      >
        User Profile
      </div>
      {genders.data && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              <div
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
                    <Field
                      t="inputNoGetError"
                      name="fullName"
                      label="Full Name"
                      defaultValue={data.fullName}
                    />
                  </div>
                </div>
              </div>
              <div className="[&>div]:mb-8">
                <div className="space-y-2">
                  <div className="max-sm:w-full">Date of birth</div>
                  <div
                    className={clsx(
                      'pl-4 col-span-3 flex w-full flex-1 gap-3 overflow-x-auto',
                      '[&>div]:min-w-[85px] [&>div]:max-w-[150px] [&>div]:flex-1',
                      'max-sm:flex-col max-sm:items-start max-sm:[&>div]:max-w-full',
                    )}
                  >
                    <Days
                      defaultSelectedKeys={
                        data.dateBirth
                          ? [new Date(data.dateBirth).getUTCDate().toString()]
                          : undefined
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
                    />
                    <Months
                      defaultSelectedKeys={
                        data.dateBirth
                          ? [
                              (
                                new Date(data.dateBirth).getUTCMonth() + 1
                              ).toString(),
                            ]
                          : undefined
                      }
                    />
                    <Years
                      defaultSelectedKeys={
                        data.dateBirth
                          ? [
                              new Date(data.dateBirth)
                                .getUTCFullYear()
                                .toString(),
                            ]
                          : undefined
                      }
                    />
                  </div>
                </div>
                <Field
                  t="radio"
                  name="gender"
                  label="Gender"
                  orientation="horizontal"
                  defaultValue={data.gender?.id}
                  options={genders.data.map((val) => ({
                    label: val.gender,
                    value: val.id,
                  }))}
                  classNames={{
                    wrapper: 'pl-4 space-x-3',
                    label: 'text-default',
                  }}
                />
                <Field
                  label="Select nationality"
                  t="select"
                  name="nationality"
                  defaultSelectedKeys={
                    data.nationality ? [data.nationality] : undefined
                  }
                  options={['VietNam', 'Korea'].map((val) => ({
                    label: val,
                    value: val,
                  }))}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                color="primary"
                className="w-full max-w-[250px]"
              >
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default Profile;
