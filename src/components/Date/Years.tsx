import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";

function GetYears(toYear: number) {
  const currentYear = new Date().getUTCFullYear();

  return Array(currentYear - toYear + 1)
    .fill("")
    .map((val, idx) => currentYear - idx);
}

export default function Years({
  className,
  error,
  ...props
}: PropsFieldSelect) {
  return (
    <div className="flex flex-col">
      <select
        {...props}
        className="select select-bordered select-sm w-full max-w-xs"
      >
        <option disabled selected>
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
