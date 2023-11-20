import clsx from 'clsx';

import LoadingChildrenCategory from 'modules/customer/components/home/components/bookings/components/LoadingChildrenCategory';
import { UseFieldArrayReturn } from 'react-hook-form';
import { GrFormClose } from 'react-icons/gr';
import { IInputDataCreateAdmin } from '.';
import useGetRoles from '../../hooks/useGetRoles';

interface Props {
  roles: UseFieldArrayReturn<IInputDataCreateAdmin, 'roles', 'id'>;
  handleCloseVisible: () => void;
}

const ModifyAdminRole: React.FC<Props> = ({ roles, handleCloseVisible }) => {
  const { status, data } = useGetRoles();

  const handleChecked = (roleId: string, position: string) => {
    let index: number = 0;

    if (
      roles.fields.some((role, idx) => {
        if (role.roleId === roleId) {
          index = idx;
          return true;
        }
      })
    ) {
      return roles.remove(index);
    }

    return roles.append({
      roleId: roleId,
      position,
    });
  };

  const isCheckedAll: () => boolean = () => {
    if (data) {
      const arrayAdminRoles: string[] = roles.fields.map((role) => role.roleId);

      return data.roles.every((role) => arrayAdminRoles.includes(role.id));
    }

    return false;
  };

  const handleCheckedAll = () => {
    if (data) {
      if (!isCheckedAll()) {
        return roles.replace(
          data.roles.map((role) => ({
            roleId: role.id,
            position: role.position,
          })),
        );
      }

      return roles.replace([]);
    }
  };

  return (
    <div
      className={clsx(
        'z-30 absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#0000002f] overflow-hidden ',
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="z-30 px-5 max-w-[600px] w-full animate-drop-top opacity-100 transition-all duration-100"
      >
        {data && (
          <div className="relative overflow-y-auto bg-[#ffffff] rounded-lg shadow-lg max-h-[400px]">
            <span
              onClick={() => {
                handleCloseVisible();
              }}
              className="z-30 h-0 sticky float-right right-2 top-2 hover:cursor-pointer"
            >
              <GrFormClose size={25} />
            </span>
            {status === 'loading' ? (
              <LoadingChildrenCategory />
            ) : (
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th className="w-[40%]">
                      <label>
                        <input
                          onChange={() => handleCheckedAll()}
                          checked={isCheckedAll()}
                          type="checkbox"
                          className="checkbox"
                        />
                      </label>
                    </th>
                    <th>Chức vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {data.roles.map((role, idx) => (
                    <tr
                      key={idx}
                      className="[&>th]:whitespace-normal [&>td]:whitespace-normal"
                    >
                      <th>
                        <label>
                          <input
                            onChange={() =>
                              handleChecked(role.id, role.position)
                            }
                            checked={roles.fields
                              .map((role) => role.roleId)
                              .includes(role.id)}
                            id={role.id}
                            type="checkbox"
                            className="checkbox"
                            value={role.id}
                          />
                        </label>
                      </th>
                      <td>
                        <label
                          className="hover:cursor-pointer"
                          htmlFor={role.id}
                        >
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-bold capitalize">
                                {role.position}
                              </div>
                            </div>
                          </div>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModifyAdminRole;
