import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderAdminList from './components/HeaderAdminList';
import AdminDetails from './components/adminDetails/AdminDetails';
import AdminList from './components/adminList';
import CreateAdmin from './components/createAdmin';

export default function AdminManagement() {
  // logic checked all dùng hàm every check theo idx của hàm every

  const navigate = useNavigate();

  const location = useLocation();

  const [currPage, setCurrPage] = useState<number>(
    parseInt(
      (location.search
        ? location.search
            .split('?')[1]
            .split('&')
            .find((val) => val.includes('page='))
            ?.split('=')[1]
        : '1') || '1',
    ),
  );

  const [filterRole, setFilterByRole] = useState<string | undefined>(
    location.search
      ? location.search
          .split('?')[1]
          .split('&')
          .find((val) => val.includes('role='))
          ?.split('=')[1]
      : undefined,
  );

  const [getAdminId, setAdminId] = useState<string | null>();
  const [showCreateAdmin, setShowCreateAdmin] = useState<boolean>(false);

  const [searchCharacters, setSearchCharacters] = useState<string>();

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setSearchCharacters(value);
      if (currPage) handleSetPage(1);
    }, 300),
  ).current;

  useEffect(() => {
    debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleFilterByRole = (role: string) => {
    setFilterByRole(role);
    setCurrPage(1);
    navigate(role !== 'default' ? '?role=' + role : '');
  };

  const handleQueryForNavigate = (page: number) => {
    if (location.search) {
      if (!location.search.includes('page=')) {
        return navigate(`${location.search + '&page='}` + page);
      }

      const query = location.search
        .split('?')[1]
        .split('&')
        .map((val) => {
          if (val.includes('page=')) {
            return 'page=' + page;
          }
          return val;
        })
        .join('&');

      return navigate('?' + query);
    }

    return navigate('?page=' + page);
  };

  const handlePreviousPage = (previousPage: number | null) => {
    if (previousPage) {
      setCurrPage(previousPage);
      handleQueryForNavigate(previousPage);
    }
  };

  const handleNextPage = (nextPage: number | null) => {
    if (nextPage) {
      setCurrPage(nextPage);
      handleQueryForNavigate(nextPage);
    }
  };

  const handleSetPage = (page: number) => {
    setCurrPage(page);
    handleQueryForNavigate(page);
  };

  const handleGetAdminId = (adminId: string) => {
    setAdminId(adminId);
  };

  const handleCloseShowAdminProfile = () => {
    setAdminId(null);
  };

  const handleShowCreateAdmin = () => {
    setShowCreateAdmin(true);
  };

  const handleCloseShowCreateAdmin = () => {
    setShowCreateAdmin(false);
  };

  return (
    <div className="max-w-1800 w-full flex flex-col mt-10 gap-10 max-sm:gap-5 max-sm:mt-5">
      <h1 className="text-5xl pl-5">Admin</h1>

      <div className="flex justify-center items-center">
        <div
          className={clsx(
            'flex flex-col w-full h-full min-h-[80vh]',
            'border-2 border-[#d8d8d8] rounded-lg bg-[#ffffff] shadow-lg',
            ' overflow-auto whitespace-nowrap ',
            'max-md:max-h-[80vh]',
            'max-xs:min-h-[75vh] max-xs:max-h-[75vh]',
          )}
        >
          <HeaderAdminList
            handleShowCreateAdmin={handleShowCreateAdmin}
            filterRole={filterRole}
            handleFilterByRole={handleFilterByRole}
            handleSearch={debouncedSearch}
          />

          <AdminList
            currPage={currPage}
            filterRole={filterRole}
            searchCharacters={searchCharacters}
            handleGetAdminId={handleGetAdminId}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleSetPage={handleSetPage}
          />
        </div>
      </div>
      {getAdminId && (
        <AdminDetails
          searchCharacters={searchCharacters}
          handleCloseShowAdminProfile={handleCloseShowAdminProfile}
          adminId={getAdminId}
          currPage={currPage}
          filterRole={filterRole}
        />
      )}
      {showCreateAdmin && (
        <CreateAdmin handleCloseShowCreateAdmin={handleCloseShowCreateAdmin} />
      )}
    </div>
  );
}
