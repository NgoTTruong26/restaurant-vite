import clsx from "clsx";
import useGetBookingsTable from "../hooks/useGetBookings";
import { useEffect, useState } from "react";
import OrderDetails from "modules/bookingLookup/components/OrderDetails";
import ReOrder from "./ReOrder";

export default function ListBookingsTable() {
  const [showOrder, setShowOrder] = useState<boolean>(false);

  const [showReOrder, setShowReOrder] = useState<boolean>(false);

  const [getBooking, setGetBooking] = useState<string>();

  useEffect(() => {
    if (showOrder) {
      document.body.classList.add("overflow-hidden", "touch-pan-y");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [showOrder]);

  const { data } = useGetBookingsTable();

  // thêm status cancellation to db
  // tạo 1 route chỉ gọi những status khác cancellation

  const handleCloseOrder = () => {
    setShowOrder(false);
  };

  const handleCloseReOrder = () => {
    setShowReOrder(false);
  };

  return data ? (
    <div className="pt-5 [&>div+div]:mt-8">
      {data.map((booking, idx) => (
        <div key={idx} className=" bg-[#ffffff] rounded-2xl shadow-lg ">
          <div
            className={clsx(
              "hero-content gap-5",
              "max-xs:flex-col max-xs:items-start"
            )}
          >
            <img
              src={booking.buffetMenu.image}
              className="max-w-[120px] rounded-lg shadow-2xl"
            />
            <div className="w-full">
              <div className="font-bold text-2xl">
                Set {booking.buffetMenu.name}K
              </div>
              <div>
                <div className="flex">
                  <div
                    className={clsx({
                      "text-xs text-[#cc38e1] bg-[#cc38e121] p-1 mb-1":
                        booking.bookingStatus.step === 1,
                      "text-xs text-[#0c53b7] bg-[#3366ff14] p-1 mb-1":
                        booking.bookingStatus.step === 2,
                      "text-xs text-[#007b55] bg-[#00ab5514] p-1 mb-1":
                        booking.bookingStatus.step === 3,
                      "text-xs text-[#d70018] bg-[#ff484214] p-1 mb-1":
                        booking.cancellation,
                    })}
                  >
                    {booking.bookingStatus.name}
                  </div>
                </div>

                <p className="">
                  {new Intl.NumberFormat().format(booking.buffetMenu.price)}đ
                </p>
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap">
                SL:{" "}
                {booking.bookingsForChildren.reduce((prevs: number, curr) => {
                  return prevs + curr.quantity;
                }, booking.numberPeople)}
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="border-t border-[#ebebf0]"></div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col gap-3">
              <div className="flex justify-center">
                <div className="text-lg">
                  <span>Tổng tiền: </span>
                  <span className="text-[#ee4d2d] text-2xl">
                    {new Intl.NumberFormat().format(
                      booking.invoicePrice.price *
                        (booking.invoicePrice.VAT.tax / 100 + 1)
                    )}
                    đ
                  </span>
                </div>
              </div>
              <div className={clsx("flex gap-5 pb-5 px-5", "max-xs:flex-col")}>
                <button
                  onClick={() => {
                    setGetBooking(booking.id);
                    setShowReOrder(true);
                  }}
                  className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]"
                >
                  Đặt bàn lại
                </button>
                <button
                  onClick={() => {
                    setGetBooking(booking.id);
                    setShowOrder(true);
                  }}
                  className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showOrder && getBooking && (
        <div className="fixed top-0 left-0 right-0 z-30">
          <OrderDetails
            handleCloseOrder={handleCloseOrder}
            getBooking={getBooking}
          />
        </div>
      )}

      {showReOrder && getBooking && (
        <div className="fixed top-0 left-0 right-0 z-30">
          <ReOrder
            handleCloseOrder={handleCloseReOrder}
            getBooking={getBooking}
          />
        </div>
      )}
    </div>
  ) : (
    <></>
  );
}
