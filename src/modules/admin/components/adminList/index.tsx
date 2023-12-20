import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useEffect, useRef, useState } from 'react';
import HeaderAdminList from './components/HeaderAdminList';
import AdminDetails from './components/adminDetails/AdminDetails';
import AdminList from './components/adminList';
import FooterAdminList from './components/adminList/FooterAdminList';
import CreateAdmin from './components/createAdmin';

export default function AdminManagement() {
  const [currPage, setCurrPage] = useState<number>(1);

  const [totalPages, setTotalPages] = useState<number | null>();

  const [totalAdmins, setTotalAdmins] = useState<number>();

  const [filterRole, setFilterByRole] = useState<string[]>([]);

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
    if (filterRole.includes(role))
      return setFilterByRole((prevs) => prevs.filter((val) => val !== role));
    setFilterByRole((prevs) => [...prevs, role]);
    setCurrPage(1);
  };

  const handleSetPage = (page: number) => {
    console.log(page);

    setCurrPage(page);
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
    <div className="max-w-1400 h-screen w-full flex flex-col py-16 gap-10 max-sm:gap-5 max-sm:mt-5">
      <div className="h-full flex justify-center items-center">
        <div
          className={clsx(
            'flex flex-col gap-5 w-full h-full p-8 min-h-[80vh]',
            'border-2 border-[#d8d8d8] rounded-lg bg-[#ffffff] shadow-lg',
            ' overflow-auto whitespace-nowrap ',
            'max-md:max-h-[80vh]',
            'max-xs:min-h-[75vh] max-xs:max-h-[75vh] overflow-hidden',
          )}
        >
          <HeaderAdminList
            handleShowCreateAdmin={handleShowCreateAdmin}
            filterRole={filterRole}
            handleFilterByRole={handleFilterByRole}
            handleSearch={debouncedSearch}
            totalAdmins={totalAdmins}
          />

          <AdminList
            currPage={currPage}
            filterRole={filterRole}
            searchCharacters={searchCharacters}
            handleGetAdminId={handleGetAdminId}
            handleSetTotalAdmins={setTotalAdmins}
            handleSetTotalPages={setTotalPages}
          />

          {totalPages && (
            <FooterAdminList
              totalPages={totalPages}
              currPage={currPage}
              handleSetPage={handleSetPage}
            />
          )}
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
