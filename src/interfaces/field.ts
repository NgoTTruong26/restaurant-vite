import { FieldError } from 'react-hook-form';

export interface Field extends React.InputHTMLAttributes<HTMLInputElement> {
  watch?: string | null;
  innerText?: string;
  label?: boolean;
  inputClassName?: string;
  spanClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  error?: FieldError;
}
