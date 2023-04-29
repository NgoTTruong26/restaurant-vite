import clsx from "clsx";

import { GoSearch } from "react-icons/go";

export default function BookingLookup() {
  return (
    <div className="flex-1 flex items-center justify-center px-5 pt-36 pb-16">
      <div
        className={clsx(
          "flex max-w-[800px] w-full justify-between border shadow-xl py-5 px-4 rounded-xl"
        )}
      >
        <div className="flex w-full">
          <div className="flex items-center pr-4">
            <GoSearch />
          </div>
          <input className="flex-1" type="text" />
        </div>
        <div className="px-3">Clear</div>
      </div>
    </div>
  );
}
