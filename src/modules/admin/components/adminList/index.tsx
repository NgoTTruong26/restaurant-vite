import { HiMiniPlusCircle } from 'react-icons/hi2';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminDetails from './components/adminDetails/AdminDetails';
import HeaderAdminList from './components/HeaderAdminList';
import debounce from 'lodash.debounce';
import AdminList from './components/adminList';
import clsx from 'clsx';
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

  return (
    <div className="flex flex-col mt-16 mb-8 max-sm:mt-0">
      <div className="flex gap-10 justify-between items-center max-sm:flex-col">
        <h1 className="text-5xl pl-5">Admin</h1>
        <div className="text-[#ffffff]">
          <button className="capitalize flex items-center gap-2 btn btn-error text-[#ffffff]">
            <span>
              <HiMiniPlusCircle size={22} />
            </span>
            Add Admin
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={clsx(
            'flex flex-col w-full h-full min-h-[750px]',
            'border-2 border-[#d8d8d8] rounded-lg mt-10 bg-[#ffffff] shadow-lg',
            ' overflow-x-auto whitespace-nowrap ',
            'max-sm:min-h-[80vh]',
          )}
        >
          <HeaderAdminList
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
      <CreateAdmin handleCloseShowCreateAdmin={() => {}} />
    </div>
  );
}
