import clsx from "clsx";
import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";

interface Props extends PropsFieldSelect {
  year?: number;
  month?: number;
}

function GetDaysInMonth(year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate();

  return Array(daysInMonth)
    .fill("")
    .map((val, idx) => idx + 1);
}

export default function Days({
  year = new Date().getUTCFullYear(),
  month = new Date().getUTCMonth() + 1,
  className,
  error,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <select
        {...props}
        className={clsx(
          "select select-bordered select-sm w-full max-w-xs",
          className
        )}
      >
        <option disabled selected>
          Ngày
        </option>
        {GetDaysInMonth(year, month).map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      {error && <p className="text-red pl-2 pt-1">{error.message}</p>}
    </div>
  );
}
