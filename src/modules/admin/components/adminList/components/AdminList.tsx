import clsx from "clsx";
import useGetAdminList from "../hooks/useGetAdminList";
import LoadingAdminList from "./LoadingAdminList";
import Button from "components/Button";
import HeaderAdminList from "./HeaderAdminList";
import FooterAdminList from "./FooterAdminList";
import { useDeleteCheckedAdmin } from "./hooks/useDeleteCheckedAdmin";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

interface Props {
  currPage: number;
  filterRole?: string;
  handleFilterByRole: (role: string) => void;
  handlePreviousPage: (previousPage: number | null) => void;
  handleNextPage: (nextPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleGetAdminId: (adminId: string) => void;
}

const AdminList: React.FC<Props> = ({
  currPage,
  filterRole,
  handleFilterByRole,
  handlePreviousPage,
  handleNextPage,
  handleSetPage,
  handleGetAdminId,
}) => {
  const [characters, setCharacters] = useState<string>();

  const { data, status } = useGetAdminList(currPage, filterRole, characters);

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setCharacters(value);
      if (currPage) handleSetPage(1);
    }, 300)
  ).current;

  useEffect(() => {
    debouncedSearch.cancel();
  }, [debouncedSearch]);

  console.log(characters, currPage);

  const { deleteCheckedAdmins } = useDeleteCheckedAdmin();

  const handleChecked = (adminId: string) => {
    let index: number = 0;

    if (
      deleteCheckedAdmins.fields.some((admin, idx) => {
        if (admin.adminId === adminId) {
          index = idx;
          return true;
        }
      })
    ) {
      return deleteCheckedAdmins.remove(index);
    }

    return deleteCheckedAdmins.append({
      adminId: adminId,
    });
  };

  const isCheckedAll: () => boolean = () => {
    if (data) {
      const arrayAdminRoles: string[] = deleteCheckedAdmins.fields.map(
        (admin) => admin.adminId
      );

      return data.adminList.every((admin) =>
        arrayAdminRoles.includes(admin.id)
      );
    }

    return false;
  };

  const handleCheckedAll = () => {
    if (data) {
      if (!isCheckedAll()) {
        return deleteCheckedAdmins.replace(
          data.adminList.map((admin) => ({
            adminId: admin.id,
          }))
        );
      }

      return deleteCheckedAdmins.replace([]);
    }
  };

  const onHandleDeleteCheckedAdmin = () => {
    console.log(deleteCheckedAdmins.fields);
  };

  return status === "loading" ? (
    <LoadingAdminList />
  ) : data ? (
    <>
      <HeaderAdminList
        totalAdmin={data.totalAdmin}
        filterRole={filterRole}
        handleFilterByRole={handleFilterByRole}
        handleSearch={debouncedSearch}
      />
      <div className="flex-1 overflow-x-auto overflow-y-hidden">
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
                  <input
                    onChange={() => {
                      handleCheckedAll();
                    }}
                    checked={isCheckedAll()}
                    type="checkbox"
                    className="checkbox"
                  />
                </label>
              </th>
              <th>Name</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Roles</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>
                <div className="relative dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-active btn-ghost w-[90px]"
                  >
                    Action
                  </label>
                  <ul className="z-40 absolute right-0 p-2 menu dropdown-content bg-base-100 rounded-box shadow-lg min-w-[90px] bg-[#ffffff]">
                    <li
                      onClick={() => onHandleDeleteCheckedAdmin()}
                      className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]"
                    >
                      Delete Checked
                    </li>
                    <li className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]">
                      Delete All Admin
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.adminList.map((admin, idx) => (
              <tr key={idx}>
                <th>
                  <label>
                    <input
                      onChange={() => handleChecked(admin.id)}
                      checked={deleteCheckedAdmins.fields
                        .map((admin) => admin.adminId)
                        .includes(admin.id)}
                      type="checkbox"
                      className="checkbox"
                    />
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
                  <div className="flex flex-wrap gap-2 max-h-12 max-w-[200px] overflow-x-auto">
                    {admin.roles.map((role, idx) => (
                      <span key={idx} className="badge badge-ghost badge-md">
                        {role.position}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{admin.email}@gamil.com</td>
                <td>{admin.phone}</td>
                <th>
                  <Button
                    onClick={() => handleGetAdminId(admin.id)}
                    className="capitalize w-[90px]"
                  >
                    Details
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
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
};

export default AdminList;
