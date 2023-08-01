import React, { useEffect, useRef, useState } from "react";
import useGetChildrenCategory from "../hooks/useGetChildrenCategory";
import LoadingChildrenCategory from "./LoadingChildrenCategory";
import { GetChildrenCategoryDTO } from "../dto/get-children-category.dto";
import { UseFieldArrayReturn } from "react-hook-form";

import clsx from "clsx";
import { CreateBookingDTO } from "../dto/booking.dto";

interface Props {
  bookingsForChildren: UseFieldArrayReturn<
    CreateBookingDTO,
    "bookingsForChildren"
  >;
  handleVisible: () => void;
  handleHiddenBtnAddChildren: (isHiddenBtnAddChildren: boolean) => void;
  selectChildrenCategory: string[];
}

const SelectChildrenCategory: React.FC<Props> = ({
  bookingsForChildren,
  handleVisible,
  handleHiddenBtnAddChildren,
  selectChildrenCategory,
}) => {
  const [listChecked, setListChecked] = useState<string[]>([]);

  const [listChildrenCategory, setListChildrenCategory] = useState<
    GetChildrenCategoryDTO[]
  >([]);

  const ref = useRef<HTMLDivElement>(null);

  const { data, status, isFetching } = useGetChildrenCategory();

  useEffect(() => {
    if (data) {
      setListChildrenCategory(
        data.filter((item) => !selectChildrenCategory.includes(item.id))
      );
    }
  }, [data]);

  const handleCheckedAll = () => {
    if (
      listChildrenCategory &&
      listChildrenCategory.every((item) => listChecked.includes(item.id))
    ) {
      setListChecked([]);
      return;
    }

    const childrenCategory =
      listChildrenCategory?.reduce((prevs: string[], curr) => {
        return [...prevs, curr.id];
      }, []) || [];

    setListChecked(childrenCategory);
  };

  const handleChecked = (id: string) => {
    if (listChecked.includes(id)) {
      setListChecked((prevs) => prevs.filter((item) => item !== id));
      return;
    }

    setListChecked((prevs) => [...prevs, id]);
  };

  const handleSubmit = () => {
    const childrenCategory = data?.filter((item) =>
      listChecked.includes(item.id)
    );

    if (data && childrenCategory) {
      bookingsForChildren.append(
        childrenCategory.map((item) => ({
          childrenCategory: item.category,
          childrenCategoryId: item.id,
          deals: item.deals,
          quantity: 0,
        }))
      );

      handleHiddenBtnAddChildren(
        data.every(
          (item) =>
            listChecked.includes(item.id) ||
            selectChildrenCategory.includes(item.id)
        )
      );
    }
  };

  return (
    <div
      onClick={() => {
        ref.current?.classList.add("!opacity-0");
      }}
      onTransitionEnd={() => handleVisible()}
      className={clsx(
        "flex justify-center items-center fixed top-0 left-0 z-20 w-full h-full bg-[#0009] overflow-hidden "
      )}
    >
      <div
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="z-30 px-5 max-w-[600px] w-full animate-drop-top opacity-100 transition-all duration-100"
      >
        <div className="overflow-x-auto bg-[#ffffff] rounded-lg">
          {status === "loading" || isFetching ? (
            <LoadingChildrenCategory />
          ) : (
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input
                        onChange={() => handleCheckedAll()}
                        checked={listChildrenCategory.every((item) =>
                          listChecked.includes(item.id)
                        )}
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>Chọn độ tuổi</th>
                  <th>Giảm giá</th>
                </tr>
              </thead>

              <tbody>
                {listChildrenCategory?.map((item, idx) => (
                  <tr
                    key={idx}
                    className="[&>th]:whitespace-normal [&>td]:whitespace-normal"
                  >
                    <th>
                      <label>
                        <input
                          onChange={() => handleChecked(item.id)}
                          checked={listChecked.includes(item.id)}
                          id={item.deals.toString()}
                          type="checkbox"
                          className="checkbox"
                        />
                      </label>
                    </th>
                    <td>
                      <label
                        className="hover:cursor-pointer"
                        htmlFor={item.deals.toString()}
                      >
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">{item.category}</div>
                          </div>
                        </div>
                      </label>
                    </td>
                    <td>{item.deals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-end py-2 px-5 ">
            <div
              onClick={() => {
                ref.current?.classList.add("!opacity-0");
                handleSubmit();
              }}
              onTransitionEnd={() => {
                handleVisible();
              }}
              className="p-3 font-medium text-[#ffffff] bg-[#3d4451] rounded-xl cursor-pointer"
            >
              Xác nhận
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChildrenCategory;
