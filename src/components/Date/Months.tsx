import React from "react";
import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";

const Months = React.forwardRef<HTMLSelectElement, PropsFieldSelect>(
  ({ error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <select
          ref={ref}
          defaultValue={props.defaultValue}
          className="select select-bordered select-sm w-full max-w-xs"
          {...props}
        >
          <option value="default" disabled>
            Tháng
          </option>
          {Array(12)
            .fill("")
            .map((val, idx) => idx + 1)
            .map((val) => (
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

export default Months;
