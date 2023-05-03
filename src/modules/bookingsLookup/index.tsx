import clsx from "clsx";
import Button from "components/Button";
import { GoSearch } from "react-icons/go";
import { useFormBookingLookup } from "./hooks/useFormBookingLookup";
import { useState } from "react";
import LoadingOrderDetail from "./components/LoadingOrderDetail";
import OrderDetails from "./components/OrderDetails";

export default function BookingLookup() {
  const { formState, methods, onSubmit } = useFormBookingLookup();

  const [showOrder, setShowOrder] = useState<boolean>(true);

  const handleCloseOrder = () => {
    setShowOrder(false);
  };
  return (
    <div className="flex-1 flex items-center justify-center px-5 pt-36 pb-16">
      <div
        className={clsx(
          "flex flex-col max-w-[800px] w-full items-center border shadow-xl py-5 px-6 rounded-xl transition-all duration-500"
        )}
      >
        <form
          className="flex w-full items-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex items-center pr-4">
            <GoSearch size={28} />
          </div>
          <div className="w-full">
            <div className="flex w-full items-center">
              <input
                className="flex-1 w-full text-[28px]"
                placeholder="Nhập ID đơn hàng"
                type="text"
                id="idBooking"
                {...methods.register("idBooking")}
              />
              {methods.watch("idBooking") && (
                <div
                  className="px-4 font-medium underline underline-offset-4 text-[18px] cursor-pointer"
                  onClick={() => methods.setValue("idBooking", "")}
                >
                  Clear
                </div>
              )}
            </div>
            {formState.errors && (
              <p className="text-red pt-1">
                {formState.errors.idBooking?.message}
              </p>
            )}
          </div>

          <Button
            children="Tìm kiếm"
            className=" bg-red hover:bg-[#ce1212cc]"
            type="submit"
          />
        </form>
        {showOrder && <OrderDetails handleCloseOrder={handleCloseOrder} />}
        {/* <LoadingOrderDetail /> */}
      </div>
    </div>
  );
}
