import { ReactNode } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMap, BsShare } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

const enum EContact {
  ADDRESS = 'Address',
  EMAIL = 'Email',
  PHONENUMBER = 'Phone Number',
  SCHEDULE = 'Schedule',
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
      <div className="flex flex-col">
        <span>Mon-Sat: 11AM - 23PM</span>
        <span>Sunday: Closed</span>
      </div>
    ),
  },
];
