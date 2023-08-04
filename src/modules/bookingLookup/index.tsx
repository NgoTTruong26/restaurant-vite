import clsx from "clsx";
import Button from "components/Button";
import { GoSearch } from "react-icons/go";
import {
  InputBookingLookup,
  useFormBookingLookup,
} from "./hooks/useFormBookingLookup";
import { useEffect, useState } from "react";
import OrderDetails from "./components/OrderDetails";

export default function BookingLookup() {
  const { formState, methods } = useFormBookingLookup();

  const [showOrder, setShowOrder] = useState<boolean>(false);

  const [getBooking, setGetBooking] = useState<string>();

  useEffect(() => {
    if (showOrder) {
      document.body.classList.add("overflow-hidden", "touch-pan-y");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [showOrder]);

  const handleCloseOrder = () => {
    setShowOrder(false);
  };

  const onSubmit = (data: InputBookingLookup) => {
    setGetBooking(data.idBooking);
    setShowOrder(true);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-5 pt-36 pb-16 bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div
        className={clsx(
          "flex flex-col bg-[#ffffff] max-w-[800px] w-full items-center border shadow-xl py-5 px-6 rounded-xl transition-all duration-500",
          " max-sm:py-2 max-sm:px-4"
        )}
      >
        <form
          className="flex w-full items-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex items-center pr-4">
            <GoSearch className="text-[28px] max-sm:text-[14px]" />
          </div>
          <div className="w-full">
            <div className="flex w-full items-center">
              <input
                className="flex-1 w-full text-[28px] max-sm:text-[14px]"
                placeholder="Nhập ID đơn hàng"
                type="text"
                id="idBooking"
                {...methods.register("idBooking")}
              />
              {methods.watch("idBooking") && (
                <div
                  className={clsx(
                    "px-4 font-medium underline underline-offset-4 text-[18px] cursor-pointer",
                    "max-sm:hidden max-sm:text-[14px]"
                  )}
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
            children={
              <>
                <div className="max-sm:hidden">Tìm kiếm</div>
                <div className="min-[449px]:hidden">
                  <GoSearch className="text-[14px]" />
                </div>
              </>
            }
            className=" bg-red hover:bg-[#ce1212cc]"
            type="submit"
          />
        </form>
        {showOrder && getBooking && (
          <OrderDetails
            handleCloseOrder={handleCloseOrder}
            getBooking={getBooking}
          />
        )}
      </div>
    </div>
  );
}
