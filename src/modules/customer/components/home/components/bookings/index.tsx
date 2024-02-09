import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { NavBarId } from 'Layout/constant';
import clsx from 'clsx';
import { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/app/store';
import Column1 from './components/Column1';
import Column2 from './components/Column2';
import Column3 from './components/Column3';
import BookingBillModal from './components/bookingsBill/components/BookingBillModal';
import { CreateBookingDTO } from './dto/booking.dto';
import useFormBooking from './hooks/useFormBooking';

export default function Bookings() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [dataBooking, setDataBooking] = useState<CreateBookingDTO>();

  const userId = useSelector((state: RootState) => state.auth.value?.id);

  const { methods, bookingsForChildren } = useFormBooking();

  const onSubmit = (data: CreateBookingDTO) => {
    setDataBooking(() => {
      if (userId) {
        return {
          ...data,
          userId,
        };
      }
      return data;
    });
    onOpen();
  };

  return (
    <div
      id={NavBarId.BOOKINGS}
      className="flex justify-center items-center py-16 px-5"
    >
      <div className="flex flex-col max-w-[1200px] w-full justify-center items-center">
        <div className="uppercase">Book A Table</div>
        <div className="font-amatic text-[48px] pb-5 text-center max-xs:text-[38px]">
          {'Book '}
          <span className="text-primary text-[48px] max-xs:text-[38px]">
            Your Stay
          </span>
          {' With Us'}
        </div>
        <div className="w-full">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div
                className={clsx(
                  'grid grid-cols-3 w-full border shadow-xl p-10 rounded-xl',
                  'max-sm:p-0 max-sm:py-3',
                  'max-md:flex max-md:flex-col',
                )}
              >
                <Column1 />
                <Column2 />
                <Column3 bookingsForChildren={bookingsForChildren} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
      {dataBooking && (
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeIn',
                },
              },
            },
          }}
          className="max-w-800 max-h-[80vh] overflow-y-auto"
        >
          <ModalContent>
            {(onClose) => (
              <BookingBillModal
                dataBooking={dataBooking}
                handleCloseBill={onClose}
              />
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
