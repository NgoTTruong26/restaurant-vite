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
import useGetRoles from '../../roleList/hooks/useGetRoles';
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
  const { data, status } = useGetRoles({});

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
                Roles
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

          <Button
            onClick={handleShowCreateAdmin}
            color="primary"
            endContent={<LuPlus />}
            size="lg"
          >
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
