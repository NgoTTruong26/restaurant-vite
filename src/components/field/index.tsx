import { Controller, useFormContext } from 'react-hook-form';
import Input, { InputProps } from './Input';
import Password, { PasswordProps } from './Password';
import RadioGroup, { RadioGroupProps } from './Radio';
import Select, { SelectProps } from './Select';

interface FieldBaseProps {
  name: string;
}

type FieldProps = FieldBaseProps &
  (InputProps | PasswordProps | SelectProps | RadioGroupProps);

export default function Field(props: FieldProps) {
  const { name, t } = props;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { ref, ...field },
        fieldState: { invalid, error },
      }) => (
        <>
          {t === 'input' && (
            <Input
              {...props}
              {...field}
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}

          {t === 'inputNoGetError' && (
            <Input {...props} {...field} isInvalid={false} />
          )}

          {t === 'password' && (
            <Password
              {...props}
              {...field}
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}

          {t === 'select' && (
            <Select
              {...props}
              {...field}
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          {t === 'radio' && (
            <RadioGroup
              {...props}
              {...field}
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        </>
      )}
    />
  );
}
