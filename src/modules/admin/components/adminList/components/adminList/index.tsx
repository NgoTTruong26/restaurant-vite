import useGetAdminList from '../../hooks/useGetAdminList';
import LoadingAdminList from '../LoadingAdminList';
import { useDeleteCheckedAdmin } from '../hooks/useDeleteCheckedAdmin';
import FooterAdminList from './FooterAdminList';
import TableAdminList from './TableAdminList';

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

  return status === 'loading' ? (
    <LoadingAdminList />
  ) : data ? (
    <>
      <TableAdminList
        deleteCheckedAdmins={deleteCheckedAdmins}
        data={data}
        handleGetAdminId={handleGetAdminId}
      />
      <FooterAdminList
        data={data}
        currPage={currPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleSetPage={handleSetPage}
      />
    </>
  ) : (
    <></>
  );
}
