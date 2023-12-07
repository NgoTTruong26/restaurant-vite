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
import { useEffect } from 'react';

import { ModalBody, ModalHeader } from '@nextui-org/react';
import { queryClient } from 'main';
import OrderNotFound from 'modules/customer/components/bookingLookup/components/OrderNotFound';
import { FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import LoadingReOrder from './LoadingReOrder';

interface Props {
  handleCloseOrder: () => void;
  getBooking: string;
}

const ReOrder: React.FC<Props> = ({ getBooking, handleCloseOrder }) => {
  const createBooking = useCreateBooking();

  const { data, status } = useGetBooking({
    getBooking: getBooking,
  });

  const dataChildrenCategory = useGetChildrenCategory();

  const { methods, bookingsForChildren } = useFormBooking();

  useEffect(() => {
    if (data) {
      methods.reset({
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
      onSuccess() {
        queryClient.refetchQueries(['get_bookings_table']);

        toast.success('Create bookings success');
        handleCloseOrder();
      },
    });
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1 text-4xl text-center text-primary">
        ReOrder
      </ModalHeader>

      <ModalBody className="flex items-center">
        {status === 'loading' ? (
          <LoadingReOrder />
        ) : data ? (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
              <div
                className={clsx(
                  'grid grid-cols-2 w-full',
                  'max-sm:p-0 max-sm:py-3',
                  'max-md:flex max-md:flex-col',
                )}
              >
                <Column2 buffetMenu={data.buffetMenu.id} />
                <Column3
                  isLoading={createBooking.isLoading}
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
          </FormProvider>
        ) : (
          <OrderNotFound />
        )}
      </ModalBody>
    </>
  );
};

export default ReOrder;
