import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import clsx from 'clsx';
import { connectSociety } from 'modules/customer/components/user/constant';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GetUserProfileDTO } from '../dto/get-user.dto';
import ChangePassword from './ChangePassword';

interface Props {
  data: GetUserProfileDTO;
}

export default function SecurityAndConnectivity({ data }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-[50%] pr-4 pl-6 max-md:w-full">
      <div>
        <div className="text-lg">Phone Number and Email</div>
        <div className="[&>div]:py-4">
          <div
            className={clsx(
              'grid grid-cols-6 gap-7 justify-between items-center',
              'max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4',
            )}
          >
            <div className="col-span-3 overflow-hidden text-ellipsis flex gap-5">
              <BsTelephone size={25} className="min-w-[25px] text-primary" />
              <div
                className={clsx(
                  'flex flex-col overflow-hidden',
                  '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                )}
              >
                <span>Phone Number</span>
                <span className="text-primary">
                  {data.phone || 'Not Connected Yet'}
                </span>
              </div>
            </div>
            <div className="col-start-5 col-span-2 flex justify-end">
              <Button color="primary" className="w-full max-w-[100px]">
                {data.phone ? 'Update' : 'Add'}
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
              <AiOutlineMail size={25} className="min-w-[25px] text-primary" />
              <div
                className={clsx(
                  'flex flex-col overflow-hidden',
                  '[&>span]:overflow-hidden [&>span]:text-ellipsis [&>span]:whitespace-nowrap',
                )}
              >
                <span>Email</span>
                <span className="text-ellipsis text-primary">
                  {data.email || 'Not Connected Yet'}
                </span>
              </div>
            </div>
            <div className="col-start-5 col-span-2 flex justify-end">
              <Button color="primary" className="w-full max-w-[100px]">
                {data.phone ? 'Update' : 'Add'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg">Security</div>
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
              <AiFillLock size={25} className="min-w-[25px] text-primary" />
              <span>Change Password</span>
            </div>
            <div className="col-start-5 col-span-2 flex justify-end">
              <Button
                color="primary"
                className="w-full max-w-[100px]"
                onClick={() => onOpen()}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
          <ModalContent className="max-w-500 max-h-[80vh]">
            {(onClose) => <ChangePassword handleClose={onClose} data={data} />}
          </ModalContent>
        </Modal>
      </div>
      <div>
        <div className="text-lg">Social Network</div>
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
                <Button
                  color="primary"
                  isDisabled={idx === 1}
                  className="w-full max-w-[100px]"
                >
                  {idx === 1 ? 'Connected' : 'Connect'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
