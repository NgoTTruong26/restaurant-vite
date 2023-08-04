import useFormBooking from "./hooks/useFormBooking";
import clsx from "clsx";
import { NavBarId } from "Layout/constant";
import Column1 from "./components/Column1";
import Column2 from "./components/Column2";
import Column3 from "./components/Column3";
import { useEffect, useState } from "react";
import BookingBill from "./components/bookingsBill/components/BookingBill";
import { CreateBookingDTO } from "./dto/booking.dto";

export default function Bookings() {
  const [showBill, setShowBill] = useState<boolean>(false);
  const [dataBooking, setDataBooking] = useState<CreateBookingDTO>();

  const { methods, bookingsForChildren } = useFormBooking();

  useEffect(() => {
    if (showBill) {
      document.body.classList.add("overflow-hidden", "touch-pan-y");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [showBill]);

  const onSubmit = (data: CreateBookingDTO) => {
    setDataBooking(data);
    setShowBill(true);
  };

  console.log(methods.watch());

  const handleCloseBill = () => {
    setShowBill(false);
  };

  return (
    <div
      id={NavBarId.BOOKINGS}
      className="flex justify-center items-center py-16 px-5"
    >
      <div className="flex flex-col max-w-[1200px] w-full justify-center items-center">
        <div className="uppercase">Book A Table</div>
        <div className="font-amatic text-[48px] pb-5 text-center max-xs:text-[38px]">
          {"Book "}
          <span className="text-red text-[48px] max-xs:text-[38px]">
            Your Stay
          </span>
          {" With Us"}
        </div>
        <div className="w-full">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div
              className={clsx(
                "grid grid-cols-3 w-full border shadow-xl p-10 rounded-xl",
                "max-sm:p-0 max-sm:py-3",
                "max-md:flex max-md:flex-col"
              )}
            >
              <Column1 />
              <Column2 methods={methods} />
              <Column3
                methods={methods}
                bookingsForChildren={bookingsForChildren}
              />
            </div>
          </form>
        </div>
      </div>
      {showBill && dataBooking && (
        <BookingBill
          dataBooking={dataBooking}
          handleCloseBill={handleCloseBill}
        />
      )}
    </div>
  );
}
