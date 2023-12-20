import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react';
import clsx from 'clsx';
import { DebouncedFunc } from 'lodash';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { LuPlus } from 'react-icons/lu';
import useGetRoles from '../hooks/useGetRoles';
import LoadingHeaderAdminList from './LoadingHeaderAdminList';

interface Props {
  filterRole: string[];
  handleSearch: DebouncedFunc<(value: string) => void>;
  handleFilterByRole: (role: string) => void;
  handleShowCreateAdmin: () => void;
  totalAdmins?: number;
}

const HeaderAdminList: React.FC<Props> = ({
  filterRole,
  handleSearch,
  handleFilterByRole,
  totalAdmins,
  handleShowCreateAdmin,
}) => {
  const { data, status } = useGetRoles();

  {
    /* <div className="z-30 sticky overflow-x-auto overflow-y-hidden min-h-[105px]">
    <div
      className={clsx(
        ' top-0 flex w-full items-center gap-10 justify-between px-5 py-5 bg-[#ffffff] min-w-[980px]',
        'max-sm:min-w-[880px]',
      )}
    >
      <div className="text-[#ffffff]">
        <button
          onClick={() => handleShowCreateAdmin()}
          className="capitalize flex items-center gap-2 btn btn-error text-[#ffffff]"
        >
          <span>
            <HiMiniPlusCircle size={22} />
          </span>
          <span>Create Admin</span>
        </button>
      </div>
      <div
        className={clsx(
          'grid items-center grid-cols-9 gap-3',
          '[&>div]:max-w-fit',
        )}
      >
        <div className="col-span-2 flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
          <span className="border rounded-lg p-1 text-[#37944c] bg-[#eaf4ec]">
            <HiUserGroup size={25} />
          </span>
          <div className="flex flex-col ">
            <span className="capitalize whitespace-nowrap">Total Admin</span>
            <span className="capitalize whitespace-nowrap text-xl text-[#37944c]">
              {data.totalAdmins}
            </span>
          </div>
        </div>
        <div className="flex col-span-2 items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
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
              : 'default'
          }
          onChange={(e) => handleFilterByRole(e.target.value)}
          className={clsx(
            'col-span-2 select select-bordered w-full max-w-[180px] capitalize',
            '[&>option]:capitalize',
          )}
        >
          <option value="default">All</option>
          {data.roles.map((role, idx) => (
            <option key={idx} value={role.position}>
              {role.position}
            </option>
          ))}
        </select>
        <div className="flex items-center col-span-3">
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
  </div> */
  }
  return status === 'loading' ? (
    <LoadingHeaderAdminList />
  ) : data ? (
    <div className="flex flex-col gap-4">
      <div
        className={clsx(
          'flex justify-between gap-3 items-end',
          'max-md:flex-col',
        )}
      >
        <Input
          isClearable
          className="w-full md:max-w-[44%]"
          placeholder="Search by name..."
          color="primary"
          variant="bordered"
          startContent={<CiSearch size={25} />}
          classNames={{
            input: 'text-lg',
          }}
          /* onClear={() => onClear()} */
          id="search"
          onValueChange={handleSearch}
        />

        <div
          className={clsx(
            'flex items-center gap-3 h-full',
            'max-xs:flex-col max-xs:items-end',
          )}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<IoIosArrowDown />}
                variant="flat"
                size="lg"
                className="text-white"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color="primary"
              aria-label="Table Columns"
              closeOnSelect={false}
              selectionMode="multiple"
              selectedKeys={filterRole}
              onAction={(e) => handleFilterByRole(e as string)}
            >
              {data.roles.map((role) => (
                <DropdownItem key={role.id} className="capitalize">
                  {role.position}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Button color="primary" endContent={<LuPlus />} size="lg">
            Add New
          </Button>
        </div>
      </div>
      <div
        className={clsx(
          'flex justify-between items-center',
          'max-xs:flex-col max-xs:items-end',
        )}
      >
        <span className="text-default-400 text-medium">
          Total {totalAdmins || 0} users
        </span>
        <label className="flex items-center text-default-400 text-medium">
          Rows per page:
          <select className="bg-transparent outline-none text-default-400 text-medium">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HeaderAdminList;
