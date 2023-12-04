import {
  RadioGroup as NextUIRadioGroup,
  RadioGroupProps as NextUIRadioGroupProps,
  Radio,
} from '@nextui-org/react';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps extends NextUIRadioGroupProps {
  t: 'radio';
  options: RadioOption[];
}

export default function RadioGroup({ t, options, ...props }: RadioGroupProps) {
  return (
    <NextUIRadioGroup
      color="primary"
      classNames={{ label: 'text-default' }}
      {...props}
    >
      {options.map(({ label, value }) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </NextUIRadioGroup>
  );
}
