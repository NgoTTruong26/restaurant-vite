import clsx from 'clsx';

import { GrFormClose } from 'react-icons/gr';

import LoadingChildrenCategory from 'modules/customer/components/home/components/bookings/components/LoadingChildrenCategory';
import { useEffect } from 'react';
import useGetRoles from '../../hooks/useGetRoles';
import { useFormModifyAdminRole } from '../hooks/useFormModifyAdminRole';
import useUpdateAdminRoles from '../hooks/useUpdateAdminRoles';

interface Props {
  roles: string[];
  adminId: string;
  currPage: number;
  filterRole: string[];
  searchCharacters?: string;
  handleCloseVisible: () => void;
}

const ModifyAdminRole: React.FC<Props> = ({
  handleCloseVisible,
  roles,
  adminId,
  currPage,
  filterRole,
  searchCharacters,
}) => {
  const { methods, modifyAdminRole } = useFormModifyAdminRole();

  const { status, data } = useGetRoles();

  const { mutate } = useUpdateAdminRoles({
    currPage,
    filterRole,
    searchCharacters,
  });

  useEffect(() => {
    roles.forEach((role) => {
      modifyAdminRole.append({
        roleId: role,
      });
    });
  }, [roles]);

  const handleChecked = (roleId: string) => {
    let index: number = 0;

    if (
      modifyAdminRole.fields.some((role, idx) => {
        if (role.roleId === roleId) {
          index = idx;
          return true;
        }
      })
    ) {
      return modifyAdminRole.remove(index);
    }

    return modifyAdminRole.append({
      roleId: roleId,
    });
  };

  const isCheckedAll: () => boolean = () => {
    if (data) {
      const arrayAdminRoles: string[] = modifyAdminRole.fields.map(
        (role) => role.roleId,
      );

      return data.roles.every((role) => arrayAdminRoles.includes(role.id));
    }

    return false;
  };

  const handleCheckedAll = () => {
    if (data) {
      if (!isCheckedAll()) {
        return modifyAdminRole.replace(
          data.roles.map((role) => ({
            roleId: role.id,
          })),
        );
      }

      return modifyAdminRole.replace([]);
    }
  };

  const onSubmit = () => {
    const removeRoles = roles.filter(
      (role) =>
        !modifyAdminRole.fields.map((role) => role.roleId).includes(role),
    );

    if (removeRoles.length > 0) {
      return mutate(
        { adminId, roles: modifyAdminRole.fields, removeRoles },
        {
          onSettled: () => {
            handleCloseVisible();
          },
        },
      );
    }

    return mutate(
      { adminId, roles: modifyAdminRole.fields },
      {
        onSettled: () => {
          handleCloseVisible();
        },
      },
    );
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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                              onChange={() => handleChecked(role.id)}
                              checked={modifyAdminRole.fields
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
              <div className="flex justify-end py-2 px-5 ">
                <button className="p-3 font-medium text-[#ffffff] bg-[#3d4451] rounded-xl cursor-pointer">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModifyAdminRole;
