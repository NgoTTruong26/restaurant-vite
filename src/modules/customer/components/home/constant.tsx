import { AiOutlineMail } from 'react-icons/ai';
import { BsMap, BsShare } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { ReactNode } from 'react';

const enum EContact {
  ADDRESS = 'Địa Chỉ',
  EMAIL = 'Địa chỉ EMAIL',
  PHONENUMBER = 'Số Điện Thoại',
  SCHEDULE = 'Lịch Trình',
}

export interface Contact<T, R> {
  icons?: ReactNode;
  title: R;
  content: T;
}

export const contacts: Contact<ReactNode, EContact>[] = [
  {
    icons: <BsMap size={25} />,
    title: EContact.ADDRESS,
    content: 'A108 Adam Street, New York, NY 535022',
  },
  {
    icons: <AiOutlineMail size={25} />,
    title: EContact.EMAIL,
    content: 'contact@example.com',
  },
  {
    icons: <IoCallOutline size={25} />,
    title: EContact.PHONENUMBER,
    content: '+1 5589 55488 55',
  },
  {
    icons: <BsShare size={25} />,
    title: EContact.SCHEDULE,
    content: (
      <>
        <span className="font-medium">Mon-Sat:</span>
        {' 11AM - 23PM; '}
        <span className="font-medium">Sunday:</span>
        {' Closed'}
      </>
    ),
  },
];
