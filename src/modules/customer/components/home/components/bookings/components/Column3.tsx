import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import clsx from 'clsx';
import FieldProgress from 'components/field/FieldProgress';
import { cssBeforeOnFocusInput } from 'modules/customer/components/home/constant.styles';
import { useState } from 'react';
import { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { CreateBookingDTO } from '../dto/booking.dto';
import ModalChildrenCategory from './ModalChildrenCategory';

interface Props {
  methods: UseFormReturn<CreateBookingDTO>;
  bookingsForChildren: UseFieldArrayReturn<
    CreateBookingDTO,
    'bookingsForChildren'
  >;
  initChildrenCategoryId?: string[];
  enoughtChildrenCategory?: boolean;
}

export default function Column3({
  methods,
  bookingsForChildren,
  initChildrenCategoryId,
  enoughtChildrenCategory,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [hiddenBtnAddChildren, setHiddenBtnAddChildren] =
    useState<boolean>(false);

  const handleHiddenBtnAddChildren = (isHiddenBtnAddChildren: boolean) => {
    setHiddenBtnAddChildren(isHiddenBtnAddChildren);
  };

  const selectChildrenCategoryById = bookingsForChildren.fields.reduce(
    (prevs: string[], curr) => {
      if (!prevs.includes(curr.childrenCategoryId)) {
        return [...prevs, curr.childrenCategoryId];
      }
      return prevs;
    },
    initChildrenCategoryId || [],
  );

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col px-4',
        '[&>div+div]:pt-8',
        'max-md:pt-3',
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

          {!enoughtChildrenCategory && !hiddenBtnAddChildren && (
            <>
              <Button
                onPress={onOpen}
                startContent={<BsPlusCircleDotted size={25} />}
                className="btn bg-[#ffffff] text-[#4a4a4a] flex gap-2 px-2 rounded-lg border border-[#4a4a4a] border-dashed hover:cursor-pointer hover:bg-[#f8f8f8]"
              >
                Chọn độ tuổi
              </Button>
              <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: 'easeIn',
                      },
                    },
                  },
                }}
                className="max-w-600"
              >
                <ModalContent>
                  {(onClose) => (
                    <ModalChildrenCategory
                      bookingsForChildren={bookingsForChildren}
                      handleClose={onClose}
                      handleHiddenBtnAddChildren={handleHiddenBtnAddChildren}
                      selectChildrenCategory={selectChildrenCategoryById}
                    />
                  )}
                </ModalContent>
              </Modal>
            </>
          )}
        </div>
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
          {...methods.register('author')}
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
          {...methods.register('phoneNumber')}
        />
      </div>
      <Button
        color="primary"
        type="submit"
        radius="full"
        className="mb-5 mt-8 py-5 h-12"
      >
        Đặt bàn
      </Button>
    </div>
  );
}
