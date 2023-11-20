import clsx from 'clsx';
import { connectSociety } from 'modules/customer/components/user/constant';
import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GetUserProfileDTO } from '../dto/get-user.dto';
import ChangePassword from './ChangePassword';

interface Props {
  data: GetUserProfileDTO;
}

export default function SecurityAndConnectivity({ data }: Props) {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  const handleCloseShowChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="w-[50%] pr-4 pl-6 max-md:w-full">
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
                <span>Địa chỉ email</span>
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
          <ChangePassword
            handleCloseShowChangePassword={handleCloseShowChangePassword}
            data={data}
          />
        )}
      </div>
      <div>
        <div className="text-lg">Liên kết mạng xã hội</div>
        <div className="[&>div]:py-4">
          {connectSociety.map((val, idx) => (
            <div
              key={idx}
              className={clsx(
                'grid grid-cols-6 gap-7 justify-between items-center',
                'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
              )}
            >
              <div
                key={idx}
                className={clsx(
                  'col-span-3 overflow-hidden text-ellipsis flex items-center gap-5',
                  '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                )}
              >
                {val.icons}
                <span>{val.title}</span>
              </div>
              <div className="col-start-5 col-span-2 flex justify-end">
                <button
                  disabled={idx === 1}
                  className={clsx(
                    'btn min-h-0 h-10 min-w-[110px] border-solid btn-outline btn-info hover:!text-[#ffffff]',
                    {
                      'btn-disabled': idx === 1,
                    },
                  )}
                >
                  {idx === 1 ? 'Đã kết nối' : 'Kết nối'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
