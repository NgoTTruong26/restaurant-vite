import clsx from 'clsx';
import Button from 'components/Button';
import { UseFieldArrayReturn } from 'react-hook-form';

import FooterAdminList from './FooterRoleList';
import { GetRoleListDTO } from '../../dto/get-roles.dto';

interface Props {
  data: GetRoleListDTO;
  currPage: number;

  handleGetAdminId: (adminId: string) => void;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

export default function TableAdminListMobile({
  data,
  currPage,

  handleGetAdminId,
  handlePreviousPage,
  handleSetPage,
  handleNextPage,
}: Props) {
  return (
    <div className="flex-1 flex overflow-x-auto overflow-y-auto">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-3 py-3 border-y-2 border-[#f2f2f2]">
          <div className="flex items-center justify-center min-w-[3.5rem] w-14">
            {/* <input
              onChange={() => {
                handleCheckedAll();
              }}
              checked={isCheckedAll()}
              type="checkbox"
              className="checkbox"
            /> */}
          </div>
          <div className="relative dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn btn-active btn-ghost min-h-[2rem] h-8 w-20"
            >
              Action
            </label>
            {/* <ul className="z-40 absolute left-0 p-2 menu dropdown-content bg-base-100 rounded-box shadow-lg min-w-[90px] bg-[#ffffff]">
              <li
                onClick={() => onHandleDeleteCheckedAdmin()}
                className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]"
              >
                Delete Checked
              </li>
              <li className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]">
                Delete All Admin
              </li>
            </ul> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col [&>div+div]:border-t-2 [&>div]:border-[#f2f2f2]">
          {/* {data.roles.map((admin, idx) => (
            <div key={idx} className="flex items-center gap-3 py-3">
              <div className="flex justify-center min-w-[3.5rem] w-14">
                <input
                  onChange={() => handleChecked(admin.id)}
                  checked={deleteCheckedAdmins.fields
                    .map((admin) => admin.adminId)
                    .includes(admin.id)}
                  type="checkbox"
                  className="checkbox"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{`${admin.fullName}`}</div>
                    <div className="text-sm opacity-50">Viet Nam</div>
                  </div>
                </div>
                <div
                  className={clsx('flex gap-3', 'max-xs:flex-col max-xs:gap-0')}
                >
                  <span className="min-w-[6rem]">Giới Tính:</span>
                  <span>Male</span>
                </div>
                <div
                  className={clsx('flex gap-3', 'max-xs:flex-col max-xs:gap-0')}
                >
                  <span className="min-w-[6rem]">Ngày sinh:</span>
                  <span>
                    {admin.dateBirth
                      ? new Date(admin.dateBirth).toLocaleDateString('en-GB')
                      : 'Chưa có'}
                  </span>
                </div>

                <div
                  className={clsx('flex gap-3', 'max-xs:flex-col max-xs:gap-1')}
                >
                  <span className="min-w-[6rem]">Chức vụ:</span>
                  <div className={clsx('flex flex-wrap gap-3 max-w-[350px]')}>
                    {admin.roles.map((role, idx) => (
                      <span key={idx} className="badge badge-ghost badge-md">
                        {role.position}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={clsx('flex gap-3', 'max-xs:flex-col max-xs:gap-0')}
                >
                  <span className="min-w-[6rem]">Email:</span>
                  <span>{admin.email}</span>
                </div>
                <div
                  className={clsx('flex gap-3', 'max-xs:flex-col max-xs:gap-0')}
                >
                  <span className="min-w-[6rem]">Số điện thoại:</span>
                  <span>{admin.phone}</span>
                </div>
                <Button
                  onClick={() => handleGetAdminId(admin.id)}
                  className="capitalize w-[90px]"
                >
                  Details
                </Button>
              </div>
            </div>
          ))} */}
        </div>

        <div className="flex justify-center border-t-2 border-[#f2f2f2]">
          <FooterAdminList
            data={data}
            currPage={currPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handleSetPage={handleSetPage}
          />
        </div>
      </div>
    </div>
  );
}
