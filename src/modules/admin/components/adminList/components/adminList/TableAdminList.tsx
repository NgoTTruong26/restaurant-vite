import { Checkbox, Chip, Tooltip, User } from '@nextui-org/react';
import clsx from 'clsx';
import { UseFieldArrayReturn } from 'react-hook-form';
import { CiEdit } from 'react-icons/ci';
import { ImBin } from 'react-icons/im';
import {
  IAdmin,
  IInputDeleteCheckedAdmin,
} from '../../dto/delete-admin-list.dto';
import { GetAdminListDTO } from '../../dto/get-admins.dto';
interface Props {
  data: GetAdminListDTO;
  deleteCheckedAdmins: UseFieldArrayReturn<
    IInputDeleteCheckedAdmin,
    'admins',
    'id'
  >;
  handleGetAdminId: (adminId: string) => void;
}

const TableAdminList: React.FC<Props> = ({ data, deleteCheckedAdmins }) => {
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

  const hasChecked: () => boolean = () => {
    if (data) {
      return data.adminList.some((admin) => arrayAdmin.includes(admin.id));
    }

    return false;
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
    <div className="flex flex-col gap-5 overflow-hidden">
      <div className=" bg-zinc-100 p-4 w-full overflow-x-auto rounded-xl">
        <table className={clsx('table w-full h-full border-collapse ')}>
          {/* head */}
          <thead className="sticky top-0 z-30 shadow-sm rounded-xl">
            <tr
              className={clsx(
                ' [&>th]:font-semibold [&>th]:p-3 [&>th]:bg-zinc-300 [&>th]:uppercase [&>th]:text-start [&>*:first-child]:rounded-l-xl [&>*:last-child]:rounded-r-xl overflow-hidden',
              )}
            >
              <th className="!text-center">
                <Checkbox
                  size="md"
                  onValueChange={handleCheckedAll}
                  isSelected={isCheckedAll()}
                  isIndeterminate={hasChecked() && !isCheckedAll()}
                />
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
              <tr
                key={idx}
                className="[&>th]:px-3 [&>th]:py-3 [&>td]:px-3 [&>td]:py-3"
              >
                <th>
                  <Checkbox
                    size="md"
                    onValueChange={() => handleChecked(admin.id)}
                    isSelected={deleteCheckedAdmins.fields
                      .map((admin) => admin.adminId)
                      .includes(admin.id)}
                  />
                </th>
                <td>
                  <User
                    avatarProps={{
                      radius: 'lg',
                      src: 'https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg',
                    }}
                    description="United States"
                    name={admin.fullName}
                    classNames={{ name: 'font-semibold' }}
                  >
                    {admin.fullName}
                  </User>
                </td>
                <td>Male</td>
                <td>
                  {admin.dateBirth
                    ? new Date(admin.dateBirth).toLocaleDateString('en-GB')
                    : 'Not yet added'}
                </td>
                <td>
                  <div className="flex gap-2 max-w-[200px] overflow-x-auto">
                    {admin.roles.map((role) => (
                      <Chip
                        key={role.id}
                        className="capitalize"
                        color="primary"
                        size="sm"
                        variant="flat"
                      >
                        {role.position}
                      </Chip>
                    ))}
                  </div>
                </td>
                <td>{admin.email}</td>
                <td>{admin.phone}</td>
                <th>
                  <div className="relative flex items-center gap-3">
                    <Tooltip content="Edit user">
                      <span className="text-xl cursor-pointer active:opacity-50">
                        <CiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-xl text-danger cursor-pointer active:opacity-50">
                        <ImBin />
                      </span>
                    </Tooltip>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default TableAdminList;
