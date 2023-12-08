import {
  Button,
  Chip,
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GetAdminDTO } from '../../adminList/dto/get-admins.dto';
import ChangePasswordAdmin from './ChangePasswordAdmin';
import RoleListDetail from './RoleListDetail';

interface Props {
  data: GetAdminDTO;
}

export default function AdminSecurityAndConnectivity({ data }: Props) {
  const [showRoleListDetail, setShowRoleListDetail] = useState<boolean>(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCloseShowRoleListDetail = () => {
    setShowRoleListDetail(false);
  };

  return (
    <div className="w-[50%] pr-4 pl-6 max-md:w-full [&>div+div]:pt-8">
      <div>
        <div
          className={clsx('flex gap-3 items-center text-lg justify-between')}
        >
          <div>Chức vụ</div>
        </div>
        <div className={clsx('flex flex-wrap gap-3 pt-4')}>
          {data.roles ? (
            <>
              {data.roles.slice(0, 4).map((role, idx) => (
                <Chip key={idx} color="primary" variant="bordered">
                  {role.position}
                </Chip>
              ))}
              {data.roles.length > 4 && (
                <>
                  <Chip
                    onClick={() => setShowRoleListDetail(true)}
                    color="primary"
                    variant="bordered"
                    className="cursor-pointer hover:border-primary-300"
                  >
                    +{data.roles.length - 4}
                  </Chip>
                  {showRoleListDetail && (
                    <RoleListDetail
                      roles={data.roles}
                      handleCloseShowRoleListDetail={
                        handleCloseShowRoleListDetail
                      }
                    />
                  )}
                </>
              )}
            </>
          ) : (
            'Chưa có'
          )}
        </div>
      </div>
      <div>
        <div className="text-lg">Số điện thoại và Email</div>
        <div className="[&>div]:pt-4">
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
                <span className="text-primary">
                  {data.phone || 'Chưa kết nối'}
                </span>
              </div>
            </div>
            <div className="col-start-5 col-span-2 flex justify-end">
              <Button color="primary">
                {data.phone ? 'Cập nhật' : 'Thiết lập'}
              </Button>
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
                <span className="text-ellipsis text-primary">
                  {data.email || 'Chưa kết nối'}
                </span>
              </div>
            </div>
            <div className="col-start-5 col-span-2 flex justify-end">
              <Button color="primary">
                {data.phone ? 'Cập nhật' : 'Thiết lập'}
              </Button>
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
              <Button onClick={onOpen} color="primary">
                Cập nhật
              </Button>
            </div>
          </div>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
          <ModalContent className="max-w-500 max-h-[80vh]">
            {(onClose) => <ChangePasswordAdmin handleClose={onClose} />}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
