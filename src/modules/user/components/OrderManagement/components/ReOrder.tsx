import clsx from "clsx";
import useGetBooking from "modules/bookingLookup/hooks/useGetBooking";
import Column2 from "modules/home/components/bookings/components/Column2";
import Column3 from "modules/home/components/bookings/components/Column3";
import LoadingBookingBill from "modules/home/components/bookings/components/bookingsBill/components/LoadingBookingBill";
import useCreateBooking from "modules/home/components/bookings/components/bookingsBill/hooks/useCreateBooking";
import { CreateBookingDTO } from "modules/home/components/bookings/dto/booking.dto";
import useFormBooking from "modules/home/components/bookings/hooks/useFormBooking";
import useGetChildrenCategory from "modules/home/components/bookings/hooks/useGetChildrenCategory";
import { useEffect, useRef } from "react";

import { GrFormClose } from "react-icons/gr";

interface Props {
  handleCloseOrder: () => void;
  getBooking: string;
}

const ReOrder: React.FC<Props> = ({ getBooking, handleCloseOrder }) => {
  const ref = useRef<HTMLDivElement>(null);

  const createBooking = useCreateBooking();

  const { data, status } = useGetBooking({
    getBooking: getBooking,
  });

  const dataChildrenCategory = useGetChildrenCategory();

  const { methods, bookingsForChildren } = useFormBooking();

  useEffect(() => {
    methods.reset({
      author: "a",
      bookingsForChildren: data?.bookingsForChildren.map((val) => ({
        childrenCategory: val.childrenCategory.category,
        childrenCategoryId: val.childrenCategory.id,
        deals: val.childrenCategory.deals,
        quantity: val.quantity,
      })),
      buffetMenu: data?.buffetMenu.id,
      note: "hehe",
    });
  }, [data]);

  const onSubmit = (data: CreateBookingDTO) => {};

  return (
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
        className=" max-w-[1000px] w-full animate-opacity bg-[#fff] max-h-[80vh] rounded-3xl border-2 border-[#eee] overflow-hidden opacity-100 transition-all duration-150"
      >
        {status === "loading" ? (
          <LoadingBookingBill />
        ) : (
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
              ReOrder
            </div>
            <div>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div
                  className={clsx(
                    "grid grid-cols-2 w-full border shadow-xl p-10 rounded-xl",
                    "max-sm:p-0 max-sm:py-3",
                    "max-md:flex max-md:flex-col"
                  )}
                >
                  <Column2 methods={methods} />
                  <Column3
                    methods={methods}
                    bookingsForChildren={bookingsForChildren}
                    initChildrenCategoryId={
                      methods.getValues("bookingsForChildren")
                        ? methods
                            .getValues("bookingsForChildren")
                            .map((val) => val.childrenCategoryId)
                        : []
                    }
                    enoughtChildrenCategory={dataChildrenCategory?.data?.every(
                      (item) => {
                        if (methods.getValues("bookingsForChildren")) {
                          return methods
                            .getValues("bookingsForChildren")
                            .map((val) => val.childrenCategoryId)
                            .includes(item.id);
                        }

                        return false;
                      }
                    )}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReOrder;
