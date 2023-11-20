import clsx from "clsx";

export default function OrderNotFound() {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center max-w-[700px] w-full px-24",
        "[&>div]:pt-5",
        "max-lg:px-14",
        "max-md:px-9",
        "max-sm:px-0"
      )}
    >
      <div>
        <img
          className="min-w-[216px]"
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png"
          alt="order"
        />
      </div>

      <div className="text-center capitalize font-medium text-2xl">
        Không Tồn tại đơn hàng
      </div>
      <div className="text-center">
        Đơn hàng bạn đang tìm kiếm không tồn tại vui lòng thử nhập lại Id đơn
        hàng hoặc số điện thoại tạo đơn
      </div>
    </div>
  );
}
