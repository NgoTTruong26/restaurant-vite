import { Field } from 'interfaces/field';
import * as React from 'react';

const FieldProgress = React.forwardRef<HTMLInputElement, Field>(
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
      ...props
    },
    ref,
  ) => (
    <>
      <div className={`relative`}>
        {label && (
          <label
            className={`font-medium mb-2 ${labelClassName ?? ''}`}
            htmlFor={id}
          >
            {innerText}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-[12px] py-[6px] ${inputClassName}`}
          id={id}
          name={id}
          {...props}
        />

        {spanClassName && (
          <span
            className={`spanField absolute w-full left-0 bottom-0 before:bottom-0 before:duration-300 before:transition-all ${spanClassName}`}
          ></span>
        )}
      </div>
      {error && <p className="text-red pl-2 pt-1">{error.message}</p>}
    </>
  ),
);

export default FieldProgress;
