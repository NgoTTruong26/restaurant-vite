import Button from "components/Button";
import FieldProgress from "components/field/FieldProgress";
import { UseFormReturn } from "react-hook-form";
import { InputBooking } from "./hooks/useFormBooking";
import { cssBeforeOnFocusInput } from "modules/home/constant.styles";

interface Props {
  methods: UseFormReturn<InputBooking>;
}

export default function Column3({ methods }: Props) {
  return (
    <div className="flex-1 flex flex-col px-4  max-md:pt-3">
      <div className="flex flex-col">
        <FieldProgress
          id="name"
          placeholder="Nhập tên khách hàng..."
          type="text"
          label
          innerText="Tên khách hàng"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          error={methods.formState.errors.name}
          {...methods.register("name")}
        />
      </div>
      <div className="flex flex-col pt-12 max-md:pt-3">
        <FieldProgress
          id="phoneNumber"
          placeholder="Nhập số điện thoại..."
          type="text"
          label
          innerText="Số điện thoại"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          error={methods.formState.errors.phoneNumber}
          {...methods.register("phoneNumber")}
        />
      </div>
      <Button
        type="submit"
        className="bg-red mt-8 py-5 rounded-full text-[#fff] font-medium hover:!bg-[#e51717]"
      >
        Đặt bàn
      </Button>
    </div>
  );
}
