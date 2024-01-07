import { Spinner, SpinnerProps } from '@nextui-org/react';
import clsx from 'clsx';

interface Props extends Omit<SpinnerProps, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function LoadingIcons({ size, className, ...props }: Props) {
  return (
    <Spinner
      {...props}
      className={clsx(className, {
        'text-md': size === 'xs',
        'text-lg': size === 'sm',
        'text-2xl': size === 'md',
        'text-4xl': size === 'lg',
        'text-6xl': size === 'xl',
      })}
    />
  );
}
