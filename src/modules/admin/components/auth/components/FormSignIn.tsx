import { Button } from '@nextui-org/react';
import FieldOutline from 'components/field/FieldOutline';
import srcLogoT12 from 'images/logoT12-2.png';
import { Link } from 'react-router-dom';
import { useFormSignInAdmin } from '../hooks/useFormSignInAdmin';

export default function FormSignIn() {
  const { methods, onSubmit, formState } = useFormSignInAdmin();

  return (
    <div className="flex flex-col justify-between w-[58%]">
      <div className="w-full flex flex-col items-center">
        <div className="w-[25%]">
          <img src={srcLogoT12} alt="image" />
        </div>
        <div className="text-[28px] font-bold py-4">Sign in with Admin</div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <div className="relative my-3 w-full">
            <FieldOutline
              id="username"
              label
              innerText="Tên đăng nhập"
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch('username')}
              type="text"
              error={formState.errors.username}
              {...methods.register('username')}
            />
          </div>
          <div className="relative mt-3 w-full">
            <FieldOutline
              id="reqPassword"
              label
              innerText="Mật khẩu"
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch('reqPassword')}
              type="password"
              error={formState.errors.reqPassword}
              {...methods.register('reqPassword')}
            />
          </div>
          <div className="w-full flex justify-end items-center">
            <div>
              <Link to={'/'} className="font-medium text-[#428cf9]">
                Lấy lại mật khẩu
              </Link>
            </div>
          </div>
          <div className="w-full pt-12">
            <Button
              type="submit"
              children="Đăng nhập"
              className="w-full bg-red hover:!bg-[#e51717]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
