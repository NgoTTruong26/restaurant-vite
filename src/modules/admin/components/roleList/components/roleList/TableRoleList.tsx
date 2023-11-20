import clsx from 'clsx';
import { UseFieldArrayReturn } from 'react-hook-form';
import FooterRoleList from './FooterRoleList';
import { GetRoleListDTO } from '../../dto/get-roles.dto';
import Button from 'components/Button';
import { IInputDeleteCheckedRole, IRole } from '../../dto/delete-role-list.dto';

interface Props {
  data: GetRoleListDTO;
  currPage: number;
  deleteCheckedRoles: UseFieldArrayReturn<
    IInputDeleteCheckedRole,
    'roles',
    'id'
  >;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

const TableRoleList: React.FC<Props> = ({
  data,
  currPage,
  deleteCheckedRoles,
  handlePreviousPage,
  handleSetPage,
  handleNextPage,
}) => {
  const arrayRole: string[] = deleteCheckedRoles.fields.map(
    (role) => role.roleId,
  );

  const handleChecked = (roleId: string) => {
    let index: number = 0;

    if (
      deleteCheckedRoles.fields.some((role, idx) => {
        if (role.roleId === roleId) {
          index = idx;
          return true;
        }
      })
    ) {
      return deleteCheckedRoles.remove(index);
    }

    return deleteCheckedRoles.append({
      roleId: roleId,
    });
  };

  const isCheckedAll: () => boolean = () => {
    if (data) {
      return data.roles.every((role) => arrayRole.includes(role.id));
    }

    return false;
  };

  const handleCheckedAll = () => {
    if (data) {
      if (!isCheckedAll()) {
        return deleteCheckedRoles.append(
          data.roles.reduce<IRole[]>((prevs, curr) => {
            if (!arrayRole.includes(curr.id))
              return [
                ...prevs,
                {
                  roleId: curr.id,
                },
              ];
            return prevs;
          }, []),
        );
      }

      const arrayCurrentRoleData = data.roles.map((role) => role.id);

      return deleteCheckedRoles.replace(
        deleteCheckedRoles.fields.filter(
          (role) => !arrayCurrentRoleData.includes(role.roleId),
        ),
      );
    }
  };

  const onHandleDeleteCheckedRole = () => {
    console.log(deleteCheckedRoles.fields);
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
              <th>Name Position</th>
              <th>Creator</th>
              <th>Time Create</th>
              <th>Number Employee</th>
              <th className="w-28">
                <div className="relative dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-active btn-ghost w-[90px]"
                  >
                    Action
                  </label>
                  <ul className="z-40 absolute right-0 p-2 menu dropdown-content bg-base-100 rounded-box shadow-lg min-w-[90px] bg-[#ffffff]">
                    <li
                      /* onClick={() => onHandleDeleteCheckedRole()} */
                      className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]"
                    >
                      Delete Checked
                    </li>
                    <li className="w-full rounded-lg py-3 px-3 hover:bg-[#dfdfe0] hover:cursor-pointer text-center active:bg-[#d6d6d6]">
                      Delete All Role
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.roles.map((role, idx) => (
              <tr key={idx}>
                <th>
                  <input
                    onChange={() => handleChecked(role.id)}
                    checked={deleteCheckedRoles.fields
                      .map((role) => role.roleId)
                      .includes(role.id)}
                    type="checkbox"
                    className="checkbox"
                  />
                </th>
                <td>{role.position}</td>
                <td>Male</td>
                <td>hi</td>
                <td>hehe</td>

                <th colSpan={1}>
                  <Button
                    /* onClick={() => handleGetRoleId(role.id)} */
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
        <FooterRoleList
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

export default TableRoleList;
