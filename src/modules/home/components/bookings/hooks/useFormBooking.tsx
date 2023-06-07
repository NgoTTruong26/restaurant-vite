import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaBooking } from "helpers/formSchemaBooking";
import { useForm } from "react-hook-form";

export interface InputBooking {
  numberPeople: number;
  date: string;
  time: string;
  note?: string;
  name: string;
  phoneNumber: string;
}

export default function useFormBooking() {
  const methods = useForm<InputBooking>({
    defaultValues: {
      numberPeople: 0,
      date: "",
      time: "",
      note: "",
      name: "",
      phoneNumber: "",
    },
    resolver: yupResolver(formSchemaBooking),
  });

  const onSubmit = (data: InputBooking) => {};

  return {
    methods,
    onSubmit,
  };
}
