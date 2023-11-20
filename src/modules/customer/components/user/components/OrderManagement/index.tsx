import clsx from 'clsx';
import useGetBookingStatus from './hooks/useGetStatusBooking';
import { useState } from 'react';
import ListBookingsTable from './components/ListBookingsTable';

enum EBookingStatusTabs {
  ALL = 'Tất cả',
  CANCELLED = 'Đã Hủy',
}

enum EBookingStatusTabsId {
  ALL = 'all',
  CANCELLED = 'cancelled',
}

export interface IBookingStatusTabs {
  id: string;
  name: string;
  step?: number;
}

export default function OrderManagement() {
  const { data, status } = useGetBookingStatus();

  const [tabBookingStatusId, setTabBookingStatusId] = useState<string>(
    EBookingStatusTabsId.ALL,
  );

  const handleSetTabBookingStatus = (id: string) => {
    setTabBookingStatusId(id);
  };

  return (
    <>
      <div className="text-2xl mb-4">Đơn hàng của tôi</div>
      <div
        className={clsx(
          'flex flex-col bg-[#eee] h-full shadow-xl rounded-2xl p-5 overflow-hidden',
        )}
      >
        {data && (
          <div className="h-full">
            <div
              className={clsx(
                'justify-center text-[#ffffff] whitespace-nowrap tabs tabs-boxed',
              )}
            >
              <div
                className={clsx(
                  'flex flex-nowrap gap-5 max-w-[600px] w-full justify-between overflow-x-auto',
                  '[&>.tab]:bg-[#ffffff] [&>.tab-active]:!bg-red ',
                )}
              >
                <a
                  onClick={() =>
                    handleSetTabBookingStatus(EBookingStatusTabsId.ALL)
                  }
                  className={clsx('tab ', {
                    'tab-active':
                      EBookingStatusTabsId.ALL === tabBookingStatusId,
                  })}
                >
                  {EBookingStatusTabs.ALL}
                </a>
                {data.map((val, idx) => (
                  <a
                    onClick={() => handleSetTabBookingStatus(val.id)}
                    key={idx}
                    className={clsx('tab ', {
                      'tab-active': val.id === tabBookingStatusId,
                    })}
                  >
                    {val.name}
                  </a>
                ))}
                <a
                  onClick={() =>
                    handleSetTabBookingStatus(EBookingStatusTabsId.CANCELLED)
                  }
                  className={clsx('tab ', {
                    'tab-active':
                      EBookingStatusTabsId.CANCELLED === tabBookingStatusId,
                  })}
                >
                  {EBookingStatusTabs.CANCELLED}
                </a>
                {/*Đã xác nhận- khách hàng đã đến ăn và thanh toán*/}
              </div>
            </div>
            <ListBookingsTable />
          </div>
        )}
      </div>
    </>
  );
}
