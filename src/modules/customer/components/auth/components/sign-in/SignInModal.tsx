import { Button, Checkbox, ModalBody, ModalFooter } from '@nextui-org/react';
import Field from 'components/field';
import { useEffect } from 'react';
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

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user]);

  console.log(user);

  if (user || statusRedux === 'loading') {
    return <div>Loading</div>;
  }

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
            autoComplete="on"
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
