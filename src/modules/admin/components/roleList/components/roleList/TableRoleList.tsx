import { Checkbox, Tooltip } from '@nextui-org/react';
import clsx from 'clsx';
import { UseFieldArrayReturn } from 'react-hook-form';
import { CiEdit } from 'react-icons/ci';
import { ImBin } from 'react-icons/im';
import { IInputDeleteCheckedRole, IRole } from '../../dto/delete-role-list.dto';
import { GetRoleListDTO } from '../../dto/get-roles.dto';
import FooterRoleList from './FooterRoleList';

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

  const hasChecked: () => boolean = () => {
    if (data) {
      return data.roles.some((role) => arrayRole.includes(role.id));
    }

    return false;
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
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className=" bg-zinc-100 !p-4 w-full overflow-x-auto rounded-xl">
          <table className={clsx('table w-full h-full border-collapse ')}>
            {/* head */}
            <thead className="sticky top-0 z-30 shadow-sm rounded-xl">
              <tr
                className={clsx(
                  ' [&>th]:font-semibold [&>th]:p-3 [&>th]:bg-zinc-300 [&>th]:uppercase [&>th]:text-start [&>*:first-child]:rounded-l-xl [&>*:last-child]:rounded-r-xl overflow-hidden',
                )}
              >
                <th className="flex justify-center h-full">
                  <Checkbox
                    size="md"
                    onValueChange={handleCheckedAll}
                    isSelected={isCheckedAll()}
                    isIndeterminate={hasChecked() && !isCheckedAll()}
                  />
                </th>
                <th>Name Position</th>
                <th>Creator</th>
                <th>Time Create</th>
                <th>Time Update</th>
                <th className="w-28">
                  <div className="relative dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="btn btn-active btn-ghost w-[90px]"
                    >
                      Action
                    </label>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.roles.map((role, idx) => (
                <tr
                  key={idx}
                  className="[&>th]:px-3 [&>th]:py-3 [&>td]:px-3 [&>td]:py-3"
                >
                  <th>
                    <Checkbox
                      size="md"
                      onValueChange={() => handleChecked(role.id)}
                      isSelected={deleteCheckedRoles.fields
                        .map((role) => role.roleId)
                        .includes(role.id)}
                    />
                  </th>
                  <td className="uppercase">{role.position}</td>
                  <td>Male</td>
                  <td>hi</td>
                  <td>hehe</td>

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
      <FooterRoleList
        data={data}
        currPage={currPage}
        countCheckedRoles={deleteCheckedRoles.fields.length}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleSetPage={handleSetPage}
      />
    </>
  );
};

export default TableRoleList;
