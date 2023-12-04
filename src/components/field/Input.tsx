import {
  Input as NextUIInput,
  InputProps as NextUIInputProps,
} from '@nextui-org/react';
import { TextInputDOMProps } from '@react-types/shared';

export interface InputProps extends Omit<NextUIInputProps, 'type'> {
  t: 'input' | 'inputNoGetError';
  type?: TextInputDOMProps['type'];
}

export default function Input(props: InputProps) {
  return <NextUIInput color="primary" variant="bordered" {...props} />;
}
