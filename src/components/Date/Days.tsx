import clsx from "clsx";
import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";
import React from "react";

interface Props extends PropsFieldSelect {
  year?: string;
  month?: string;
}

function GetDaysInMonth(year: string, month: string) {
  const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate();

  console.log(new Date(parseInt(year), parseInt(month)));

  return Array(daysInMonth)
    .fill("")
    .map((val, idx) => idx + 1);
}

const Days = React.forwardRef<HTMLSelectElement, Props>(
  ({ year, month, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <select
          ref={ref}
          defaultValue={props.defaultValue}
          className={clsx(
            "select select-bordered select-sm w-full max-w-xs",
            className
          )}
          {...props}
        >
          <option value="default" disabled>
            Ngày
          </option>
          {GetDaysInMonth(
            year && year !== "default"
              ? year
              : new Date().getUTCFullYear().toString(),
            month && month !== "default"
              ? month
              : (new Date().getUTCMonth() + 1).toString()
          ).map((val) => (
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

export default Days;
