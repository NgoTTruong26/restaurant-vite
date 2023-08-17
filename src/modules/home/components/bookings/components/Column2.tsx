import FieldProgress from "components/field/FieldProgress";
import { cssBeforeOnFocusInput } from "modules/home/constant.styles";
import { UseFormReturn } from "react-hook-form";

import clsx from "clsx";

import { CreateBookingDTO } from "../dto/booking.dto";
import useGetListBuffetMenuPreview from "../../OurMenu/hooks/useGetListBuffetMenuPreview";

interface Props {
  methods: UseFormReturn<CreateBookingDTO>;
}

export default function Column2({ methods }: Props) {
  const buffetMenus = useGetListBuffetMenuPreview().data;

  return (
    <div
      className={clsx(
        "flex-1 flex flex-col px-4 max-md:pt-3",
        "[&>div+div]:pt-8"
      )}
    >
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
      <div className="flex max-sm:flex-col max-md:pt-3">
        <div
          className={clsx(
            "w-[50%] mr-4 flex flex-col",
            "max-sm:w-full max-sm:mr-0"
          )}
        >
          <FieldProgress
            id="bookingTime"
            type="date"
            label
            innerText="Ngày đặt bàn"
            spanClassName={cssBeforeOnFocusInput}
            inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
            error={methods.formState.errors.bookingDate}
            {...methods.register("bookingDate")}
          />
        </div>
        <div
          className={clsx(
            "w-[50%] mr-4 flex flex-col",
            "max-sm:w-full max-sm:mr-0 max-sm:pt-3"
          )}
        >
          <FieldProgress
            id="bookingTime"
            type="time"
            label
            innerText="Giờ đặt bàn"
            spanClassName={cssBeforeOnFocusInput}
            inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
            error={methods.formState.errors.bookingTime}
            {...methods.register("bookingTime")}
          />
        </div>
      </div>
      <div>
        <select
          className="select select-bordered w-full"
          value={methods.watch("buffetMenu")}
          {...methods.register("buffetMenu")}
        >
          <option value="default" disabled>
            Select Buffet Menu
          </option>
          {buffetMenus?.map((buffetMenu, idx) => (
            <option key={idx} value={buffetMenu.id}>
              Set{" " + buffetMenu.name}K
            </option>
          ))}
        </select>
        {methods.getFieldState("buffetMenu").error?.message && (
          <p className="text-red pl-2 pt-1">
            {methods.getFieldState("buffetMenu").error?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col max-md:pt-3">
        <FieldProgress
          id="note"
          type="text"
          label
          innerText="Ghi chú"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          {...methods.register("note")}
        />
      </div>
    </div>
  );
}
