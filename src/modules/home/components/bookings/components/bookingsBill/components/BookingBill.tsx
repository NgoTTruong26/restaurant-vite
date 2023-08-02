import clsx from "clsx";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone, BiTime } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { CreateBookingDTO } from "modules/home/components/bookings/dto/booking.dto";
import useGetBuffetMenu from "../hooks/useGetBuffetMenu";
import { GrFormClose } from "react-icons/gr";
import React, { useRef } from "react";
import LoadingBookingBill from "./LoadingBookingBill";
import useCreateBooking from "../hooks/useCreateBooking";
import { toast } from "react-hot-toast";

interface Props {
  dataBooking: CreateBookingDTO;
  handleCloseBill: () => void;
}

const BookingBill: React.FC<Props> = ({ dataBooking, handleCloseBill }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { data, status } = useGetBuffetMenu({
    idBuffetMenu: dataBooking.buffetMenu,
  });

  const createBooking = useCreateBooking();

  console.log(createBooking.status);

  const totalBill: number =
    dataBooking.bookingsForChildren.reduce((prevs: number, curr) => {
      return (
        prevs + ((100 - curr.deals) / 100) * (data?.price || 0) * curr.quantity
      );
    }, (data?.price || 0) * dataBooking.numberPeople) * 1000;

  if (createBooking.status === "loading") {
    toast.loading("Waiting...", { id: "loading_create_booking" });
  }

  const onSubmit = (dataBooking: CreateBookingDTO) => {
    createBooking.mutate(dataBooking, {
      onSuccess({ status }) {
        console.log(status);

        toast.success("Create Booking Success");
      },
      onError() {
        toast.error("Create Booking Failed");
      },
      onSettled() {
        toast.dismiss("loading_create_booking");
        ref.current?.classList.add("!opacity-0");
      },
    });
  };

  return status === "loading" ? (
    <LoadingBookingBill />
  ) : (
    <div
      onClick={(e) => {
        e.stopPropagation();
        ref.current?.classList.add("!opacity-0");
      }}
      className="fixed top-0 flex w-full h-full items-center justify-center bg-[#0009] z-30 px-5 "
    >
      <div
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onTransitionEnd={() => {
          handleCloseBill();
        }}
        className=" max-w-[700px] w-full animate-opacity bg-[#fff] max-h-[80vh] rounded-3xl border-2 border-[#eee] overflow-hidden opacity-100 transition-all duration-150"
      >
        <div
          className={clsx(
            "relative py-10 px-8 max-h-[80vh] h-full overflow-y-auto ",
            "max-sm:p-5 "
          )}
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              ref.current?.classList.add("!opacity-0");
            }}
            className="sticky flex justify-end right-4 top-0 hover:cursor-pointer"
          >
            <GrFormClose size={25} />
          </span>
          <div className="text-[38px] font-medium text-center max-sm:text-[28px]">
            My Order
          </div>
          <div className="py-5">
            <div className="font-medium ">
              <div className="text-[28px] font-medium max-sm:text-[20px]">
                Order Detail
              </div>
              <div
                className={clsx(
                  "flex justify-between gap-20 mt-3 px-10 py-3 leading-8 bg-[#eee] rounded-2xl",
                  "max-sm:flex-col max-sm:gap-0"
                )}
              >
                <div>
                  <div className="flex items-center">
                    <BsCalendar2Date size={20} />
                    <div className="pl-2">
                      Ngày tạo đơn: {new Date().toLocaleDateString("en-GB")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BiTime size={20} />
                    <div className="pl-2">
                      Giờ tạo đơn:{" "}
                      {new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
                <div className=" max-sm:pl-0 max-sm:pt-2">
                  <div className="flex items-center">
                    <BsCalendar2Date size={20} />
                    <div className="pl-2">
                      Ngày đặt bàn:{" "}
                      {new Date(dataBooking.bookingDate).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BiTime size={20} />
                    <div className="pl-2">
                      Giờ đặt bàn:{" "}
                      {new Date(
                        `${dataBooking.bookingDate} ${dataBooking.bookingTime}`
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "flex justify-between gap-20 mt-3 px-10 py-3 bg-[#eee] rounded-2xl",
                  " max-sm:flex-col max-sm:gap-0"
                )}
              >
                <div className="flex items-center">
                  <AiOutlineUser size={20} />
                  <div className="pl-2">
                    Người đặt bàn: {dataBooking.author}
                  </div>
                </div>
                <div className="flex items-center max-sm:pl-0 max-sm:pt-2">
                  <BiPhone size={20} />
                  <div className="pl-2">
                    Số điện thoại: {dataBooking.phoneNumber}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="text-[28px] font-medium max-sm:text-[20px]">
                Order List
              </div>
              <div className="px-5">
                {data && (
                  <div className="flex gap-10 pt-3 items-center">
                    <div className="w-[40%] bg-[#eee] rounded-2xl">
                      <img src={data.image} alt={data.name} />
                    </div>
                    <div className="flex items-center w-full font-medium">
                      <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start">
                        <div>
                          <div>Set {data.name}K</div>
                          <div>
                            Giá:{" "}
                            {new Intl.NumberFormat().format(data.price * 1000)}
                            <span className="relative font-bold text-[12px] top-[-1.5px]">
                              ₫
                            </span>
                          </div>
                        </div>
                        <div>
                          SL:{" "}
                          {dataBooking.bookingsForChildren.reduce(
                            (prevs: number, curr) => {
                              return prevs + curr.quantity;
                            },
                            dataBooking.numberPeople
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-5 border-y [&>div]:pt-2">
            <div className="text-[28px] font-medium max-sm:text-[20px]">
              Chi tiết đơn hàng
            </div>
            <div className="px-10 [&>div+div]:pt-2">
              <div>
                <div className="">Số lượng:</div>
                <div className="pt-1">
                  <div className="pl-5 [&>div+div]:pt-2">
                    <div className="flex gap-20 justify-between items-center">
                      <div>Người Lớn:</div>
                      <div>{dataBooking.numberPeople}</div>
                    </div>
                    {dataBooking.bookingsForChildren.map(
                      (children, idx) =>
                        children.quantity > 0 && (
                          <div
                            key={idx}
                            className="flex gap-20 justify-between items-center"
                          >
                            <div>Trẻ Em {children.childrenCategory}:</div>
                            <div>{children.quantity}</div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between max-sm:flex-col">
                <div className="">Ghi chú:</div>
                <div className="pl-2 max-sm:pl-0">
                  {dataBooking.note || "Không có"}
                </div>
              </div>
              <div className="flex justify-between max-sm:flex-col">
                <div>Hotline nhà hàng:</div>
                <div className="pl-2 max-sm:pl-0">0988888888</div>
              </div>
            </div>
          </div>
          <div className="pt-5 font-medium">
            <div className="text-[28px] font-medium max-sm:text-[20px]">
              Tạm tính
            </div>
            <div className="px-10">
              <div className="border-b pb-5 [&>div+div]:pt-2 [&>div]:items-center">
                <div className="flex gap-20 justify-between">
                  <div className="font-medium">
                    {dataBooking.numberPeople} x Set người lớn {data?.name}K
                  </div>
                  <div>
                    {new Intl.NumberFormat().format(
                      (data?.price || 0) * dataBooking.numberPeople * 1000
                    )}
                  </div>
                </div>
                {dataBooking.bookingsForChildren.map(
                  (children, idx) =>
                    children.quantity > 0 && (
                      <div key={idx} className="flex gap-20 justify-between">
                        <div className="flex gap-2 items-center">
                          <div className="font-medium">
                            {children.quantity} x Set trẻ em dưới 1m3{" "}
                            {data?.name}K
                          </div>
                          <div className="py-1 px-2 text-red bg-[#faebd7]">
                            <div>-{children.deals}%</div>
                          </div>
                        </div>
                        <div>
                          {new Intl.NumberFormat().format(
                            ((100 - children.deals) / 100) *
                              (data?.price || 0) *
                              children.quantity *
                              1000
                          )}
                        </div>
                      </div>
                    )
                )}
                <div className="flex gap-20 justify-between">
                  <div className="font-medium">Thuế VAT 5%</div>
                  <div>{new Intl.NumberFormat().format(totalBill * 0.05)}</div>
                </div>
              </div>
              <div className="pt-5 flex gap-20 justify-between text-[18px] font-medium max-sm:text-[20px]">
                <div>Tổng cộng</div>
                <div>
                  {new Intl.NumberFormat().format(totalBill + totalBill * 0.05)}
                  <span className="relative font-bold text-[12px] top-[-3.5px]">
                    ₫
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-5 px-8">
            <div
              onClick={(e) => {
                e.stopPropagation();
                onSubmit(dataBooking);
              }}
              className="p-3 font-medium text-[#ffffff] bg-red hover:!bg-[#e51717] rounded-xl cursor-pointer"
            >
              Xác nhận
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBill;
