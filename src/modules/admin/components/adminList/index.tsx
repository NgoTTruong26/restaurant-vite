import { HiMiniPlusCircle } from "react-icons/hi2";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminList from "./components/AdminList";
import HeaderAdminList from "./components/HeaderAdminList";
import AdminDetails from "./components/AdminDetails";

export default function AdminManagement() {
  // logic checked all dùng hàm every check theo idx của hàm every

  const navigate = useNavigate();

  const location = useLocation();

  const [currPage, setCurrPage] = useState<number>(
    parseInt(
      (location.search
        ? location.search
            .split("?")[1]
            .split("&")
            .find((val) => val.includes("page="))
            ?.split("=")[1]
        : "1") || "1"
    )
  );

  const [filterRole, setFilterByRole] = useState<string | undefined>(
    location.search
      ? location.search
          .split("?")[1]
          .split("&")
          .find((val) => val.includes("role="))
          ?.split("=")[1]
      : undefined
  );

  const [getAdminId, setAdminId] = useState<string | null>();

  const handleFilterByRole = (role: string) => {
    setFilterByRole(role);
    setCurrPage(1);
    navigate("?role=" + role);
  };

  const handleQueryForNavigate = (page: number) => {
    if (location.search) {
      if (!location.search.includes("page=")) {
        return navigate(`${location.search + "&page="}` + page);
      }

      const query = location.search
        .split("?")[1]
        .split("&")
        .map((val) => {
          if (val.includes("page=")) {
            return "page=" + page;
          }
          return val;
        })
        .join("&");

      return navigate("?" + query);
    }

    return navigate("?page=" + page);
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
    <div className="flex flex-col mt-16 mb-10">
      <div className="flex gap-10 justify-between items-center">
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
        <div className="w-full grid max-h-[80vh] border-2 border-[#d8d8d8] rounded-lg pb-5 mt-10 bg-[#ffffff] shadow-lg overflow-x-auto whitespace-nowrap ">
          {/*  {status === "loading" || roleList.status === "loading" ? (
            <LoadingAdminList />
          ) : (
            data &&
            roleList.data && ( */}
          <>
            <HeaderAdminList
              filterRole={filterRole}
              handleFilterByRole={handleFilterByRole}
            />
            <AdminList
              filterRole={filterRole}
              currPage={currPage}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              handleSetPage={handleSetPage}
              handleGetAdminId={handleGetAdminId}
            />
          </>

          {/* )
          )} */}
        </div>
      </div>
      {getAdminId && (
        <AdminDetails
          handleCloseShowAdminProfile={handleCloseShowAdminProfile}
          adminId={getAdminId}
        />
      )}
    </div>
  );
}
