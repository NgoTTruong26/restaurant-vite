import { sideBarAdminInfor } from 'Layout/admin/constant';
import clsx from 'clsx';
import useMediaQuery from 'hooks/useMediaQuery';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from 'redux/app/store';

interface Props {
  isSidebarMini: boolean;
  handleSetSidebarMini: () => void;
}

const AdminInfor: React.FC<Props> = ({
  handleSetSidebarMini,
  isSidebarMini,
}) => {
  const admin = useSelector((state: RootState) => state.setAdmin.value);

  const { isLgSmaller, isXlSmaller } = useMediaQuery();

  const location = useLocation();

  return (
    <div className="border-b border-[#ffffff4d] py-3 px-2 overflow-hidden">
      <div className="flex flex-col collapse mb-5">
        <input
          type="checkbox"
          name="my-accordion-1"
          className={clsx(
            'absolute top-0 [&:checked~.collapse-custom]:max-h-[500px] [&:checked~div:before]:rotate-180',
            {
              '[&:not(:checked)~#admin-infor]:!bg-[#ffffff3b] ':
                location.pathname.split('/').slice(1, 3).join('/') ===
                  `${import.meta.env.VITE_API_ADMIN.slice(
                    1,
                  )}/${sideBarAdminInfor.href.slice(1)}` ||
                location.pathname.slice(1) ===
                  import.meta.env.VITE_API_ADMIN.slice(1),
            },
          )}
        />
        <div
          id="admin-infor"
          className={clsx(
            ' rounded-md flex justify-between collapse-title text-xl font-medium p-0',
            'before:absolute before:border-4 before:border-b-0 before:border-l-transparent before:border-b-transparent before:border-r-transparent before:border-[#ffffff]',
            'before:top-[48%] before:right-2 before:transition-all before:duration-300',
          )}
        >
          <div className={clsx(' relative flex items-center gap-3 pl-2')}>
            <div className="w-12">
              <img
                className="w-full rounded-full"
                src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                alt="avatar"
              />
            </div>
            <div
              className={clsx(
                'title-admin-dashboard flex flex-col transition-all duration-300',
              )}
            >
              <span className=" font-medium text-base">{`${admin?.fullName}`}</span>
            </div>
          </div>
        </div>
        <ul
          className={clsx(
            'collapse-custom transition-all duration-300 max-h-0',
            '[&>li]:mt-1',
          )}
        >
          {sideBarAdminInfor.children.map((item, idx) => (
            <li
              key={idx}
              className={clsx(
                'flex hover:bg-[#ffffff21] transition-all bg-base-200 rounded-md overflow-hidden min-h-[3.75rem]',
                {
                  '!bg-[#ffffff3b]':
                    `${import.meta.env.VITE_API_ADMIN}/${item.href.slice(
                      1,
                    )}` === location.pathname ||
                    `${import.meta.env.VITE_API_ADMIN}/${item.href.slice(
                      1,
                    )}` === `${location.pathname}/profile`,
                },
              )}
            >
              <Link
                to={`${import.meta.env.VITE_API_ADMIN}/${item.href.slice(1)}`}
                className="flex items-center gap-3 py-3 px-2"
              >
                <span className="flex justify-center w-12">{item.icons}</span>
                <span className="title-admin-dashboard transition-all duration-300">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {(isLgSmaller || isXlSmaller) && (
        <li className="flex items-center gap-3">
          <input
            onChange={() => handleSetSidebarMini()}
            id="toggle-sidebar-mini"
            type="checkbox"
            className="toggle toggle-lg toggle-success"
            defaultChecked={isSidebarMini}
          />
          <label
            htmlFor="toggle-sidebar-mini"
            className="title-admin-dashboard transition-all duration-300 hover:cursor-pointer"
          >
            Sidebar Mini
          </label>
        </li>
      )}
    </div>
  );
};

export default AdminInfor;
