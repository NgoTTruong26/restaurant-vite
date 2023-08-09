import clsx from "clsx";
import Days from "components/Date/Days";
import Months from "components/Date/Months";
import Years from "components/Date/Years";
import FieldOutline from "components/field/FieldOutline";
import { gender } from "../constant";

export default function Profile() {
  return (
    <div className="flex-1 pr-6 pl-4">
      <div className="text-lg pb-5">Thông tin cá nhân</div>
      <div className="mt-4">
        <div className="flex gap-7">
          <img
            className="h-28 w-h-28 rounded-full"
            src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
            alt="avatar"
          />
          <div className="[&>div]:mb-8">
            <FieldOutline
              id="fullname"
              type="text"
              label
              innerText="Họ & Tên"
              inputClassName="focus:border-[#e11b1e]"
            />
            <FieldOutline
              id="nickname"
              type="text"
              label
              innerText="Thêm nickname"
              inputClassName="focus:border-[#e11b1e]"
            />
          </div>
        </div>
        <div className="[&>div]:mb-8">
          <div className="flex items-center gap-8">
            <div>Ngày sinh</div>
            <div className={clsx("flex gap-3 [&>div]:w-24")}>
              <Days />
              <Months />
              <Years />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>Giới tính</div>
            <div className={clsx("flex gap-3")}>
              {gender.map((val, idx) => (
                <div key={idx} className="form-control">
                  <label className="flex gap-3 label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      value={val.value}
                      className="radio checked:bg-red-500"
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
              <select className="select select-bordered w-full max-w-xs">
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
            "btn min-h-0 h-10 min-w-[110px] w-52 btn-info text-[#ffffff]"
          )}
        >
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
}
