import { Button } from '@nextui-org/react';
import Field from 'components/field';
import srcLogoT12 from 'images/logoT12-2.png';
import { FormProvider } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import { useFormSignInAdmin } from '../hooks/useFormSignInAdmin';

export default function FormSignIn() {
  const { methods, onSubmit } = useFormSignInAdmin();

  return (
    <div className="flex flex-col justify-between w-full max-w-400">
      <div className="w-full flex flex-col items-center">
        <div className="w-[25%]">
          <img src={srcLogoT12} alt="image" />
        </div>
        <div className="text-[28px] font-bold py-4 text-center">
          Sign in with Admin
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <Field
              t="input"
              name="username"
              label="Username"
              placeholder="Enter your username ..."
              endContent={
                <FaUser
                  size={20}
                  className="text-primary pointer-events-none flex-shrink-0"
                />
              }
            />

            <Field
              t="input"
              type="password"
              name="reqPassword"
              label="Password"
              autoComplete="on"
              placeholder="Enter your password ..."
              endContent={
                <FaLock
                  size={20}
                  className="text-primary pointer-events-none flex-shrink-0"
                />
              }
            />
            <div className="w-full flex justify-end items-center">
              <div>
                <div className="font-medium text-[#428cf9]">
                  Lấy lại mật khẩu
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button
                type="submit"
                children="Đăng nhập"
                color="primary"
                fullWidth
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
