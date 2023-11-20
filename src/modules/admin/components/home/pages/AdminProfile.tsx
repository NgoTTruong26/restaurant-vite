import clsx from 'clsx';
import LoadingProfile from 'components/Profile/LoadingProfile';
import LoadingSecurity from 'components/Profile/LoadingSecurity';
import Profile from '../components/AdminProfile';
import AdminSecurityAndConnectivity from '../components/AdminSecurityAndConnectivity';
import { useGetAdminProfile } from '../hooks/adminProfile';

export default function AdminProfile() {
  const { data, status } = useGetAdminProfile();

  return (
    <div className="w-full bg-gradient-to-b from-green-100 to-pink-100 h-full">
      <div className="max-w-1800 w-full h-full">
        <div className="flex justify-center items-center w-full h-full">
          <div className="max-w-[1200px] w-full">
            <div
              className={clsx(
                'flex w-full bg-[#ffffff] [&>div]:py-4 shadow-xl rounded-2xl px-5 py-8 min-h-[500px]',
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
                    <AdminSecurityAndConnectivity data={data} />
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
