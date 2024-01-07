import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import Field from 'components/field';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { GetUserProfileDTO } from '../dto/get-user.dto';
import useChangePassword from '../hooks/useChangePassword';
import {
  InputChangePassword,
  useFormChangePassword,
} from '../hooks/useFormChangePassword';

interface Props {
  handleClose: () => void;

  data: GetUserProfileDTO;
}

const ChangePassword: React.FC<Props> = ({ handleClose, data }) => {
  const { methods } = useFormChangePassword();

  const { mutate } = useChangePassword();

  const onSubmit = (dataInput: InputChangePassword) => {
    mutate(
      {
        id: data.id,
        password: dataInput.old_password,
        newPassword: dataInput.new_password,
        repeatNewPassword: dataInput.repeat_new_password,
      },
      {
        onSuccess: () => {
          handleClose();
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalHeader className="flex flex-col gap-1">
          Change Password
        </ModalHeader>
        <ModalBody>
          <Field
            t="password"
            name="old_password"
            label="Old Password"
            autoComplete="on"
            endContent={
              <FaLock
                size={20}
                className="text-primary pointer-events-none flex-shrink-0"
              />
            }
            placeholder="Enter your old password..."
          />
          <Field
            t="password"
            name="new_password"
            label="New Password"
            autoComplete="on"
            endContent={
              <FaLock
                size={20}
                className="text-primary pointer-events-none flex-shrink-0"
              />
            }
            placeholder="Enter your new password..."
          />
          <Field
            t="password"
            name="repeat_new_password"
            label="Repeat Password"
            autoComplete="on"
            endContent={
              <FaLock
                size={20}
                className="text-primary pointer-events-none flex-shrink-0"
              />
            }
            placeholder="Enter your repeat new password..."
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={handleClose}>
            Close
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </ModalFooter>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
