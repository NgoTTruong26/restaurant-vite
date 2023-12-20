import useMediaQuery from 'hooks/useMediaQuery';
import { useEffect } from 'react';
import useGetAdminList from '../../hooks/useGetAdminList';
import LoadingAdminList from '../LoadingAdminList';
import { useDeleteCheckedAdmin } from '../hooks/useDeleteCheckedAdmin';
import TableAdminList from './TableAdminList';
import TableAdminListMobile from './TableAdminListMobile';

interface Props {
  currPage: number;
  filterRole: string[];
  searchCharacters?: string;
  handleGetAdminId: (adminId: string) => void;
  handleSetTotalAdmins: (totalAdmins: number) => void;
  handleSetTotalPages: (totalPages: number | null) => void;
}

export default function AdminList({
  currPage,
  filterRole,
  searchCharacters,
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

  const { deleteCheckedAdmins } = useDeleteCheckedAdmin();

  const { isXsSmaller, isSmSmaller } = useMediaQuery();

  console.log(data);

  return (
    <>
      {isFetching && <LoadingAdminList />}
      {data ? (
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
      ) : (
        <></>
      )}
    </>
  );
}
