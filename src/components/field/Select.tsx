import {
  Select as NextUISelect,
  SelectProps as NextUISelectProps,
  SelectItem,
} from '@nextui-org/react';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends Omit<NextUISelectProps, 'children'> {
  t: 'select';
  options: SelectOption[];
}

export default function Select({ t, options, ...props }: SelectProps) {
  return (
    <NextUISelect
      variant="faded"
      label="Select an animal"
      className="max-w-xs text-primary"
      color="primary"
      {...props}
    >
      {options.map(({ label, value }) => (
        <SelectItem color="primary" key={value} value={value}>
          {label}
        </SelectItem>
      ))}
    </NextUISelect>
  );
}
