import FieldOutline from "components/field/FieldOutline";
import { useFormBookingLookup } from "../hooks/useFormBookingLookup";

export default function Column2() {
  const { methods, formState, onSubmit } = useFormBookingLookup();

  return (
    <div className="flex-1 flex justify-center items-center py-4">
      <div className="flex flex-col min-w-[450px]">
        <div className="font-bold text-center">Kiểm tra thông tin đặt bàn</div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="relative my-5">
            <FieldOutline
              id="phoneNumber"
              label
              innerText="Số điện thoại (bắt buộc) "
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch("phoneNumber")}
              type="text"
              error={formState.errors.phoneNumber}
              {...methods.register("phoneNumber")}
            />
          </div>
          <div className="relative my-5">
            <FieldOutline
              id="idBooking"
              label
              innerText="Mã đặt bàn (bắt buộc)"
              inputClassName="focus:border-[#e11b1e]"
              watch={methods.watch("idBooking")}
              type="text"
              error={formState.errors.idBooking}
              {...methods.register("idBooking")}
            />
          </div>
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className=" btn text-[#fff] font-medium max-w-[200px] w-full bg-[#fd2424] rounded-xl py-2 hover:!bg-[#e51717]"
            >
              Kiểm tra
            </button>
          </div>
        </form>
        <div className="text-center mt-3">hoặc</div>
        <div className="flex justify-center mt-3">
          <button className="btn text-[#fff] font-medium bg-[#fd2424] rounded-xl py-2 px-6 hover:!bg-[#e51717]">
            Đăng nhập để tra cứu thuận tiện hơn
          </button>
        </div>
      </div>
    </div>
  );
}
