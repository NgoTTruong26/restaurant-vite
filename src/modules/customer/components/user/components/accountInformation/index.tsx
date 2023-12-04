import clsx from 'clsx';
import LoadingProfile from 'components/Profile/LoadingProfile';
import LoadingSecurity from 'components/Profile/LoadingSecurity';
import Profile from './components/Profile';
import SecurityAndConnectivity from './components/SecurityAndConnectivity';
import useGetUserProfile from './hooks/useGetUserProfile';

export default function AccountInformation() {
  const { data, status } = useGetUserProfile();

  return (
    <>
      <div
        className={clsx(
          'flex w-full bg-[#ffffff] [&>div]:py-4 shadow-xl rounded-2xl p-5',
          'max-md:flex-col',
        )}
      >
        {status === 'loading' ? (
          <>
            <LoadingProfile />
            <div
              className={clsx(
                'my-4 border-l-2 border-[#ebebf0]',
                'max-md:border-l-0 max-md:border-t-2',
              )}
            ></div>
            <LoadingSecurity />
          </>
        ) : (
          data && (
            <>
              <Profile data={data} />
              <div
                className={clsx(
                  'my-4 border-l-2 border-[#ebebf0]',
                  'max-md:border-l-0 max-md:border-t-2',
                )}
              ></div>
              <SecurityAndConnectivity data={data} />
            </>
          )
        )}
      </div>
    </>
  );
}
