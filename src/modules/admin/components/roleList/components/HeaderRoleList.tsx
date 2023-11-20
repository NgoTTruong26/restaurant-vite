import { MdHomeRepairService } from 'react-icons/md';
import clsx from 'clsx';
import { GoSearch } from 'react-icons/go';
import { DebouncedFunc } from 'lodash';
import { HiMiniPlusCircle } from 'react-icons/hi2';

interface Props {
  totalRole: number;
  handleSearch: DebouncedFunc<(value: string) => void>;
}

const HeaderRoleList: React.FC<Props> = ({ totalRole, handleSearch }) => {
  return (
    <div className="z-30 sticky overflow-x-auto overflow-y-hidden min-h-[105px]">
      <div
        className={clsx(
          ' top-0 flex w-full items-center gap-10 justify-between px-5 py-5 bg-[#ffffff] min-w-[580px]',
        )}
      >
        <div className="text-[#ffffff]">
          <button
            /* onClick={() => handleShowCreateAdmin()} */
            className="min-w-[150px] capitalize flex items-center gap-2 btn btn-error text-[#ffffff]"
          >
            <span>
              <HiMiniPlusCircle size={22} />
            </span>
            Create Role
          </button>
        </div>
        <div
          className={clsx(
            'grid items-center grid-cols-7 gap-3 min-w-fit',
            '[&>div]:max-w-fit',
          )}
        >
          <div className="flex col-span-3 items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
            <span className="border rounded-lg p-1 text-[#3abff8] bg-[#eaf4ec]">
              <MdHomeRepairService size={25} />
            </span>
            <div className="flex flex-col ">
              <span className="capitalize whitespace-nowrap">Total Roles</span>
              <span className="capitalize whitespace-nowrap text-xl text-[#3abff8]">
                {totalRole}
              </span>
            </div>
          </div>
          <div className="flex items-center col-span-4">
            <div
              className={clsx(
                'flex px-2 bg-[#ffffff] w-full items-center border shadow-xl rounded-xl min-w-[200px] overflow-hidden',
              )}
            >
              <div className="flex items-center pr-4">
                <GoSearch />
              </div>
              <div className="flex w-full items-center">
                <input
                  className=" w-full py-2"
                  placeholder="Search..."
                  type="text"
                  id="search"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRoleList;
