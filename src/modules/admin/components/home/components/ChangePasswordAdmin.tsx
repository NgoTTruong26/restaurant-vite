import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import Field from 'components/field';
import yup from 'configs/yupGlobal';
import { FormProvider, useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { useChangePasswordAdmin } from '../hooks/adminProfile';

interface Props {
  handleClose: () => void;
}

export default function ChangePasswordAdmin({ handleClose }: Props) {
  const { methods } = useFormChangePasswordAdmin();

  const { mutate } = useChangePasswordAdmin();

  const onSubmit = (dataInput: InputChangePasswordAdmin) => {
    mutate(
      {
        oldPassword: dataInput.old_password,
        newPassword: dataInput.new_password,
        repeatNewPassword: dataInput.repeat_new_password,
      },
      {
        onSettled: () => {
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
}

interface InputChangePasswordAdmin {
  old_password: string;
  new_password: string;
  repeat_new_password: string;
}

const formSchemaChangePasswordAdmin = yup.object({
  old_password: yup.string().label('Old Password').required().min(6),
  new_password: yup.string().label('New Password').required().min(6),
  repeat_new_password: yup
    .string()
    .label('Repeat New Password')
    .required()
    .oneOf([yup.ref('new_password')]),
});

function useFormChangePasswordAdmin() {
  const methods = useForm<InputChangePasswordAdmin>({
    defaultValues: {
      old_password: '',
      new_password: '',
      repeat_new_password: '',
    },
    resolver: yupResolver(formSchemaChangePasswordAdmin),
  });

  return {
    methods,
  };
}
