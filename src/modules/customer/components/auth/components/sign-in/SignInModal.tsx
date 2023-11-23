import { Button, Checkbox, ModalBody, ModalFooter } from '@nextui-org/react';
import clsx from 'clsx';
import Field from 'components/field';
import { useEffect, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import { useFormSignIn } from '../../hooks/useFormSignIn';

interface Props {
  onClose: () => void;
}

export default function SignInModal({ onClose }: Props) {
  const navigate = useNavigate();

  const { methods, onSubmit } = useFormSignIn();

  const { value: user, status: statusRedux } = useSelector(
    (state: RootState) => state.setUser,
  );

  const [displayFormSignUp, setDisplayFormSignUp] = useState<Boolean>(false);

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user]);

  console.log(user);

  if (user || statusRedux === 'loading') {
    return <div>Loading</div>;
  }

  <div className="relative flex bg-[#eee] min-h-screen justify-center items-center">
    <div className="flex max-w-[1200px] w-full bg-[#fff] rounded-xl shadow-xl p-5 ">
      <div
        className={clsx(
          "relative z-10 flex-1 bg-[url('https://images.squarespace-cdn.com/content/v1/5ec80d2e440bc1242bf17b0d/123e5b41-ff88-4e76-9579-34a9d06bf5f9/180621_Kavka_Ognisko_Cocktails-3-LoRes.jpg?format=1500w')] bg-cover bg-no-repeat bg-center rounded-l-xl rounded-r-md transition-transform",
          {
            'translate-x-full': displayFormSignUp,
          },
        )}
      ></div>
      <div
        className={clsx('flex-1 flex min-h-[800px] transition-transform', {
          'translate-x-[-100%]': displayFormSignUp,
        })}
      >
        <div className="flex-1 flex flex-col pt-20 justify-between">
          <div className="flex justify-center"></div>
          <div className="flex justify-center">
            <div>
              <span>
                {displayFormSignUp
                  ? 'Đã có tài khoản? '
                  : 'Chưa có tài khoản? '}
              </span>
              <span
                onClick={() => {
                  setDisplayFormSignUp((prevs) => !prevs);
                }}
                className="font-medium text-[#428cf9]"
              >
                {displayFormSignUp ? 'Đăng nhập ngay' : 'Đăng kí ngay'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <ModalBody>
          <Field
            t="input"
            name="username"
            color="primary"
            autoFocus
            endContent={
              <FaUser
                size={20}
                className="text-primary pointer-events-none flex-shrink-0"
              />
            }
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
          />
          <Field
            t="input"
            name="reqPassword"
            color="primary"
            endContent={
              <FaLock
                size={20}
                className="text-primary pointer-events-none flex-shrink-0"
              />
            }
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                label: 'text-small',
              }}
            >
              Remember me
            </Checkbox>
          </div>
        </ModalBody>
        <ModalFooter className="pt-0">
          <Button color="danger" variant="flat" onPress={onClose}>
            Close
          </Button>
          <Button type="submit" color="primary">
            Sign in
          </Button>
        </ModalFooter>
      </form>
    </FormProvider>
  );
}
