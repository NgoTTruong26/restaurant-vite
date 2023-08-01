import Button from "components/Button";
import FieldProgress from "components/field/FieldProgress";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { cssBeforeOnFocusInput } from "modules/home/constant.styles";
import clsx from "clsx";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useEffect, useState } from "react";
import SelectChildrenCategory from "./SelectChildrenCategory";
import { GetChildrenCategoryDTO } from "../dto/get-children-category.dto";
import { GrFormClose } from "react-icons/gr";
import { CreateBookingDTO } from "../dto/booking.dto";

interface Props {
  methods: UseFormReturn<CreateBookingDTO>;
  bookingsForChildren: UseFieldArrayReturn<
    CreateBookingDTO,
    "bookingsForChildren"
  >;
}

export interface ListChildrenCategory {
  selectChildrenCategory: GetChildrenCategoryDTO[];
  enough: boolean;
}

export default function Column3({ methods, bookingsForChildren }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  const [hiddenBtnAddChildren, setHiddenBtnAddChildren] =
    useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden", "touch-pan-y");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [visible]);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleHiddenBtnAddChildren = (isHiddenBtnAddChildren: boolean) => {
    setHiddenBtnAddChildren(isHiddenBtnAddChildren);
  };

  const selectChildrenCategoryById = bookingsForChildren.fields.reduce(
    (prevs: string[], curr) => {
      return [...prevs, curr.childrenCategoryId];
    },
    []
  );

  console.log(methods.formState.errors);

  return (
    <div
      className={clsx(
        "flex-1 flex flex-col px-4",
        "[&>div+div]:pt-8",
        "max-md:pt-3"
      )}
    >
      <div className="flex flex-col">
        <div className="font-medium">Trẻ em</div>
        <div className="flex justify-between gap-4 pt-4">
          {bookingsForChildren.fields.map((item, idx) => (
            <div key={idx} className="relative w-[45%]">
              <span
                onClick={() => {
                  bookingsForChildren.remove(idx);
                  setHiddenBtnAddChildren(false);
                }}
                className="z-30 absolute right-0 top-0 hover:cursor-pointer"
              >
                <GrFormClose size={25} />
              </span>
              <FieldProgress
                key={idx}
                id={item.childrenCategory}
                innerText={item.childrenCategory}
                type="number"
                label
                spanClassName={cssBeforeOnFocusInput}
                inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
                {...methods.register(`bookingsForChildren.${idx}.quantity`)}
                error={
                  methods.formState.errors.bookingsForChildren?.[idx]?.quantity
                }
              />
            </div>
          ))}

          {!hiddenBtnAddChildren && (
            <div className={clsx("flex items-center", "[&>div+div]:ml-2")}>
              <div
                onClick={() => handleVisible()}
                className="btn bg-[#ffffff] text-[#4a4a4a] flex gap-2 px-2 rounded-lg border border-[#4a4a4a] border-dashed hover:cursor-pointer hover:bg-[#f8f8f8]"
              >
                <div className="py-2">
                  <BsPlusCircleDotted size={25} />
                </div>
                <div className="flex justify-center items-center">
                  <div>Chọn độ tuổi</div>
                </div>
              </div>
            </div>
          )}
        </div>
        {visible && (
          <SelectChildrenCategory
            bookingsForChildren={bookingsForChildren}
            handleVisible={handleVisible}
            handleHiddenBtnAddChildren={handleHiddenBtnAddChildren}
            selectChildrenCategory={selectChildrenCategoryById}
          />
        )}
      </div>
      <div className="flex flex-col">
        <FieldProgress
          id="author"
          placeholder="Nhập tên khách hàng..."
          type="text"
          label
          innerText="Tên khách hàng"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          error={methods.formState.errors.author}
          {...methods.register("author")}
        />
      </div>
      <div className="flex flex-col max-md:pt-3">
        <FieldProgress
          id="phoneNumber"
          placeholder="Nhập số điện thoại..."
          type="text"
          label
          innerText="Số điện thoại"
          spanClassName={cssBeforeOnFocusInput}
          inputClassName="border-b border-b-black [&:focus~.spanField]:before:!w-full"
          error={methods.formState.errors.phoneNumber}
          {...methods.register("phoneNumber")}
        />
      </div>
      <Button
        type="submit"
        className="bg-red mb-5 mt-8 py-5 rounded-full text-[#fff] font-medium hover:!bg-[#e51717]"
      >
        Đặt bàn
      </Button>
    </div>
  );
}
