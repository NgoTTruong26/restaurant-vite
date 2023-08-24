import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { HiMiniPlusCircle } from "react-icons/hi2";
import useGetAdminList from "./hooks/useGetAdminList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdHomeRepairService } from "react-icons/md";
import useGetRoles from "./hooks/useGetRoles";

export default function AdminList() {
  // logic checked all dùng hàm every check theo idx của hàm every

  const navigate = useNavigate();

  const location = useLocation();

  const [currPage, setCurrPage] = useState<number>(
    parseInt(
      location.search
        .split("?")[1]
        .split("&")
        .find((val) => val.includes("page="))
        ?.split("=")[1] || "1"
    )
  );

  const [filterRole, setFilterByRole] = useState<string | undefined>(
    location.search
      .split("?")[1]
      .split("&")
      .find((val) => val.includes("role="))
      ?.split("=")[1]
  );

  console.log(filterRole);

  const { data } = useGetAdminList(currPage, filterRole);

  const roleList = useGetRoles();

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
      <div className="grid max-h-[80vh] border-2 border-[#d8d8d8] rounded-lg pb-5 mt-10 bg-[#ffffff] shadow-lg overflow-x-auto whitespace-nowrap ">
        {data && roleList.data && (
          <>
            <div className="z-30 sticky top-0 flex w-full items-center gap-10 justify-between px-5 py-5 bg-[#ffffff]">
              <h2 className="capitalize text-3xl">Admin List</h2>
              <div className="grid items-center grid-cols-4 gap-5 max-w-2xl">
                <div className="flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
                  <span className="border rounded-lg p-1 text-[#37944c] bg-[#eaf4ec]">
                    <HiUserGroup size={25} />
                  </span>
                  <div className="flex flex-col ">
                    <span className="capitalize whitespace-nowrap">
                      Total Admin
                    </span>
                    <span className="capitalize whitespace-nowrap text-xl text-[#37944c]">
                      {data.total}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
                  <span className="border rounded-lg p-1 text-[#3abff8] bg-[#eaf4ec]">
                    <MdHomeRepairService size={25} />
                  </span>
                  <div className="flex flex-col ">
                    <span className="capitalize whitespace-nowrap">
                      Total Roles
                    </span>
                    <span className="capitalize whitespace-nowrap text-xl text-[#3abff8]">
                      {roleList.data.total}
                    </span>
                  </div>
                </div>
                <select
                  defaultValue={
                    roleList.data.roles.some(
                      (val) => val.position === filterRole
                    )
                      ? filterRole
                      : "default"
                  }
                  onChange={(e) => handleFilterByRole(e.target.value)}
                  className={clsx(
                    "select select-bordered w-full max-w-[180px] capitalize",
                    "[&>option]:capitalize"
                  )}
                >
                  <option value="default" disabled>
                    Filter By Roles
                  </option>
                  {roleList.data.roles.map((role, idx) => (
                    <option key={idx} value={role.position}>
                      {role.position}
                    </option>
                  ))}
                </select>
                <div className="flex items-center">
                  <div
                    className={clsx(
                      "flex px-2 bg-[#ffffff] w-full items-center border shadow-xl rounded-xl overflow-hidden"
                    )}
                  >
                    <div className="flex items-center pr-4">
                      <GoSearch />
                    </div>
                    <div className="flex w-full min-w-[200px] items-center">
                      <input
                        className=" w-full py-2"
                        placeholder="Search..."
                        type="text"
                        id="search"
                        /* {...methods.register("idBooking")} */
                      />
                      {/* {methods.watch("idBooking") && (
                            <div
                              className={clsx(
                                "px-4 font-medium underline underline-offset-4 text-[18px] cursor-pointer",
                                "max-sm:hidden max-sm:text-[14px]"
                              )}
                              onClick={() => methods.setValue("idBooking", "")}
                            >
                              Clear
                            </div>
                          )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr
                    className={clsx(
                      "[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2] [&>th]:uppercase"
                    )}
                  >
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Roles</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {data.adminList.map((admin, idx) => (
                    <tr key={idx}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{`${admin.firstName} ${admin.lastName}`}</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>Male</td>
                      <td>26/12/2001</td>
                      <td>
                        {admin.roles.map((role, idx) => (
                          <span
                            key={idx}
                            className="badge badge-ghost badge-md"
                          >
                            {role.role.position}
                          </span>
                        ))}
                      </td>
                      <td>{admin.email}</td>
                      <td>{admin.phone}</td>
                      <th>
                        <div className="dropdown dropdown-hover">
                          <label tabIndex={0} className="btn m-1">
                            Hover
                          </label>
                          <ul
                            tabIndex={0}
                            className={clsx(
                              "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit bg-[#ffffff]",
                              "[&>li]:mt-1 [&>li>span:active]:bg-[#dedede]"
                            )}
                          >
                            <li>
                              <span>Item 1</span>
                            </li>
                            <li>
                              <span>Item 2</span>
                            </li>
                          </ul>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr
                    className={clsx(
                      "[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2]"
                    )}
                  >
                    <th colSpan={8}>
                      <div className="flex justify-center">
                        <div className="flex gap-1 join [&>button]:w-14 ">
                          <button
                            disabled={data.previousPage ? false : true}
                            onClick={() =>
                              handlePreviousPage(data.previousPage)
                            }
                            className="join-item btn"
                          >
                            «
                          </button>
                          <button
                            onClick={() => handleSetPage(1)}
                            className={clsx("join-item btn", {
                              "bg-[#f87272]": currPage === 1,
                            })}
                          >
                            1
                          </button>
                          {currPage - 2 > 1 && (
                            <span className="flex items-end justify-center w-14">
                              . . .
                            </span>
                          )}
                          {Array(data.totalPages)
                            .fill("")
                            .map((val, idx) => {
                              if (idx > 0 && idx < data.totalPages - 1) {
                                return (
                                  Math.abs(currPage - (idx + 1)) <= 1 && (
                                    <button
                                      onClick={() => handleSetPage(idx + 1)}
                                      key={idx}
                                      className={clsx("join-item btn", {
                                        "bg-[#f87272]": currPage === idx + 1,
                                      })}
                                    >
                                      {idx + 1}
                                    </button>
                                  )
                                );
                              }
                            })}

                          {data.totalPages - currPage > 2 && (
                            <span className="flex items-end justify-center w-14">
                              . . .
                            </span>
                          )}
                          <button
                            onClick={() => handleSetPage(data.totalPages)}
                            className={clsx("join-item btn", {
                              "bg-[#f87272]": currPage === data.totalPages,
                            })}
                          >
                            {data.totalPages}
                          </button>
                          <button
                            disabled={data.nextPage ? false : true}
                            onClick={() => {
                              handleNextPage(data.nextPage);
                            }}
                            className="join-item btn"
                          >
                            »
                          </button>
                        </div>
                      </div>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
