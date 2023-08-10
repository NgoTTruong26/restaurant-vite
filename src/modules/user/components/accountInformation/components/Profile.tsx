import clsx from "clsx";
import Days from "components/Date/Days";
import Months from "components/Date/Months";
import Years from "components/Date/Years";
import FieldOutline from "components/field/FieldOutline";
import { gender } from "../../../constant";
import { IUser } from "modules/user/interfaces/user.interface";
import {
  InputUpdateProfile,
  useFormUpdateProfile,
} from "../hooks/useFormUpdateProfile";

interface Props {
  data: Omit<IUser, "accessToken">;
}

export default function Profile({ data }: Props) {
  const { formState, methods } = useFormUpdateProfile();

  console.log(methods.watch());

  const onSubmit = (data: InputUpdateProfile) => {
    console.log(data);
  };

  return (
    <div className="flex-1 pr-6 pl-4">
      <div
        className={clsx(
          "text-lg pb-8",
          "max-sm:text-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl"
        )}
      >
        Thông tin cá nhân
      </div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <div className={clsx("flex gap-7", "max-sm:flex-col")}>
            <div className="flex justify-center max-sm:bg-gradient-to-b from-[#31b6e7] from-60% to-transparent to-60%">
              <div
                className={clsx(
                  "flex justify-center h-28 w-28",
                  "max-sm:h-40 max-sm:w-40"
                )}
              >
                <img
                  className={clsx(
                    "w-full h-full rounded-full ",
                    "max-sm:p-2 bg-[#ffffff]"
                  )}
                  src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex-1 [&>div]:mb-8">
              <div>
                <FieldOutline
                  id="lastName"
                  type="text"
                  defaultValue={data.lastName}
                  label
                  innerText="Họ"
                  inputClassName="focus:border-[#e11b1e] max-w-[350px]"
                  watch={methods.watch("lastname")}
                  error={formState.errors.lastname}
                  {...methods.register("lastname")}
                />
              </div>
              <div>
                <FieldOutline
                  id="firstname"
                  type="text"
                  defaultValue={data.firstName}
                  label
                  innerText="Tên"
                  inputClassName="focus:border-[#e11b1e] max-w-[350px]"
                  watch={methods.watch("firstname")}
                  error={formState.errors.firstname}
                  {...methods.register("firstname")}
                />
              </div>
            </div>
          </div>
          <div className="[&>div]:mb-8">
            <div className="flex items-center gap-8 max-sm:flex-col max-xs:gap-3">
              <div className="max-sm:w-full ">Ngày sinh</div>
              <div
                className={clsx(
                  "flex w-full flex-1 gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 "
                )}
              >
                <Days
                  error={formState.errors.day}
                  {...methods.register("day")}
                />
                <Months
                  error={formState.errors.month}
                  {...methods.register("month")}
                />
                <Years
                  error={formState.errors.year}
                  {...methods.register("year")}
                />
              </div>
            </div>
            <div className="flex items-center gap-8 max-xs:flex-col max-xs:gap-3 max-xs:items-start">
              <div className="max-sm:w-full">Giới tính</div>
              <div
                className={clsx(
                  "flex gap-3",
                  "max-xs:flex-col max-xs:items-start"
                )}
              >
                {gender.map((val, idx) => (
                  <div key={idx} className="form-control">
                    <label className="flex gap-3 label cursor-pointer">
                      <input
                        type="radio"
                        id="gender"
                        defaultValue={val.value}
                        className="radio checked:bg-red-500"
                        {...methods.register("gender")}
                      />
                      <span className="label-text">{val.title}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>Quốc tịch</div>
              <div className={clsx("flex-1")}>
                <select
                  className="select select-bordered w-full max-w-md"
                  {...methods.register("nationality")}
                >
                  <option disabled selected>
                    Chọn quốc tịch
                  </option>
                  <option>Việt Nam</option>
                  <option>Hàn Quốc</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className={clsx(
              "btn min-h-0 h-10 min-w-[110px] max-w-[250px] w-full btn-info text-[#ffffff] max-xs:min-w-[80px]"
            )}
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
}
