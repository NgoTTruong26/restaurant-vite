import { SelectProps as NextUISelectProps } from '@nextui-org/react';
import Field from 'components/field';

interface Props extends Omit<NextUISelectProps, 'children'> {}

function GetYears(toYear: number) {
  const currentYear = new Date().getUTCFullYear();

  return Array(currentYear - toYear + 1)
    .fill('')
    .map((val, idx) => currentYear - idx);
}

export default function Years({ ...props }: Props) {
  return (
    <Field
      {...props}
      label="Year"
      t="select"
      name="year"
      options={GetYears(1900).map((value) => ({
        label: value.toString(),
        value: value,
      }))}
    />
  );
}
