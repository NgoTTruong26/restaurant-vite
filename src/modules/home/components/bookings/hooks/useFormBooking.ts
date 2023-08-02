import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaBooking } from "helpers/formSchemaBooking";
import { useFieldArray, useForm } from "react-hook-form";
import { CreateBookingDTO } from "../dto/booking.dto";

export default function useFormBooking() {
  const methods = useForm<CreateBookingDTO>({
    defaultValues: {
      buffetMenu: "default",
      phoneNumber: "",
      author: "",
      bookingTime: "",
      bookingDate: "",
      numberPeople: 1,
      bookingsForChildren: [],
    },
    resolver: yupResolver(formSchemaBooking),
  });

  const bookingsForChildren = useFieldArray({
    control: methods.control,
    name: "bookingsForChildren",
  });

  return {
    methods,
    bookingsForChildren,
  };
}
