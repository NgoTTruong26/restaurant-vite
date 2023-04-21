import FieldProgress from "components/field/FieldProgress";
import { cssBeforeOnFocusInput } from "modules/home/constant.styles";
import { UseFormReturn } from "react-hook-form";
import { InputBooking } from "./hooks/useFormBooking";

interface Props {
  methods: UseFormReturn<InputBooking>;
}

export default function Column2({ methods }: Props) {
  return (
    <div className="flex-1 flex flex-col px-4">
      <div className="flex flex-col ">
        <FieldProgress
          id="numberPeople"
          placeholder="Nhập số lượng người..."
          type="number"
          label
          innerText="Số người"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          error={methods.formState.errors.numberPeople}
          {...methods.register("numberPeople")}
        />
      </div>
      <div className="flex pt-12">
        <div className="w-[50%] mr-4 flex flex-col">
          <FieldProgress
            id="date"
            type="date"
            label
            innerText="Ngày"
            spanClassName={cssBeforeOnFocusInput}
            inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
            error={methods.formState.errors.date}
            {...methods.register("date")}
          />
        </div>
        <div className="w-[50%] ml-4 flex flex-col">
          <FieldProgress
            id="time"
            type="time"
            label
            innerText="Giờ"
            spanClassName={cssBeforeOnFocusInput}
            inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
            error={methods.formState.errors.time}
            {...methods.register("time")}
          />
        </div>
      </div>
      <div className="flex flex-col pt-12">
        <FieldProgress
          id="note"
          type="text"
          label
          innerText="Ghi chú"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
        />
      </div>
    </div>
  );
}
