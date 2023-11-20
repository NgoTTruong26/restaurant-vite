import useMediaQuery from 'hooks/useMediaQuery';
import useGetAdminList from '../../hooks/useGetAdminList';
import LoadingAdminList from '../LoadingAdminList';
import { useDeleteCheckedAdmin } from '../hooks/useDeleteCheckedAdmin';
import TableAdminList from './TableAdminList';
import TableAdminListMobile from './TableAdminListMobile';

interface Props {
  currPage: number;
  filterRole?: string;
  searchCharacters?: string;
  handleGetAdminId: (adminId: string) => void;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

export default function AdminList({
  currPage,
  filterRole,
  searchCharacters,
  handleGetAdminId,
  handlePreviousPage,
  handleNextPage,
  handleSetPage,
}: Props) {
  const { data, status } = useGetAdminList(
    currPage,
    filterRole,
    searchCharacters,
  );

  const { deleteCheckedAdmins } = useDeleteCheckedAdmin();

  const { isXsSmaller, isSmSmaller } = useMediaQuery();

  return status === 'loading' ? (
    <LoadingAdminList />
  ) : data ? (
    <>
      {!(isXsSmaller || isSmSmaller) ? (
        <TableAdminList
          deleteCheckedAdmins={deleteCheckedAdmins}
          data={data}
          currPage={currPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
          handleGetAdminId={handleGetAdminId}
        />
      ) : (
        <TableAdminListMobile
          deleteCheckedAdmins={deleteCheckedAdmins}
          data={data}
          currPage={currPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
          handleGetAdminId={handleGetAdminId}
        />
      )}
    </>
  ) : (
    <></>
  );
}
