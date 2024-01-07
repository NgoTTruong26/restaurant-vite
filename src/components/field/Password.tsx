import {
  Input as NextUIInput,
  InputProps as NextUIInputProps,
} from '@nextui-org/react';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export interface PasswordProps extends Omit<NextUIInputProps, 'type'> {
  t: 'password';
}

export default function Password({ endContent, ...props }: PasswordProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <NextUIInput
      color="primary"
      variant="bordered"
      type={isVisible ? 'text' : 'password'}
      endContent={
        <div className="flex gap-1">
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
          {endContent}
        </div>
      }
      {...props}
    />
  );
}
