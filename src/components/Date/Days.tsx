import { SelectProps as NextUISelectProps } from '@nextui-org/react';
import Field from 'components/field';

interface Props extends Omit<NextUISelectProps, 'children'> {
  year?: string;
  month?: string;
}

function GetDaysInMonth(year: string, month: string) {
  const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate();

  return Array(daysInMonth)
    .fill('')
    .map((val, idx) => idx + 1);
}

export default function Days({ year, month, ...props }: Props) {
  return (
    <Field
      {...props}
      label="Day"
      t="select"
      name="day"
      options={GetDaysInMonth(
        year && year !== 'default'
          ? year
          : new Date().getUTCFullYear().toString(),
        month && month !== 'default'
          ? month
          : (new Date().getUTCMonth() + 1).toString(),
      ).map((value) => ({ label: value.toString(), value: value }))}
    />
  );
}
