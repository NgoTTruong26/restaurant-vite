import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import clsx from 'clsx';
import Field from 'components/field';
import { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { GoSearch } from 'react-icons/go';
import OrderDetails from './components/OrderDetails';
import {
  InputBookingLookup,
  useFormBookingLookup,
} from './hooks/useFormBookingLookup';

export default function BookingLookup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { methods } = useFormBookingLookup();

  const [getBooking, setGetBooking] = useState<string>();

  const onSubmit = (data: InputBookingLookup) => {
    setGetBooking(data.idBooking);
    onOpen();
  };

  return (
    <div className="flex-1 flex items-center justify-center px-5 pt-36 pb-16 bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat">
      <FormProvider {...methods}>
        <form
          className="flex w-full items-center max-w-[800px] "
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Field
            startContent={
              <GoSearch className="text-[28px] max-sm:text-[14px]" />
            }
            endContent={
              <>
                {methods.watch('idBooking') && (
                  <div
                    className={clsx(
                      'px-4 font-medium underline underline-offset-4 text-[18px] cursor-pointer',
                      'max-sm:hidden max-sm:text-[14px]',
                    )}
                    onClick={() => methods.setValue('idBooking', '')}
                  >
                    Clear
                  </div>
                )}
                <Button
                  children={
                    <>
                      <div className="max-sm:hidden">Tìm kiếm</div>
                      <div className="min-[449px]:hidden">
                        <GoSearch className="text-[14px]" />
                      </div>
                    </>
                  }
                  color="primary"
                  type="submit"
                />
              </>
            }
            t="input"
            name="idBooking"
            placeholder="Nhập ID đơn hàng"
            classNames={{
              inputWrapper: 'bg-white',
              input: 'text-lg',
            }}
            size="lg"
          />
        </form>
      </FormProvider>
      {getBooking && (
        <Modal
          backdrop="blur"
          isOpen={isOpen}
          onClose={onClose}
          placement="center"
        >
          <ModalContent className="max-w-800 max-h-[80vh] overflow-y-auto">
            {(onClose) => (
              <OrderDetails
                handleCloseOrder={onClose}
                getBooking={getBooking}
              />
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
