import Button from "components/Button";
import FieldOutline from "components/field/FieldOutline";

import { FcGoogle } from "react-icons/fc";
import srcLogoT12 from "images/logoT12-2.png";
import { useFormSignIn } from "modules/auth/hooks/useFormSignIn";
import { Link } from "react-router-dom";

export default function FormSignIn() {
  const { methods, onSubmit, formState } = useFormSignIn();
  return (
    <div className="flex flex-col justify-between w-[58%]">
      <div className="w-full flex flex-col items-center">
        <Link to={"/"} className="w-[25%]">
          <img src={srcLogoT12} alt="image" />
        </Link>
        <div className="text-[28px] font-bold py-4">Welcome Back!</div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <div className="relative my-3 w-full">
            <FieldOutline
              id="username"
              label
              innerText="Tên đăng nhập"
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch("username")}
              type="text"
              error={formState.errors.username}
              {...methods.register("username")}
            />
          </div>
          <div className="relative mt-3 w-full">
            <FieldOutline
              id="password"
              label
              innerText="Mật khẩu"
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch("password")}
              type="password"
              error={formState.errors.password}
              {...methods.register("password")}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center">
              <input
                id="remember_account"
                type="checkbox"
                className="checkbox w-[15px] h-[15px] rounded-[5px]"
                {...methods.register("remember_account")}
              />
              <label
                htmlFor="remember_account"
                className="label cursor-pointer"
              >
                Lưu mật khẩu
              </label>
            </div>
            <div>
              <Link to={"/"} className="font-medium text-[#428cf9]">
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
        <div className="w-full pt-7">
          <Button
            children={
              <>
                <FcGoogle size={25} />
                <span className="pl-2">Đăng nhập với Google</span>
              </>
            }
            className="flex justify-center w-full "
          />
        </div>
      </div>
    </div>
  );
}
