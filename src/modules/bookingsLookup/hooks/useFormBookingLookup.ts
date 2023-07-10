import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaBookingLookup } from "helpers/formSchemaBookingLookup";

interface InputBookingLookup {
  idBooking: string;
}

export function useFormBookingLookup() {
  const { formState, ...methods } = useForm<InputBookingLookup>({
    defaultValues: { idBooking: "" },
    resolver: yupResolver(formSchemaBookingLookup),
  });

  const onSubmit = (data: InputBookingLookup) => {};

  return {
    formState,
    methods,
    onSubmit,
  };
}
