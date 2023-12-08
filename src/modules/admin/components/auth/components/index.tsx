import clsx from 'clsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import FormSignIn from './FormSignIn';

export default function SignInAdmin() {
  const navigate = useNavigate();

  const admin = useSelector((state: RootState) => state.setAdmin.value);

  useEffect(() => {
    if (admin) {
      return navigate('/admin');
    }
  }, [admin]);

  if (admin) {
    return <div>Loading</div>;
  }

  return (
    <div className="relative flex h-full bg-primary-50 min-h-screen justify-center items-center">
      <div className="flex gap-5 max-w-[1200px] w-full bg-[#fff] rounded-xl shadow-xl p-5 mx-5">
        <div
          className={clsx(
            "relative z-10 flex-1 bg-[url('https://img.freepik.com/premium-vector/it-specialists-administrate-cloud-service-data-storage-hosting-platform-big-data-processing-transferring-online-computing-technology-software-solutions-share-informations-digital-network_458444-947.jpg?w=2000')]",
            'bg-[length:1000px] bg-no-repeat bg-center rounded-l-xl rounded-r-md max-sm:hidden',
          )}
        ></div>
        <div
          className={clsx(
            'flex-1 flex justify-center min-h-[80vh] items-center max-sm:min-h-[60vh]',
          )}
        >
          <div className="flex flex-col justify-between">
            <div className="w-full flex justify-center">
              <FormSignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
