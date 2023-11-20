{
  /* <input
                id="agree_terms_priacvy"
                type="checkbox"
                className="checkbox w-[15px] h-[15px] rounded-[5px]"
                {...methods.register("agree_terms_priacvy")}
              />
              <label
                htmlFor="agree_terms_priacvy"
                className="label cursor-pointer font-medium"
              >
                Tôi chấp nhận Điều Khoản & Dịch Vụ của nhà hàng
              </label> */
}

import clsx from 'clsx';
import { Field } from 'interfaces/field';
import * as React from 'react';

const FieldCheckBox = React.forwardRef<HTMLInputElement, Field>(
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
    ref,
  ) => (
    <>
      <div className={`flex relative items-center`}>
        <input
          type="checkbox"
          ref={ref}
          className={`checkbox w-[15px] h-[15px] rounded-[5px] ${inputClassName}`}
          id={id}
          name={id}
          {...props}
        />
        {label && (
          <label
            className={clsx(
              `pl-3 label cursor-pointer font-medium ${labelClassName}`,
            )}
            htmlFor={id}
          >
            {innerText}
          </label>
        )}
      </div>
      {error && <p className="text-red pl-2 pt-1">{error.message}</p>}
    </>
  ),
);

export default FieldCheckBox;
