import { SelectProps as NextUISelectProps } from '@nextui-org/react';
import Field from 'components/field';

interface Props extends Omit<NextUISelectProps, 'children'> {}

export default function Months({ ...props }: Props) {
  return (
    <Field
      {...props}
      label="Month"
      t="select"
      name="month"
      options={Array(12)
        .fill('')
        .map((val, idx) => idx + 1)
        .map((value) => ({ label: value.toString(), value: value }))}
    />
  );
}
