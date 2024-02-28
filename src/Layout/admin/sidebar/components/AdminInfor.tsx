import { Accordion, AccordionItem, Avatar, Switch } from '@nextui-org/react';
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
    <div className="space-y-5">
      <Accordion
        showDivider={false}
        className="space-y-2"
        defaultSelectedKeys={
          !location.pathname.slice(1).split('/')[1] ? ['ADMIN_INFOR'] : []
        }
      >
        <AccordionItem
          key={'ADMIN_INFOR'}
          startContent={
            <span className="flex justify-center w-12">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </span>
          }
          title={admin?.fullName}
          classNames={{
            title:
              'text-white text-md title-admin-dashboard translate-x-0 opacity-100 transition-all duration-300',
            trigger: clsx(
              'relative h-12 py-3 transition-all bg-base-200 rounded-md overflow-hidden',
              'flex items-center',
              'hover:cursor-pointer',
              {
                'aria-[expanded=false]:!bg-[#ffffff3b]':
                  location.pathname.split('/').slice(1, 3).join('/') ===
                    `${import.meta.env.VITE_API_ADMIN.slice(
                      1,
                    )}/${sideBarAdminInfor.href.slice(1)}` ||
                  location.pathname.slice(1) ===
                    import.meta.env.VITE_API_ADMIN.slice(1),
              },
            ),
            indicator: 'text-white px-2',
            content: 'overflow-hidden',
          }}
          className="px-2"
        >
          <ul className={clsx('transition-all duration-300 ', '[&>li]:mt-1')}>
            {sideBarAdminInfor.children.map((item, idx) => (
              <li
                key={idx}
                className={clsx(
                  'flex hover:bg-[#ffffff21] transition-all bg-base-200 rounded-md overflow-hidden',
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
                  className="flex py-3 gap-5 w-full"
                >
                  <span className="flex-shrink-0 flex justify-center w-12">
                    {item.icons}
                  </span>
                  <span className="title-admin-dashboard transition-all duration-300">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
      {(isLgSmaller || isXlSmaller) && (
        <Switch
          size="md"
          color="primary"
          onChange={() => handleSetSidebarMini()}
          classNames={{
            wrapper: 'm-0',
            label:
              'text-white title-admin-dashboard transition-all duration-300',
          }}
          className="flex gap-3 px-4 w-full"
          defaultSelected={isSidebarMini}
        >
          Sidebar Mini
        </Switch>
      )}
    </div>
  );
};

export default AdminInfor;
