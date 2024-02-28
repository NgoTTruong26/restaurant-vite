import { PaginationItemType, usePagination } from '@nextui-org/react';
import clsx from 'clsx';
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from 'react-icons/io5';

interface Props {
  page: number;
  total: number;
  handleSetPage: (page: number) => void;
}

export default function PaginationMobile({
  page,
  total,
  handleSetPage,
}: Props) {
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total,
    page,
    showControls: true,
    siblings: 10,
    boundaries: 10,
  });

  console.log(activePage, page);

  return (
    <div className="flex flex-col gap-2">
      <p>Page: {activePage}</p>
      <ul className="flex gap-2 items-center">
        {range.map((page) => {
          if (page === PaginationItemType.NEXT) {
            return (
              <li key={page} aria-label="next page" className="w-4 h-4">
                <button
                  className="w-full h-full rounded-full"
                  onClick={() =>
                    activePage < total && handleSetPage(activePage + 1)
                  }
                >
                  <IoChevronForwardCircleSharp
                    size={20}
                    className="text-primary"
                  />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.PREV) {
            return (
              <li key={page} aria-label="previous page" className="w-4 h-4">
                <button
                  className="w-full h-full rounded-full"
                  onClick={() =>
                    activePage > 1 && handleSetPage(activePage - 1)
                  }
                >
                  <IoChevronBackCircleSharp
                    size={20}
                    className="text-primary"
                  />
                </button>
              </li>
            );
          }

          if (page === PaginationItemType.DOTS) {
            return (
              <li key={page} className="w-4 h-4">
                ...
              </li>
            );
          }

          return (
            <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
              <button
                className={clsx(
                  'w-full h-full bg-default-300 rounded-full',
                  activePage === page && '!bg-primary',
                )}
                onClick={() => handleSetPage(page)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
