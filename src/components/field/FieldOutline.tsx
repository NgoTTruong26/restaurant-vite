import clsx from "clsx";
import { Field } from "interfaces/field";
import React from "react";

const FieldOutline = React.forwardRef<HTMLInputElement, Field>(
  (
    {
      label,
      innerText,
      className,
      inputClassName,
      spanClassName,
      labelClassName,
      errorClassName,
      error,
      id,
      watch,
      ...props
    },
    ref
  ) => (
    <>
      <div className={`relative`}>
        <input
          ref={ref}
          className={`w-full px-[12px] py-[6px] border border-[#b0bec5] rounded-lg leading-8 [&~label]:focus:bg-[#fff] [&~label]:focus:top-[-11px] [&~label]:focus:text-[11px] ${inputClassName}`}
          id={id}
          name={id}
          {...props}
        />
        {label && (
          <label
            className={clsx(
              `absolute text-[.875rem] font-medium px-1 mb-2 pointer-events-none bg-white top-[12px] left-3 text-[#777] transition-all ${
                labelClassName ?? ""
              }`,
              {
                "bg-[#fff] top-[-11px] text-[11px]": watch,
              }
            )}
            htmlFor={id}
          >
            {innerText}
          </label>
        )}
      </div>
      {error && <p className="text-red pl-2 pt-1">{error.message}</p>}
    </>
  )
);

export default FieldOutline;
