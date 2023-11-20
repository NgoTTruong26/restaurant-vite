import clsx from 'clsx';
import RoleList from './components/roleList';

export default function RoleManagement() {
  return (
    <div className="max-w-1800 w-full flex flex-col mt-10 gap-10 max-sm:gap-5 max-sm:mt-5">
      <div className={clsx('flex items-center')}>
        <h1 className="text-5xl pl-5">Role</h1>
      </div>

      <div className="flex flex-col tab-border-none">
        <div className="tabs [&>.tab-active]:shadow-lg">
          <a className="tab tab-lg tab-lifted tab-active">Large</a>
          <a className="tab tab-lg tab-lifted">Largeádasdasdasd</a>
          <a className="tab tab-lg tab-lifted">Large</a>
        </div>
        <div
          className={clsx(
            'flex flex-col w-full h-full min-h-[75vh]',
            'rounded-tl-none rounded-lg bg-[#ffffff] shadow-lg',
            ' overflow-x-auto whitespace-nowrap ',
            'max-md:max-h-[75vh]',
          )}
        >
          <RoleList />
        </div>
      </div>
    </div>
  );
}
