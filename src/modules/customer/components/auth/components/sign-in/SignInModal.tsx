import { Button, Checkbox, ModalBody, ModalFooter } from '@nextui-org/react';
import Field from 'components/field';
import { FormProvider } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import { useFormSignIn } from '../../hooks/useFormSignIn';

interface Props {
  onClose: () => void;
}

export default function SignInModal({ onClose }: Props) {
  const { methods, onSubmit, isLoading } = useFormSignIn();

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
            t="password"
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
          <Button isLoading={isLoading} type="submit" color="primary">
            Sign in
          </Button>
        </ModalFooter>
      </form>
    </FormProvider>
  );
}
