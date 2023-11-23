import React, { useEffect, useState } from 'react';
import { UseFieldArrayReturn } from 'react-hook-form';
import { GetChildrenCategoryDTO } from '../dto/get-children-category.dto';
import useGetChildrenCategory from '../hooks/useGetChildrenCategory';
import LoadingChildrenCategory from './LoadingChildrenCategory';

import {
  Button,
  Checkbox,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import { CreateBookingDTO } from '../dto/booking.dto';

interface Props {
  bookingsForChildren: UseFieldArrayReturn<
    CreateBookingDTO,
    'bookingsForChildren'
  >;
  handleClose: () => void;
  handleHiddenBtnAddChildren: (isHiddenBtnAddChildren: boolean) => void;
  selectChildrenCategory: string[];
}

const ChildrenCategoryModal: React.FC<Props> = ({
  bookingsForChildren,
  handleClose,
  handleHiddenBtnAddChildren,
  selectChildrenCategory,
}) => {
  const [listChecked, setListChecked] = useState<string[]>([]);

  const [listChildrenCategory, setListChildrenCategory] =
    useState<GetChildrenCategoryDTO[]>();

  const { data, status, isFetching } = useGetChildrenCategory();

  useEffect(() => {
    if (data) {
      setListChildrenCategory(
        data.filter((item) => !selectChildrenCategory.includes(item.id)),
      );
    }
  }, [data, selectChildrenCategory]);

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
      listChecked.includes(item.id),
    );

    if (data && childrenCategory) {
      bookingsForChildren.append(
        childrenCategory.map((item) => ({
          childrenCategory: item.category,
          childrenCategoryId: item.id,
          deals: item.deals,
          quantity: 0,
        })),
      );

      handleHiddenBtnAddChildren(
        data.every(
          (item) =>
            listChecked.includes(item.id) ||
            selectChildrenCategory.includes(item.id),
        ),
      );
      setListChecked([]);
    }

    handleClose();
  };

  console.log(listChecked);

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        Select Children Category
      </ModalHeader>
      <ModalBody>
        {status === 'loading' || isFetching ? (
          <LoadingChildrenCategory />
        ) : (
          listChildrenCategory && (
            <Table aria-label="Example table with dynamic content">
              <TableHeader>
                <TableColumn key="checkbox">
                  <Checkbox
                    onValueChange={handleCheckedAll}
                    isSelected={listChildrenCategory.every((item) =>
                      listChecked.includes(item.id),
                    )}
                  />
                </TableColumn>
                <TableColumn key="category">Select category</TableColumn>
                <TableColumn key="deals">Discount</TableColumn>
              </TableHeader>
              <TableBody items={listChildrenCategory}>
                {listChildrenCategory.map((item) => (
                  <TableRow key={item.id}>
                    {(key) =>
                      key === 'checkbox' ? (
                        <TableCell>
                          <Checkbox
                            onValueChange={() => handleChecked(item.id)}
                            isSelected={listChecked.includes(item.id)}
                          />
                        </TableCell>
                      ) : (
                        <TableCell>{getKeyValue(item, key)}</TableCell>
                      )
                    }
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={handleClose}>
          Close
        </Button>
        <Button color="danger" onPress={handleSubmit}>
          Add
        </Button>
      </ModalFooter>
    </>
  );
};

export default ChildrenCategoryModal;
