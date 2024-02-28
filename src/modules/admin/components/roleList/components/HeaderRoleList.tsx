import { Button, Input } from '@nextui-org/react';
import clsx from 'clsx';
import { DebouncedFunc } from 'lodash';
import { CiSearch } from 'react-icons/ci';
import { LuPlus } from 'react-icons/lu';

interface Props {
  totalRole: number;
  handleSearch: DebouncedFunc<(value: string) => void>;
}

const HeaderRoleList: React.FC<Props> = ({ totalRole, handleSearch }) => {
  return (
    <div className="z-30 sticky overflow-x-auto overflow-y-hidden min-h-[105px]">
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
            Total {totalRole || 0} roles
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
    </div>
  );
};

export default HeaderRoleList;
