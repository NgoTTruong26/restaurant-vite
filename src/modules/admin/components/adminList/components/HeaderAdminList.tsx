import { HiUserGroup } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import useGetRoles from "../hooks/useGetRoles";
import LoadingHeaderAdminList from "./LoadingHeaderAdminList";

interface Props {
  filterRole?: string;
  handleFilterByRole: (role: string) => void;
}

const HeaderAdminList: React.FC<Props> = ({
  filterRole,
  handleFilterByRole,
}) => {
  const { data, status } = useGetRoles();
  return status === "loading" ? (
    <LoadingHeaderAdminList />
  ) : data ? (
    <div className="z-30 sticky top-0 flex w-full items-center gap-10 justify-between px-5 py-5 bg-[#ffffff]">
      <h2 className="capitalize text-3xl">Admin List</h2>
      <div className="grid items-center grid-cols-4 gap-5 max-w-2xl">
        <div className="flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
          <span className="border rounded-lg p-1 text-[#37944c] bg-[#eaf4ec]">
            <HiUserGroup size={25} />
          </span>
          <div className="flex flex-col ">
            <span className="capitalize whitespace-nowrap">Total Admin</span>
            <span className="capitalize whitespace-nowrap text-xl text-[#37944c]">
              {data.totalAdmin}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
          <span className="border rounded-lg p-1 text-[#3abff8] bg-[#eaf4ec]">
            <MdHomeRepairService size={25} />
          </span>
          <div className="flex flex-col ">
            <span className="capitalize whitespace-nowrap">Total Roles</span>
            <span className="capitalize whitespace-nowrap text-xl text-[#3abff8]">
              {data.total}
            </span>
          </div>
        </div>
        <select
          defaultValue={
            data.roles.some((val) => val.position === filterRole)
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
          {data.roles.map((role, idx) => (
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
  ) : (
    <></>
  );
};

export default HeaderAdminList;
