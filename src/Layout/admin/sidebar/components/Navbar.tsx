import { Accordion, AccordionItem } from '@nextui-org/react';
import { EAuthority, navbarForAdmin } from 'Layout/admin/constant';
import clsx from 'clsx';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  A?: (keyof typeof EAuthority)[];
}

export default function Navbar({}: Props) {
  const location = useLocation();

  const initKey = useMemo(
    () =>
      location.pathname.slice(1).split('/')[1].replace('-', '_').toUpperCase(),
    [location.pathname],
  );

  return (
    <Accordion
      selectionMode="multiple"
      showDivider={false}
      className="space-y-2"
      defaultExpandedKeys={[initKey]}
    >
      {navbarForAdmin.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.title}
          title={item.title}
          startContent={
            <span className="flex justify-center w-12 ">{item.icons}</span>
          }
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
                  `${import.meta.env.VITE_API_ADMIN.slice(1)}/${item.href.slice(
                    1,
                  )}`,
              },
            ),
            indicator: 'text-white px-2',
            content: 'overflow-hidden',
          }}
          className="px-2"
        >
          {item.children && (
            <ul className={clsx('transition-all duration-300', '[&>li]:mt-1')}>
              {item.children.map((val, idx) => (
                <li
                  key={idx}
                  className={clsx(
                    'hover:bg-[#ffffff21] transition-all rounded-md',
                    {
                      '!bg-[#ffffff3b]':
                        `${import.meta.env.VITE_API_ADMIN}/${item.href.slice(
                          1,
                        )}/${val.href.slice(1)}` === location.pathname ||
                        `${import.meta.env.VITE_API_ADMIN}/${item.href.slice(
                          1,
                        )}/${val.href.slice(1)}` ===
                          `${location.pathname}/${
                            item.children ? item.children[0].href.slice(1) : ''
                          }`,
                    },
                  )}
                >
                  <Link
                    to={`${import.meta.env.VITE_API_ADMIN}/${item.href.slice(
                      1,
                    )}/${val.href.slice(1)}`}
                    className="flex py-3 gap-5"
                  >
                    <span className="flex-shrink-0 flex justify-center w-12 uppercase font-medium">
                      {val.title
                        .split(' ')
                        .map((val) => val[0])
                        .join('')}
                    </span>
                    <span className="title-admin-dashboard transition-all duration-300">
                      {val.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
