import useFormBooking from "./hooks/useFormBooking";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";
import clsx from "clsx";

export default function Bookings() {
  const { methods, onSubmit } = useFormBooking();

  return (
    <div id="bookings" className="flex justify-center items-center py-16 px-5">
      <div className="flex flex-col max-w-[1200px] w-full justify-center items-center">
        <div className="uppercase">Book A Table</div>
        <div className="font-amatic text-[48px] pb-5 text-center max-xs:text-[38px]">
          {"Book "}
          <span className="text-red text-[48px] max-xs:text-[38px]">
            Your Stay
          </span>
          {" With Us"}
        </div>
        <div className="w-full">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div
              className={clsx(
                "grid grid-cols-3 w-full border shadow-xl p-10 rounded-xl",
                "max-sm:p-0 max-sm:py-3",
                "max-md:flex max-md:flex-col"
              )}
            >
              <Column1 />
              <Column2 methods={methods} />
              <Column3 methods={methods} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
