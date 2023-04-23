import Column1 from "./components/Column1";
import Column2 from "./components/Column2";

export default function BookingLookup() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex max-w-[1200px] w-full justify-center border shadow-xl py-5 px-10 rounded-xl overflow-hidden">
        <Column1 />
        <Column2 />
      </div>
    </div>
  );
}
