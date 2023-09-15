import Button from 'components/Button';
import FieldCheckBox from 'components/field/FieldCheckBox';
import FieldOutline from 'components/field/FieldOutline';
import { useFormSignUp } from 'modules/auth/hooks/useFormSignUp';
import { FcGoogle } from 'react-icons/fc';

export default function FormSignUp() {
  const { methods, formState, onSubmit } = useFormSignUp();

  return (
    <div className="flex flex-col justify-between w-[80%]">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <div className="text-[28px] font-bold">Get Started Now</div>
            <div>Enter your credentials to access your account</div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="w-[48%]">
              <Button
                children={
                  <>
                    <FcGoogle size={25} />
                    <span className="pl-2">Đăng nhập với Google</span>
                  </>
                }
                className="flex justify-center text-[13px] w-full bg-[#fff] text-[#4a4a4a] border-solid border-[#c8c9cf] py-2 px-[4px] rounded-2xl min-h-fit h-full "
              />
            </div>
            <div className="w-[48%]">
              <Button
                children={
                  <>
                    <FcGoogle size={25} />
                    <span className="pl-2">Đăng nhập với Facebook</span>
                  </>
                }
                className="flex justify-center text-[13px] w-full bg-[#fff] text-[#4a4a4a] border-solid border-[#c8c9cf] py-2 px-[4px] rounded-2xl min-h-fit h-full"
              />
            </div>
          </div>
          <div className="flex justify-center py-10">
            <span>or</span>
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <div className="relative mt-3 w-[48%]">
                <FieldOutline
                  id="fullName"
                  label
                  innerText="Tên"
                  inputClassName="focus:border-[#e11b1e]"
                  watch={methods.watch('fullName')}
                  type="text"
                  error={formState.errors.fullName}
                  {...methods.register('fullName')}
                />
              </div>
            </div>
            <div className="relative mt-3 w-full">
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
                id="password"
                label
                innerText="Mật khẩu"
                inputClassName="focus:border-[#e11b1e]"
                watch={methods.watch('password')}
                type="password"
                error={formState.errors.password}
                {...methods.register('password')}
              />
            </div>
            <div className="relative my-3 w-full">
              <FieldOutline
                id="repeat_password"
                label
                innerText="Nhập lại mật khẩu"
                inputClassName="focus:border-[#e11b1e]"
                watch={methods.watch('repeat_password')}
                type="text"
                error={formState.errors.repeat_password}
                {...methods.register('repeat_password')}
              />
            </div>
            <div className="relative">
              <FieldCheckBox
                id="agree_terms_priacvy"
                label
                innerText="Tôi chấp nhận Điều Khoản & Dịch Vụ của nhà hàng"
                error={formState.errors.agree_terms_priacvy}
                {...methods.register('agree_terms_priacvy')}
              />
            </div>
            <div className="w-full pt-12">
              <Button
                type="submit"
                children="Đăng kí"
                className="w-full bg-red hover:!bg-[#e51717]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
