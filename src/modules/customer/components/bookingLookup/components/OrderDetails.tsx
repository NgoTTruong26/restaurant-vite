import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import clsx from 'clsx';
import Steps from 'components/Steps';
import { AiOutlineUser } from 'react-icons/ai';
import { BiPhone, BiTime } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import useGetBooking from '../hooks/useGetBooking';
import LoadingOrderDetail from './LoadingOrderDetail';
import OrderNotFound from './OrderNotFound';

interface Props {
  handleCloseOrder: () => void;
  getBooking: string;
}

const OrderDetails: React.FC<Props> = ({ handleCloseOrder, getBooking }) => {
  const { data, status } = useGetBooking({
    getBooking: getBooking,
  });

  const totalBill: number =
    data?.bookingsForChildren?.reduce(
      (prevs: number, curr) => {
        return (
          prevs +
          ((100 - curr.childrenCategory.deals) / 100) *
            (data?.buffetMenu.price || 0) *
            curr.quantity
        );
      },
      (data?.buffetMenu.price || 0) * (data?.numberPeople || 0),
    ) || 0;

  return (
    <>
      <ModalHeader className="flex flex-col gap-1 text-4xl text-center text-primary">
        My Order
      </ModalHeader>
      <ModalBody className="flex items-center">
        {status === 'loading' ? (
          <LoadingOrderDetail />
        ) : data ? (
          <div className="w-full space-y-5 min-w-[300px]">
            <div className="flex justify-center">
              <div className="w-4/5">
                <Steps
                  arrSteps={data.allBookingStatus.map((status) => ({
                    label: status.name,
                    step: status.step,
                  }))}
                  currentStep={data.bookingStatus.step}
                />
              </div>
            </div>
            <div className="pb-5">
              <div className="font-medium ">
                <div className="text-[28px] font-medium max-sm:text-[20px]">
                  Order Detail
                </div>
                <div
                  className={clsx(
                    'flex justify-between gap-20 mt-3 px-10 py-3 leading-8 bg-[#eee] rounded-2xl',
                    'max-sm:flex-col max-sm:gap-0',
                  )}
                >
                  <div>
                    <div className="flex items-center">
                      <BsCalendar2Date size={20} />
                      <div className="pl-2">
                        Created date:{' '}
                        <span className="text-primary">
                          {new Date().toLocaleDateString('en-GB')}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BiTime size={20} />
                      <div className="pl-2">
                        Created time:{' '}
                        <span className="text-primary">
                          {new Date().toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" max-sm:pl-0 max-sm:pt-2">
                    <div className="flex items-center">
                      <BsCalendar2Date size={20} />
                      <div className="pl-2">
                        Booking date:{' '}
                        <span className="text-primary">
                          {new Date(data.bookingDate).toLocaleDateString(
                            'en-GB',
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BiTime size={20} />
                      <div className="pl-2">
                        Booking time:{' '}
                        <span className="text-primary">
                          {new Date(
                            `${data.bookingDate} ${data.bookingTime}`,
                          ).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    'flex justify-between gap-20 mt-3 px-10 py-3 bg-[#eee] rounded-2xl',
                    ' max-sm:flex-col max-sm:gap-0',
                  )}
                >
                  <div className="flex items-center">
                    <AiOutlineUser size={20} />
                    <div className="pl-2">
                      Author:{' '}
                      <span className="text-primary">{data.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center max-sm:pl-0 max-sm:pt-2">
                    <BiPhone size={20} />
                    <div className="pl-2">
                      Phone Number:{' '}
                      <span className="text-primary">{data.phoneNumber}</span>
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
                            <div className="text-primary">
                              Prices:{' '}
                              {new Intl.NumberFormat().format(
                                data.buffetMenu.price,
                              )}
                              <span className="relative font-bold text-[12px] top-[-1.5px]">
                                ₫
                              </span>
                            </div>
                          </div>
                          <div className="text-primary">
                            Quantity:{' '}
                            {data?.bookingsForChildren.reduce(
                              (prevs: number, curr) => {
                                return prevs + curr.quantity;
                              },
                              data?.numberPeople,
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
                Order details
              </div>
              <div className="px-10 [&>div+div]:pt-2">
                <div>
                  <div className="">Quantity:</div>
                  <div className="pt-1">
                    <div className="pl-5 [&>div+div]:pt-2">
                      <div className="flex gap-20 justify-between items-center">
                        <div>Adult:</div>
                        <div className="text-primary">{data.numberPeople}</div>
                      </div>
                      {data.bookingsForChildren.map(
                        (children, idx) =>
                          children.quantity > 0 && (
                            <div
                              key={idx}
                              className="flex gap-20 justify-between items-center"
                            >
                              <div>
                                Children {children.childrenCategory.category}:
                              </div>
                              <div className="text-primary">
                                {children.quantity}
                              </div>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between max-sm:flex-col">
                  <div className="">Note:</div>
                  <div className="pl-2 max-sm:pl-0 text-primary">
                    {data.note || 'Không có'}
                  </div>
                </div>
                <div className="flex justify-between max-sm:flex-col">
                  <div>Hotline:</div>
                  <div className="pl-2 max-sm:pl-0 text-primary">
                    0988888888
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 font-medium">
              <div className="text-[28px] font-medium max-sm:text-[20px]">
                Provisional total amount
              </div>
              <div className="px-10">
                <div className="border-b pb-5 [&>div+div]:pt-2 [&>div]:items-center">
                  <div className="flex gap-20 justify-between">
                    <div className="font-medium capitalize">
                      {data.numberPeople} x set Adult {data.buffetMenu.name}K
                    </div>
                    <div className="text-primary">
                      {new Intl.NumberFormat().format(
                        (data?.buffetMenu.price || 0) *
                          (data?.numberPeople || 0),
                      )}
                    </div>
                  </div>
                  {data.bookingsForChildren.map(
                    (children, idx) =>
                      children.quantity > 0 && (
                        <div key={idx} className="flex gap-20 justify-between">
                          <div className="flex gap-2 items-center">
                            <div className="font-medium capitalize">
                              {children.quantity} x Set Children{' '}
                              {data.buffetMenu.name}K{' '}
                              {children.childrenCategory.category}
                            </div>
                            <div className="py-1 px-2 text-primary bg-[#faebd7]">
                              <div>-{children.childrenCategory.deals}%</div>
                            </div>
                          </div>
                          <div className="text-primary">
                            {new Intl.NumberFormat().format(
                              ((100 - children.childrenCategory.deals) / 100) *
                                (data?.buffetMenu.price || 0) *
                                children.quantity,
                            )}
                          </div>
                        </div>
                      ),
                  )}
                  <div className="flex gap-20 justify-between">
                    <div className="font-medium">VAT 5%</div>
                    <div className="text-primary">
                      {new Intl.NumberFormat().format(totalBill * 0.05)}
                    </div>
                  </div>
                </div>
                <div className="pt-5 flex gap-20 justify-between text-[18px] font-medium max-sm:text-[20px]">
                  <div>Total</div>
                  <div className="text-primary">
                    {new Intl.NumberFormat().format(
                      totalBill + totalBill * 0.05,
                    )}
                    <span className="relative font-bold text-[12px] top-[-3.5px]">
                      ₫
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <OrderNotFound />
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onPress={handleCloseOrder}>
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
};

export default OrderDetails;
