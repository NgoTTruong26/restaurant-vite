import React from "react";
import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";

function GetYears(toYear: number) {
  const currentYear = new Date().getUTCFullYear();

  return Array(currentYear - toYear + 1)
    .fill("")
    .map((val, idx) => currentYear - idx);
}

const Years = React.forwardRef<HTMLSelectElement, PropsFieldSelect>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <select
          ref={ref}
          defaultValue={props.defaultValue}
          className="select select-bordered select-sm w-full max-w-xs"
          {...props}
        >
          <option value="default" disabled>
            Năm
          </option>
          {GetYears(1900).map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        {error && <p className="text-red pl-2 pt-1">{error.message}</p>}
      </div>
    );
  }
);

export default Years;
