import clsx from "clsx";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone, BiTime } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import LoadingOrderDetail from "./LoadingOrderDetail";
import { useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import useGetBooking from "../hooks/useGetBooking";
import OrderNotFound from "./OrderNotFound";

interface Props {
  handleCloseOrder: () => void;
  getBooking: string;
}

const OrderDetails: React.FC<Props> = ({ handleCloseOrder, getBooking }) => {
  const { data, status } = useGetBooking({
    getBooking: getBooking,
  });

  const ref = useRef<HTMLDivElement>(null);

  const totalBill: number =
    data?.bookingsForChildren?.reduce((prevs: number, curr) => {
      return (
        prevs +
        ((100 - curr.childrenCategory.deals) / 100) *
          (data?.buffetMenu.price || 0) *
          curr.quantity
      );
    }, (data?.buffetMenu.price || 0) * (data?.numberPeople || 0)) || 0;

  return status === "loading" ? (
    <LoadingOrderDetail />
  ) : (
    <div
      onClick={() => {
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
          handleCloseOrder();
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
          {data ? (
            <div className="[&>div]:pt-5">
              <div className="flex justify-center">
                <ul className="w-full steps gap-3">
                  {data.allBookingStatus.map((status, idx) => (
                    <li
                      key={idx}
                      className={clsx("step", {
                        "step-info": status.step <= data.bookingStatus.step,
                      })}
                    >
                      {status.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-5">
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
                          {data &&
                            new Date(data?.bookingDate).toLocaleDateString(
                              "en-GB"
                            )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <BiTime size={20} />
                        <div className="pl-2">
                          Giờ đặt bàn:{" "}
                          {new Date(
                            `${data?.bookingDate} ${data?.bookingTime}`
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
                      <div className="pl-2">Người đặt bàn: {data?.author}</div>
                    </div>
                    <div className="flex items-center max-sm:pl-0 max-sm:pt-2">
                      <BiPhone size={20} />
                      <div className="pl-2">
                        Số điện thoại: {data?.phoneNumber}
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
                          <img
                            src={data.buffetMenu.image}
                            alt={data.buffetMenu.name}
                          />
                        </div>
                        <div className="flex items-center w-full font-medium">
                          <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start">
                            <div>
                              <div>Set {data.buffetMenu.name}K</div>
                              <div>
                                Giá:{" "}
                                {new Intl.NumberFormat().format(
                                  data.buffetMenu.price
                                )}
                                <span className="relative font-bold text-[12px] top-[-1.5px]">
                                  ₫
                                </span>
                              </div>
                            </div>
                            <div>
                              SL:{" "}
                              {data?.bookingsForChildren.reduce(
                                (prevs: number, curr) => {
                                  console.log(prevs, curr);
                                  return prevs + curr.quantity;
                                },
                                data?.numberPeople
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="pb-5 border-y [&>div]:pt-2">
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
                          <div>{data?.numberPeople}</div>
                        </div>
                        {data?.bookingsForChildren.map((children, idx) => (
                          <div
                            key={idx}
                            className="flex gap-20 justify-between items-center"
                          >
                            <div>
                              Trẻ Em {children.childrenCategory.category}:
                            </div>
                            <div>{children.quantity}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between max-sm:flex-col">
                    <div className="">Ghi chú:</div>
                    <div className="pl-2 max-sm:pl-0">
                      {data?.note || "Không có"}
                    </div>
                  </div>
                  <div className="flex justify-between max-sm:flex-col">
                    <div>Hotline nhà hàng:</div>
                    <div className="pl-2 max-sm:pl-0">0988888888</div>
                  </div>
                </div>
              </div>
              <div className=" font-medium">
                <div className="text-[28px] font-medium max-sm:text-[20px]">
                  Tạm tính
                </div>
                <div className="px-10">
                  <div className="border-b pb-5 [&>div+div]:pt-2 [&>div]:items-center">
                    <div className="flex gap-20 justify-between">
                      <div className="font-medium">
                        {data?.numberPeople} x Set người lớn{" "}
                        {data?.buffetMenu.price}K
                      </div>
                      <div>
                        {new Intl.NumberFormat().format(
                          (data?.buffetMenu.price || 0) *
                            (data?.numberPeople || 0)
                        )}
                      </div>
                    </div>
                    {data?.bookingsForChildren.map(
                      (children, idx) =>
                        children.quantity > 0 && (
                          <div
                            key={idx}
                            className="flex gap-20 justify-between"
                          >
                            <div className="flex gap-2 items-center">
                              <div className="font-medium">
                                {children.quantity} x Set trẻ em dưới 1m3{" "}
                                {data?.buffetMenu.price}K
                              </div>
                              <div className="py-1 px-2 text-red bg-[#faebd7]">
                                <div>-{children.childrenCategory.deals}%</div>
                              </div>
                            </div>
                            <div>
                              {new Intl.NumberFormat().format(
                                ((100 - children.childrenCategory.deals) /
                                  100) *
                                  (data?.buffetMenu.price || 0) *
                                  children.quantity
                              )}
                            </div>
                          </div>
                        )
                    )}
                    <div className="flex gap-20 justify-between">
                      <div className="font-medium">Thuế VAT 5%</div>
                      <div>
                        {new Intl.NumberFormat().format(totalBill * 0.05)}
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 flex gap-20 justify-between text-[18px] font-medium max-sm:text-[20px]">
                    <div>Tổng cộng</div>
                    <div>
                      {new Intl.NumberFormat().format(
                        totalBill + totalBill * 0.05
                      )}
                      <span className="relative font-bold text-[12px] top-[-3.5px]">
                        ₫
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-8">
                <div
                  onClick={() => {
                    ref.current?.classList.add("!opacity-0");
                  }}
                  className="p-3 font-medium text-[#ffffff] bg-red hover:!bg-[#e51717] rounded-xl cursor-pointer"
                >
                  Xác nhận
                </div>
              </div>
            </div>
          ) : (
            <OrderNotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
