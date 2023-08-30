import clsx from "clsx";
import FieldOutline from "components/field/FieldOutline";
import React, { useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import {
  InputChangePasswordAdmin,
  useFormChangePasswordAdmin,
} from "../../hooks/useFormChangePasswordAdmin";
import useChangePasswordAdmin from "../../hooks/useChangePasswordAdmin";
import { GetAdminDTO } from "../../../dto/get-admins.dto";

interface Props {
  handleCloseShowChangePassword: () => void;

  data: GetAdminDTO;
}

const ChangePasswordAdmin: React.FC<Props> = ({
  handleCloseShowChangePassword,
  data,
}) => {
  const { methods, formState } = useFormChangePasswordAdmin();

  const { mutate } = useChangePasswordAdmin();

  const ref = useRef<HTMLDivElement>(null);

  const onSubmit = (dataInput: InputChangePasswordAdmin) => {
    mutate(
      {
        id: data.id,
        password: dataInput.old_password,
        newPassword: dataInput.new_password,
        repeatNewPassword: dataInput.repeat_new_password,
      },
      {
        onSettled: () => {
          handleCloseShowChangePassword();
        },
      }
    );
  };

  return (
    <div
      className={clsx(
        "absolute flex justify-center items-center top-0 left-0 z-20 w-full h-full bg-[#0000002f] overflow-hidden "
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={ref}
        className="z-30 px-5 max-w-[500px] w-full animate-drop-top opacity-100 transition-all duration-100"
      >
        <div className="bg-[#ffffff] rounded-lg p-8 pb-3">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <span className="sticky flex justify-end right-4 top-0 ">
              <GrFormClose
                className="hover:cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseShowChangePassword();
                }}
                size={25}
              />
            </span>
            <div className="mb-4 text-center text-2xl">Đổi mật khẩu</div>
            <div className="flex-1 flex flex-col items-center [&>div]:w-full [&>div]:mb-4 [&>div]:max-w-[350px]">
              <div>
                <FieldOutline
                  id="old_password"
                  label
                  innerText="Mật khẩu cũ"
                  inputClassName="focus:border-[#e11b1e]"
                  watch={methods.watch("old_password")}
                  type="password"
                  error={formState.errors.old_password}
                  {...methods.register("old_password")}
                />
              </div>
              <div>
                <FieldOutline
                  id="new_password"
                  label
                  innerText="Mật khẩu mới"
                  inputClassName="focus:border-[#e11b1e]"
                  watch={methods.watch("new_password")}
                  type="password"
                  error={formState.errors.new_password}
                  {...methods.register("new_password")}
                />
              </div>
              <div>
                <FieldOutline
                  id="repeat_new_password"
                  label
                  innerText="Nhập lại mật khẩu mới"
                  inputClassName="focus:border-[#e11b1e]"
                  watch={methods.watch("repeat_new_password")}
                  type="text"
                  error={formState.errors.repeat_new_password}
                  {...methods.register("repeat_new_password")}
                />
              </div>
            </div>
            <div className="flex justify-end py-2 px-5 ">
              <button className="p-3 font-medium text-[#ffffff] bg-[#3d4451] rounded-xl cursor-pointer">
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
