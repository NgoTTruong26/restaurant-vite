import clsx from "clsx";

export default function OrderManagement() {
  return (
    <>
      <div className="text-2xl mb-4">Đơn hàng của tôi</div>
      <div
        className={clsx(
          "flex flex-col bg-[#ffffff] [&>div]:py-4 h-full shadow-xl rounded-2xl p-5 overflow-hidden"
        )}
      >
        <div className="flex-nowrap whitespace-nowrap gap-10 tabs tabs-boxed overflow-x-scroll">
          <a className="tab">Tab 1</a>
          <a className="tab tab-active">Tab 2</a>
          <a className="tab">Tab 3</a>
          <a className="tab">Tab 1</a>
          <a className="tab tab-active">Tab 2</a>
          <a className="tab">Tab 3</a>
          <a className="tab">Tab 1</a>
          <a className="tab tab-active">Tab 2</a>
          <a className="tab">Tab 3</a>
        </div>
      </div>
    </>
  );
}
