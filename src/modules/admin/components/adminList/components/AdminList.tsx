import clsx from "clsx";
import useGetAdminList from "../hooks/useGetAdminList";
import LoadingAdminList from "./LoadingAdminList";
import Button from "components/Button";
import { useState } from "react";
interface Props {
  currPage: number;
  filterRole?: string;
  handlePreviousPage: (previousPage: number | null) => void;
  handleNextPage: (nextPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleGetAdminId: (adminId: string) => void;
}

const AdminList: React.FC<Props> = ({
  currPage,
  filterRole,
  handlePreviousPage,
  handleNextPage,
  handleSetPage,
  handleGetAdminId,
}) => {
  const { data, status } = useGetAdminList(currPage, filterRole);

  return status === "loading" ? (
    <LoadingAdminList />
  ) : data ? (
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
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Male</td>
            <td>26/12/2001</td>
            <td>
              {admin.roles.map((role, idx) => (
                <span key={idx} className="badge badge-ghost badge-md">
                  {role.role.position}
                </span>
              ))}
            </td>
            <td>{admin.email}</td>
            <td>{admin.phone}</td>
            <th>
              <Button
                onClick={() => handleGetAdminId(admin.id)}
                className="capitalize"
              >
                Details
              </Button>
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
                  onClick={() => handlePreviousPage(data.previousPage)}
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
                {data.totalPages > 1 &&
                  Array(data.totalPages)
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
                {data.totalPages > 1 && (
                  <button
                    onClick={() => handleSetPage(data.totalPages)}
                    className={clsx("join-item btn", {
                      "bg-[#f87272]": currPage === data.totalPages,
                    })}
                  >
                    {data.totalPages}
                  </button>
                )}
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
  ) : (
    <></>
  );
};

export default AdminList;
