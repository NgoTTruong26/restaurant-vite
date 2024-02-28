import { Tab, Tabs } from '@nextui-org/react';
import clsx from 'clsx';
import ListBookingsTable from './components/ListBookingsTable';
import LoadingOrderManagement from './components/LoadingOrderManagement';
import useGetBookingStatus from './hooks/useGetStatusBooking';

export interface IBookingStatusTabs {
  id: string;
  name: string;
  step?: number;
}

export default function OrderManagement() {
  const { data, status } = useGetBookingStatus();

  return (
    <>
      <div
        className={clsx(
          'flex flex-col bg-primary-50 h-full shadow-xl rounded-2xl p-5 overflow-hidden',
        )}
      >
        {status === 'loading' ? (
          <LoadingOrderManagement />
        ) : (
          data && (
            <div className="h-full">
              <Tabs
                fullWidth
                color="primary"
                radius="full"
                classNames={{ tab: 'font-medium' }}
              >
                <Tab key="ALL" title="All">
                  <ListBookingsTable />
                </Tab>
                {data.map((val) => (
                  <Tab key={val.name} title={val.name}>
                    <ListBookingsTable bookingStatus={val.name} />
                  </Tab>
                ))}
                <Tab key="CANCELLED" title="CANCELLED">
                  <ListBookingsTable cancellation />
                </Tab>
              </Tabs>
            </div>
          )
        )}
      </div>
    </>
  );
}
