import { FieldError } from "react-hook-form";

export interface PropsFieldSelect
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: FieldError;
}
