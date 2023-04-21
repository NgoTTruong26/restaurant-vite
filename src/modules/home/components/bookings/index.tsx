import useFormBooking from "./hooks/useFormBooking";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";

export default function Bookings() {
  const { methods, onSubmit } = useFormBooking();

  return (
    <div id="bookings" className="flex justify-center items-center py-16">
      <div className="flex flex-col max-w-[1200px] w-full justify-center items-center">
        <div className="uppercase">Book A Table</div>
        <div className="font-amatic text-[48px] pb-5">
          {"Book "}
          <span className="text-red">Your Stay</span>
          {" With Us"}
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 w-full border shadow-xl p-10 rounded-xl">
            <Column1 />
            <Column2 methods={methods} />
            <Column3 methods={methods} />
          </div>
        </form>
      </div>
    </div>
  );
}
