import clsx from 'clsx';
import useGetBooking from 'modules/customer/components/bookingLookup/hooks/useGetBooking';
import Column2 from 'modules/customer/components/home/components/bookings/components/Column2';
import Column3 from 'modules/customer/components/home/components/bookings/components/Column3';
import useCreateBooking from 'modules/customer/components/home/components/bookings/components/bookingsBill/hooks/useCreateBooking';
import {
  CreateBookingDTO,
  CreateBookingsForChildren,
} from 'modules/customer/components/home/components/bookings/dto/booking.dto';
import { GetChildrenCategoryDTO } from 'modules/customer/components/home/components/bookings/dto/get-children-category.dto';
import useFormBooking from 'modules/customer/components/home/components/bookings/hooks/useFormBooking';
import useGetChildrenCategory from 'modules/customer/components/home/components/bookings/hooks/useGetChildrenCategory';
import { useEffect, useRef } from 'react';

import { queryClient } from 'main';
import { GrFormClose } from 'react-icons/gr';
import { GetBookingAuthDTO } from '../dto/get-booking-auth.dto';
import LoadingReOrder from './LoadingReOrder';

interface Props {
  handleCloseOrder: () => void;
  getBooking: string;
}

const ReOrder: React.FC<Props> = ({ getBooking, handleCloseOrder }) => {
  const ref = useRef<HTMLDivElement>(null);

  const createBooking = useCreateBooking<GetBookingAuthDTO>();

  const { data, status } = useGetBooking({
    getBooking: getBooking,
  });

  const dataChildrenCategory = useGetChildrenCategory();

  const { methods, bookingsForChildren } = useFormBooking();

  useEffect(() => {
    if (data) {
      methods.reset({
        userId: data.user?.id,
        numberPeople: data.numberPeople,
        buffetMenu: data.buffetMenu.id,
        note: data.note,
        author: data.author,
        phoneNumber: data.phoneNumber,
        bookingsForChildren: data.bookingsForChildren.map((val) => ({
          childrenCategory: val.childrenCategory.category,
          childrenCategoryId: val.childrenCategory.id,
          deals: val.childrenCategory.deals,
          quantity: val.quantity,
        })),
      });
    }
  }, [data]);

  const initChildrenCategoryId: (
    bookingsForChildren: CreateBookingsForChildren[],
  ) => string[] = (bookingsForChildren) => {
    return bookingsForChildren.map((val) => val.childrenCategoryId);
  };

  const checkEnoughtChildrenCategory: (
    data?: GetChildrenCategoryDTO[],
    bookingsForChildren?: CreateBookingsForChildren[],
  ) => boolean | undefined = (data, bookingsForChildren) => {
    return data?.every((item) => {
      if (bookingsForChildren) {
        return bookingsForChildren
          .map((val) => val.childrenCategoryId)
          .includes(item.id);
      }

      return false;
    });
  };

  const onSubmit = (data: CreateBookingDTO) => {
    createBooking.mutate(data, {
      onSuccess(data) {
        const token: string | null = localStorage.getItem(
          import.meta.env.VITE_ACCESS_TOKEN,
        );
        queryClient.setQueryData<GetBookingAuthDTO[] | undefined>(
          [`get_bookings_table_${token}`],
          (oldData) => {
            if (oldData) {
              oldData.unshift(data.data!);
            }

            return oldData;
          },
        );
      },
      onSettled: () => {
        handleCloseOrder();
      },
    });
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleCloseOrder();
      }}
      className="fixed top-0 flex w-full h-full items-center justify-center bg-[#0009] z-30 px-5 "
    >
      <div
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-[1000px] w-full animate-opacity bg-[#fff] max-h-[80vh] rounded-3xl border-2 border-[#eee] overflow-hidden opacity-100 transition-all duration-150"
      >
        <div
          className={clsx(
            'relative py-10 px-8 max-h-[80vh] h-full overflow-y-auto ',
            'max-sm:p-5 ',
          )}
        >
          <span className="sticky flex justify-end right-4 top-0 ">
            <GrFormClose
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseOrder();
              }}
              size={25}
            />
          </span>
          <div className="text-[38px] font-medium text-center max-sm:text-[28px]">
            ReOrder
          </div>
          {status === 'loading' ? (
            <LoadingReOrder />
          ) : (
            <div>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div
                  className={clsx(
                    'grid grid-cols-2 w-full border shadow-xl p-10 rounded-xl',
                    'max-sm:p-0 max-sm:py-3',
                    'max-md:flex max-md:flex-col',
                  )}
                >
                  <Column2 methods={methods} />
                  <Column3
                    methods={methods}
                    bookingsForChildren={bookingsForChildren}
                    initChildrenCategoryId={
                      methods.getValues('bookingsForChildren')
                        ? initChildrenCategoryId(
                            methods.getValues('bookingsForChildren'),
                          )
                        : []
                    }
                    enoughtChildrenCategory={checkEnoughtChildrenCategory(
                      dataChildrenCategory?.data,
                      methods.getValues('bookingsForChildren'),
                    )}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReOrder;
