import { Spinner, SpinnerProps } from '@nextui-org/react';

interface Props extends SpinnerProps {}

export default function LoadingIcons(props: Props) {
  return <Spinner {...props} size="sm" />;
}
