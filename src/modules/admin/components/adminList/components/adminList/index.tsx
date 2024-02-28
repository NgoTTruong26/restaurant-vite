import { useEffect } from 'react';
import { UseFieldArrayReturn } from 'react-hook-form';
import { IInputDeleteCheckedAdmin } from '../../dto/delete-admin-list.dto';
import useGetAdminList from '../../hooks/useGetAdminList';
import TableAdminList from './TableAdminList';

interface Props {
  currPage: number;
  filterRole: string[];
  searchCharacters?: string;
  deleteCheckedAdmins: UseFieldArrayReturn<
    IInputDeleteCheckedAdmin,
    'admins',
    'id'
  >;
  handleGetAdminId: (adminId: string) => void;
  handleSetTotalAdmins: (totalAdmins: number) => void;
  handleSetTotalPages: (totalPages: number | null) => void;
}

export default function AdminList({
  currPage,
  filterRole,
  searchCharacters,
  deleteCheckedAdmins,
  handleGetAdminId,
  handleSetTotalAdmins,
  handleSetTotalPages,
}: Props) {
  const { data, status, isFetching } = useGetAdminList({
    page: currPage,
    role: filterRole,
    search: searchCharacters,
  });

  useEffect(() => {
    if (status === 'success') {
      if (data) {
        handleSetTotalPages(data.totalPages);
        handleSetTotalAdmins(data.totalAdmins);
        return;
      }
      handleSetTotalPages(null);
      handleSetTotalAdmins(0);
    }
  }, [data]);

  /*  const { isXsSmaller, isSmSmaller } = useMediaQuery(); */

  console.log(data);

  return (
    <>
      {data ? (
        <TableAdminList
          deleteCheckedAdmins={deleteCheckedAdmins}
          data={data}
          handleGetAdminId={handleGetAdminId}
        /> /* (
        <>
          {!(isXsSmaller || isSmSmaller) ? (
            <TableAdminList
              deleteCheckedAdmins={deleteCheckedAdmins}
              data={data}
              handleGetAdminId={handleGetAdminId}
            />
          ) : (
            <TableAdminListMobile
              deleteCheckedAdmins={deleteCheckedAdmins}
              data={data}
              handleGetAdminId={handleGetAdminId}
            />
          )}
        </>
      ) */
      ) : (
        <></>
      )}
    </>
  );
}
