import clsx from "clsx";
import LoadingChildrenCategory from "modules/home/components/bookings/components/LoadingChildrenCategory";
import useGetRoles from "../../../hooks/useGetRoles";
import { GrFormClose } from "react-icons/gr";
import { useFormModifyAdminRole } from "../../hooks/useFormModifyAdminRole";
import { IModifyAdminRoleDTO } from "../../../dto/modify-role-admin.dto";
import useUpdateAdminRoles from "../../hooks/useUpdateAdminRoles";
import { useLocation } from "react-router-dom";

interface Props {
  roles: string[];
  adminId: string;
  currPage: number;
  filterRole?: string;
  handleCloseVisible: () => void;
}

const ModifyAdminRole: React.FC<Props> = ({
  handleCloseVisible,
  roles,
  adminId,
  currPage,
  filterRole,
}) => {
  const { status, data } = useGetRoles();

  const { methods } = useFormModifyAdminRole();

  const { mutate } = useUpdateAdminRoles({ currPage, filterRole });

  const location = useLocation();

  const onSubmit = (dataInput: IModifyAdminRoleDTO) => {
    const removeRoles = roles.filter(
      (role) => !dataInput.modifyAdminRole.includes(role)
    );

    if (removeRoles.length > 0) {
      return mutate({ adminId, roles: dataInput.modifyAdminRole, removeRoles });
    }

    return mutate({ adminId, roles: dataInput.modifyAdminRole });
  };

  return (
    <div
      className={clsx(
        "z-30 absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#0000002f] overflow-hidden "
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
              {status === "loading" ? (
                <LoadingChildrenCategory />
              ) : (
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="w-[40%]">
                        <label>
                          <input
                            /*  onChange={() => handleCheckedAll()}
                      checked={listChildrenCategory.every((item) =>
                        listChecked.includes(item.id)
                      )} */
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
                              /*  onChange={() => handleChecked(item.id)} */
                              defaultChecked={roles.includes(role.id)}
                              id={role.id}
                              type="checkbox"
                              className="checkbox"
                              value={role.id}
                              {...methods.register(`modifyAdminRole.${idx}`)}
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
                  Xác nhận
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
