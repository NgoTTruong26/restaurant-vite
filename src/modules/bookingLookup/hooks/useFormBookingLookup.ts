import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaBookingLookup } from "helpers/formSchemaBookingLookup";

export interface InputBookingLookup {
  idBooking: string;
}

export function useFormBookingLookup() {
  const { formState, ...methods } = useForm<InputBookingLookup>({
    defaultValues: { idBooking: "" },
    resolver: yupResolver(formSchemaBookingLookup),
  });

  return {
    formState,
    methods,
  };
}
