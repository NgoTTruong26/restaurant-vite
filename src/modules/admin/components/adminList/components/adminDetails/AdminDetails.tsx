import clsx from 'clsx';
import LoadingProfile from 'components/Profile/LoadingProfile';
import LoadingSecurity from 'components/Profile/LoadingSecurity';
import { GrFormClose } from 'react-icons/gr';
import useGetAdminProfile from '../hooks/useGetAdminProfileById';
import AdminProfile from './AdminProfile';
import AdminSecurityAndConnectivity from './AdminSecurityAndConnectivity';

interface Props {
  adminId: string;
  currPage: number;
  filterRole: string[];
  searchCharacters?: string;
  handleCloseShowAdminProfile: () => void;
}

const AdminDetails: React.FC<Props> = ({
  adminId,
  currPage,
  filterRole,
  searchCharacters,
  handleCloseShowAdminProfile,
}) => {
  const { data, status } = useGetAdminProfile(adminId);

  return (
    <div className="z-30 absolute top-0 left-0 bottom-0 flex justify-center items-center w-full bg-[#00000042] px-10">
      <div
        className={clsx(
          'max-w-[1000px] flex flex-col bg-[#ffffff] shadow-xl rounded-2xl p-5 max-w-4xl w-full max-h-[600px] overflow-x-auto',
          'animate-opacity opacity-100 transition-all',
        )}
      >
        {status === 'loading' ? (
          <>
            <div
              className={clsx('w-full flex [&>div]:py-4', 'max-md:flex-col')}
            >
              <LoadingProfile />
              <div
                className={clsx(
                  'my-4 border-l-2 border-[#ebebf0]',
                  'max-md:border-l-0 max-md:border-t-2',
                )}
              ></div>
              <LoadingSecurity />
            </div>
          </>
        ) : (
          <>
            <span className="sticky top-0 flex justify-end float-right">
              <GrFormClose
                className="hover:cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseShowAdminProfile();
                }}
                size={25}
              />
            </span>
            <div
              className={clsx('w-full flex [&>div]:py-4', 'max-md:flex-col')}
            >
              <AdminProfile data={data} />
              <div
                className={clsx(
                  'my-4 border-l-2 border-[#ebebf0]',
                  'max-md:border-l-0 max-md:border-t-2',
                )}
              ></div>
              <AdminSecurityAndConnectivity
                data={data}
                currPage={currPage}
                filterRole={filterRole}
                searchCharacters={searchCharacters}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDetails;
