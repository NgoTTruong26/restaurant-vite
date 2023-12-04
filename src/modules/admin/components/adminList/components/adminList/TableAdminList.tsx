import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import { UseFieldArrayReturn } from 'react-hook-form';
import {
  IAdmin,
  IInputDeleteCheckedAdmin,
} from '../../dto/delete-admin-list.dto';
import { GetAdminListDTO } from '../../dto/get-admins.dto';
import FooterAdminList from './FooterAdminList';

interface Props {
  data: GetAdminListDTO;
  currPage: number;
  deleteCheckedAdmins: UseFieldArrayReturn<
    IInputDeleteCheckedAdmin,
    'admins',
    'id'
  >;
  handleGetAdminId: (adminId: string) => void;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

const TableAdminList: React.FC<Props> = ({
  data,
  currPage,
  deleteCheckedAdmins,
  handleGetAdminId,
  handlePreviousPage,
  handleSetPage,
  handleNextPage,
}) => {
  const arrayAdmin: string[] = deleteCheckedAdmins.fields.map(
    (admin) => admin.adminId,
  );

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
      return data.adminList.every((admin) => arrayAdmin.includes(admin.id));
    }

    return false;
  };

  const handleCheckedAll = () => {
    if (data) {
      if (!isCheckedAll()) {
        return deleteCheckedAdmins.append(
          data.adminList.reduce<IAdmin[]>((prevs, curr) => {
            if (!arrayAdmin.includes(curr.id))
              return [
                ...prevs,
                {
                  adminId: curr.id,
                },
              ];
            return prevs;
          }, []),
        );
      }

      const arrayCurrentAdminData = data.adminList.map((admin) => admin.id);

      return deleteCheckedAdmins.replace(
        deleteCheckedAdmins.fields.filter(
          (admin) => !arrayCurrentAdminData.includes(admin.adminId),
        ),
      );
    }
  };

  const onHandleDeleteCheckedAdmin = () => {
    console.log(deleteCheckedAdmins.fields);
  };

  return (
    <>
      <div className="flex-1 flex flex-col justify-between overflow-x-auto overflow-y-auto">
        <table className="flex-1 table w-full">
          {/* head */}
          <thead>
            <tr
              className={clsx(
                '[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-[#f2f2f2] [&>th]:uppercase',
              )}
            >
              <th>
                <input
                  onChange={() => {
                    handleCheckedAll();
                  }}
                  checked={isCheckedAll()}
                  type="checkbox"
                  className="checkbox"
                />
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
                  <input
                    onChange={() => handleChecked(admin.id)}
                    checked={deleteCheckedAdmins.fields
                      .map((admin) => admin.adminId)
                      .includes(admin.id)}
                    type="checkbox"
                    className="checkbox"
                  />
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
                      <div className="font-bold">{`${admin.fullName}`}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Male</td>
                <td>
                  {admin.dateBirth
                    ? new Date(admin.dateBirth).toLocaleDateString('en-GB')
                    : 'Chưa có'}
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 max-h-12 max-w-[200px] min-w-[90px] overflow-x-hidden">
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
        <FooterAdminList
          data={data}
          currPage={currPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
        />
      </div>
    </>
  );
};

export default TableAdminList;
