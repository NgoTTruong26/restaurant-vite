import { PropsFieldSelect } from "./interfaces/PropsFieldSelect.interface";

export default function Months({
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
