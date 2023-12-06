import clsx from 'clsx';
import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BsPlusCircleDotted, BsTelephone } from 'react-icons/bs';

import { GetAdminDTO } from '../../dto/get-admins.dto';
import { GetRoleDTO } from '../../dto/get-roles.dto';
import ChangePasswordAdminById from './ChangePasswordAdminById';
import ModifyAdminRole from './ModifyAdminRole';

interface Props {
  data?: GetAdminDTO | null;
  currPage: number;
  filterRole?: string;
  searchCharacters?: string;
}

export default function AdminSecurityAndConnectivity({
  data,
  currPage,
  filterRole,
  searchCharacters,
}: Props) {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  const [visibleListRole, setVisibleListRole] = useState<boolean>(false);

  const handleCloseShowChangePassword = () => {
    setShowChangePassword(false);
  };

  const handleVisible = () => {
    setVisibleListRole(true);
  };

  const handleCloseVisible = () => {
    setVisibleListRole(false);
  };

  const listRole: (roles: GetRoleDTO[]) => string[] = (roles) => {
    return roles.map((role) => role.id);
  };

  return (
    <div className="w-[50%] pr-4 pl-6 max-md:w-full">
      {data && (
        <>
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
              {data.roles
                ? data.roles.map((role, idx) => (
                    <div
                      key={idx}
                      className="badge badge-accent badge-outline badge-lg"
                    >
                      {role.position}
                    </div>
                  ))
                : 'Chưa có'}
            </div>
            {visibleListRole && (
              <ModifyAdminRole
                adminId={data.id}
                handleCloseVisible={handleCloseVisible}
                roles={listRole(data.roles)}
                currPage={currPage}
                filterRole={filterRole}
                searchCharacters={searchCharacters}
              />
            )}
          </div>
          <div>
            <div className="text-lg">Số điện thoại và Email</div>
            <div className="[&>div]:py-4">
              <div
                className={clsx(
                  'grid grid-cols-6 gap-7 justify-between items-center',
                  'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
                )}
              >
                <div className="col-span-3 overflow-hidden text-ellipsis flex gap-5">
                  <BsTelephone size={25} className="min-w-[25px]" />
                  <div
                    className={clsx(
                      'flex flex-col overflow-hidden',
                      '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                    )}
                  >
                    <span>Số điện thoại</span>
                    <span>{data.phone || 'Chưa kết nối'}</span>
                  </div>
                </div>
                <div className="col-start-5 col-span-2 flex justify-end">
                  <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
                    {data.phone ? 'Cập nhật' : 'Thiết lập'}
                  </button>
                </div>
              </div>
              <div
                className={clsx(
                  'grid grid-cols-6 gap-7 justify-between items-center',
                  'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
                )}
              >
                <div className="col-span-3 overflow-hidden text-ellipsis flex gap-5">
                  <AiOutlineMail size={25} className="min-w-[25px]" />
                  <div
                    className={clsx(
                      'flex flex-col overflow-hidden',
                      '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                    )}
                  >
                    <span>Email</span>
                    <span className="text-ellipsis">
                      {data.email || 'Chưa kết nối'}
                    </span>
                  </div>
                </div>
                <div className="col-start-5 col-span-2 flex justify-end">
                  <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
                    {data.phone ? 'Cập nhật' : 'Thiết lập'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg">Bảo mật</div>
            <div className="[&>div]:py-4">
              <div
                className={clsx(
                  'grid grid-cols-6 gap-7 justify-between items-center',
                  'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
                )}
              >
                <div
                  className={clsx(
                    'col-span-3 overflow-hidden text-ellipsis flex items-center gap-5',
                    '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                  )}
                >
                  <AiFillLock size={25} className="min-w-[25px]" />
                  <span>Đổi mật khẩu</span>
                </div>
                <div className="col-start-5 col-span-2 flex justify-end">
                  <button
                    onClick={() => setShowChangePassword(true)}
                    className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
            {showChangePassword && (
              <ChangePasswordAdminById
                handleCloseShowChangePassword={handleCloseShowChangePassword}
                data={data}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
