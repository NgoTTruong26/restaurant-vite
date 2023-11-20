import clsx from 'clsx';
import FieldOutline from 'components/field/FieldOutline';
import { useState } from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPlusCircleDotted, BsTelephone } from 'react-icons/bs';
import { IInputDataCreateAdmin } from '.';
import ModifyAdminRole from './ModifyAdminRole';

interface Props {
  roles: UseFieldArrayReturn<IInputDataCreateAdmin, 'roles', 'id'>;
  methods: Omit<UseFormReturn<IInputDataCreateAdmin>, 'handleSubmit'>;
}

export default function AdminSecurityAndConnectivity({
  roles,
  methods,
}: Props) {
  const [visibleListRole, setVisibleListRole] = useState<boolean>(false);

  const handleVisible = () => {
    setVisibleListRole(true);
  };

  const handleCloseVisible = () => {
    setVisibleListRole(false);
  };



  return (
    <div
      className={clsx(
        'w-[50%] pr-4 pl-6 [&>div]:mb-8',
        'max-md:w-full',
        'max-sm:[&>div]:mb-6',
      )}
    >
      <div>
        <div
          className={clsx(
            'flex gap-3 items-center text-lg justify-between mb-3',
          )}
        >
          <div>Chức vụ</div>
          <div
            onClick={() => handleVisible()}
            className="flex min-h-6 h-[40px] btn bg-[#ffffff] text-[#4a4a4a] gap-2 px-2 rounded-lg border border-[#4a4a4a] border-dashed hover:cursor-pointer hover:bg-[#f8f8f8]"
          >
            <div className="">
              <BsPlusCircleDotted size={25} />
            </div>
            <div
              className={clsx(
                'flex justify-center items-center capitalize',
                'max-sm:hidden',
              )}
            >
              <div>Thêm Chức vụ</div>
            </div>
          </div>
        </div>
        <div className={clsx('flex flex-wrap gap-3 py-2')}>
          {methods.getValues('roles').length
            ? methods.getValues('roles').map((role, idx) => (
                <div
                  key={idx}
                  className="badge badge-accent badge-outline badge-lg"
                >
                  {role.position}
                </div>
              ))
            : 'Chưa có'}
        </div>
        {methods.formState.errors.roles && (
          <p className={clsx('text-red pl-2 pt-1')}>
            {methods.formState.errors.roles.message}
          </p>
        )}
        {visibleListRole && (
          <ModifyAdminRole
            handleCloseVisible={handleCloseVisible}
            roles={roles}
          />
        )}
      </div>
      <div
        className={clsx(
          'grid grid-cols-4 items-center gap-7 mb-4',
          'max-sm:grid-cols-1 max-sm:gap-3',
        )}
      >
        <div>Quốc tịch</div>
        <div className={clsx('col-span-3 flex-1')}>
          <select
            className="select select-bordered w-full max-w-[250px]"
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

      <div>
        <div className="text-lg mb-6">Số điện thoại và Email</div>
        <div className="[&>div]:mb-8 max-sm:[&>div]:mb-6">
          <div
            className={clsx(
              'flex justify-between items-center',
              'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
            )}
          >
            <div
              className={clsx(
                'w-full grid grid-cols-4 items-center gap-7 mb-4',
                'max-sm:grid-cols-1 max-sm:gap-3',
              )}
            >
              <div className="flex">
                <BsTelephone size={25} />
                <span className="pl-3">Phone:</span>
              </div>

              <div className="relative col-span-3 flex-1 flex flex-col max-w-[250px]">
                <FieldOutline
                  id="phoneNumber"
                  type="text"
                  label
                  innerText="Số điện thoại"
                  inputClassName="focus:border-[#e11b1e]"
                  errorClassName="absolute top-12 text-xs"
                  watch={methods.watch('phoneNumber')}
                  error={methods.formState.errors.phoneNumber}
                  {...methods.register('phoneNumber')}
                />
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'flex justify-between items-center',
              'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
            )}
          >
            <div
              className={clsx(
                'w-full grid grid-cols-4 items-center gap-7 mb-4',
                'max-sm:grid-cols-1 max-sm:gap-3',
              )}
            >
              <div className="flex">
                <AiOutlineMail size={25} />
                <span className="pl-3">Email:</span>
              </div>

              <div className="col-span-3 flex-1 flex flex-col max-w-[250px]">
                <FieldOutline
                  id="email"
                  type="text"
                  label
                  innerText="Địa chỉ email"
                  inputClassName="focus:border-[#e11b1e]"
                  watch={methods.watch('email')}
                  {...methods.register('email')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center max-md:!mb-0">
        <button
          type="submit"
          className={clsx(
            'btn min-h-0 h-10 min-w-[110px] max-w-[250px] w-full btn-info text-[#ffffff] max-xs:min-w-[80px]',
          )}
        >
          Xác Nhận
        </button>
      </div>
    </div>
  );
}
