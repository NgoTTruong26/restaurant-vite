import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
  Image,
  Modal,
  ModalContent,
  Pagination,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import clsx from 'clsx';
import DialogModal from 'components/DialogModal';
import { queryClient } from 'configs/queryClient';
import OrderDetails from 'modules/customer/components/bookingLookup/components/OrderDetails';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdEventRepeat } from 'react-icons/md';
import { useCancelBooking } from '../../services/cancelBooking';
import { EBookingStatus } from '../dto/booking-status.dto';
import useGetBookingsTable from '../hooks/useGetBookings';
import LoadingListBooking from './LoadingListBooking';
import ReOrder from './ReOrder';

interface Props {
  bookingStatus?: keyof typeof EBookingStatus;
  cancellation?: boolean;
}

export default function ListBookingsTable({
  bookingStatus,
  cancellation,
}: Props) {
  const [page, setPage] = useState<number>(1);

  const [totalPages, setTotalPages] = useState<number>(1);

  const [booking, setBooking] = useState<string>('');

  const disclosureOrderDetails = useDisclosure();

  const disclosureReOrder = useDisclosure();

  const disclosureDialogcancelBooking = useDisclosure();

  const { data, status } = useGetBookingsTable({
    page: page,
    status: bookingStatus,
    cancellation,
  });

  const cancelBooking = useCancelBooking();

  useEffect(() => {
    if (data?.data) {
      setTotalPages(Math.ceil(data.data.meta.total / data.data.meta.take));
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full pt-5 space-y-4">
        {status === 'loading' ? (
          <LoadingListBooking />
        ) : data?.data ? (
          data.data.data.map((booking) => (
            <Card
              key={booking.id}
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50"
              shadow="sm"
            >
              <CardBody>
                <div className="flex gap-4 justify-between max-sm:flex-col max-sm:items-center">
                  <div className="flex items-center relative">
                    <Card
                      isFooterBlurred
                      radius="lg"
                      shadow="none"
                      className="border-none min-w-[180px]"
                    >
                      <Image
                        width={200}
                        alt={booking.buffetMenu.name}
                        className="object-cover"
                        src={booking.buffetMenu.image}
                      />
                      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-lg font-medium text-red-500">
                          Prices:{' '}
                          {new Intl.NumberFormat().format(
                            booking.buffetMenu.price,
                          )}
                          đ
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="flex flex-col space-y-1 max-sm:items-center">
                        <div className="text-lg text-primary font-semibold">
                          Set {booking.buffetMenu.name}K
                        </div>
                        <div className="flex">
                          {booking.cancellation ? (
                            <Chip
                              size="sm"
                              className={clsx('text-white bg-danger')}
                            >
                              CANCELLED
                            </Chip>
                          ) : (
                            <Chip
                              size="sm"
                              className={clsx('text-white', {
                                'bg-zinc-400':
                                  booking.bookingStatus.name === 'PENDING',
                                'bg-blue-300':
                                  booking.bookingStatus.name === 'CONFIRMED',
                                'bg-success':
                                  booking.bookingStatus.name === 'SUCCESS',
                              })}
                            >
                              {booking.bookingStatus.name}
                            </Chip>
                          )}
                        </div>
                        <div>
                          Quantity:{' '}
                          {booking.bookingsForChildren.reduce(
                            (prevs: number, curr) => {
                              return prevs + curr.quantity;
                            },
                            booking.numberPeople,
                          )}
                        </div>
                      </div>
                      <Tooltip showArrow={true} content="Re-order">
                        <Button
                          variant="flat"
                          color="primary"
                          onClick={() => {
                            setBooking(booking.id);
                            disclosureReOrder.onOpen();
                          }}
                          children={<MdEventRepeat size={25} />}
                          isIconOnly
                        />
                      </Tooltip>
                    </div>
                    <Divider className="my-4" />
                    <div className="w-full flex justify-between gap-3 max-md:flex-col">
                      <div className="flex justify-center">
                        <div className="text-lg">
                          <span>Total price: </span>
                          <span className="text-[#ee4d2d] text-2xl">
                            {new Intl.NumberFormat().format(
                              booking.invoicePrice.price *
                                (booking.invoicePrice.VAT.tax / 100 + 1),
                            )}
                            đ
                          </span>
                        </div>
                      </div>
                      <div
                        className={clsx(
                          'flex justify-center gap-5 pb-5 px-5',
                          'max-sm:flex-col',
                        )}
                      >
                        <Button
                          color="primary"
                          onClick={() => {
                            setBooking(booking.id);
                            disclosureOrderDetails.onOpen();
                          }}
                        >
                          Order details
                        </Button>
                        {!booking.cancellation ? (
                          booking.bookingStatus.name !== 'SUCCESS' && (
                            <Button
                              color="primary"
                              onClick={() => {
                                disclosureDialogcancelBooking.onOpen();
                                setBooking(booking.id);
                              }}
                            >
                              Cancel Booking
                            </Button>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <></>
        )}
      </div>

      <Pagination
        showControls
        total={totalPages}
        onChange={setPage}
        className="flex justify-center w-full "
        classNames={{
          item: 'min-w-[36px] min-h-[36px]',
          next: 'min-w-[36px] min-h-[36px]',
          prev: 'min-w-[36px] min-h-[36px]',
          wrapper: ' overflow-x-auto overflow-y-hidden',
        }}
      />

      {booking && (
        <Modal
          backdrop="blur"
          isOpen={disclosureOrderDetails.isOpen}
          onClose={disclosureOrderDetails.onClose}
          placement="center"
        >
          <ModalContent className="max-w-800 max-h-[80vh] overflow-y-auto">
            {(onClose) => (
              <OrderDetails handleCloseOrder={onClose} getBooking={booking} />
            )}
          </ModalContent>
        </Modal>
      )}
      {booking && (
        <Modal
          backdrop="blur"
          isOpen={disclosureReOrder.isOpen}
          onClose={disclosureReOrder.onClose}
          placement="center"
        >
          <ModalContent className="max-w-800 max-h-[80vh] overflow-y-auto py-5">
            {(onClose) => (
              <ReOrder handleCloseOrder={onClose} getBooking={booking} />
            )}
          </ModalContent>
        </Modal>
      )}

      <Modal
        isDismissable={false}
        isOpen={disclosureDialogcancelBooking.isOpen}
        onClose={disclosureDialogcancelBooking.onClose}
        className="max-w-600"
      >
        <ModalContent>
          {(onClose) => (
            <DialogModal
              textHeader={`Cancel Booking`}
              body={
                <span>
                  Are you sure you want to Cancel Booking{' '}
                  <strong>"{booking}"</strong>?
                </span>
              }
              btnAcceptProps={{
                children: 'Accept',
                isLoading: cancelBooking.isLoading,
                onClick: () =>
                  cancelBooking.mutate(
                    { idBooking: booking },
                    {
                      onSuccess: () => {
                        queryClient
                          .refetchQueries({
                            queryKey: ['get_bookings_table'],
                          })
                          .then(() => {
                            toast.success('Cancel booking successfully');
                            onClose();
                          });
                      },
                    },
                  ),
              }}
              onClose={onClose}
            />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
