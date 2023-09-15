import clsx from 'clsx';
import { GetAdminListDTO } from '../../dto/get-admins.dto';

interface Props {
  currPage: number;
  data: GetAdminListDTO;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

const FooterAdminList: React.FC<Props> = ({
  data,
  currPage,
  handlePreviousPage,
  handleSetPage,
  handleNextPage,
}) => {
  return (
    <div className={clsx('bg-[#ffffff] border-t-2 border-[#f2f2f2] py-2')}>
      <div className="flex justify-center">
        <div className="flex gap-1 join [&>button]:w-14 ">
          <button
            disabled={data.previousPage ? false : true}
            onClick={() => handlePreviousPage(data.previousPage)}
            className="join-item btn"
          >
            «
          </button>
          <button
            onClick={() => handleSetPage(1)}
            className={clsx('join-item btn', {
              'bg-[#f87272] hover:bg-[#fe7c7c]': currPage === 1,
            })}
          >
            1
          </button>
          {currPage - 2 > 1 && (
            <span className="flex items-end justify-center w-14">. . .</span>
          )}
          {data.totalPages > 1 &&
            Array(data.totalPages)
              .fill('')
              .map((val, idx) => {
                if (idx > 0 && idx < data.totalPages - 1) {
                  return (
                    Math.abs(currPage - (idx + 1)) <= 1 && (
                      <button
                        onClick={() => handleSetPage(idx + 1)}
                        key={idx}
                        className={clsx('join-item btn', {
                          'bg-[#f87272] hover:bg-[#fe7c7c]':
                            currPage === idx + 1,
                        })}
                      >
                        {idx + 1}
                      </button>
                    )
                  );
                }
              })}
          {data.totalPages - currPage > 2 && (
            <span className="flex items-end justify-center w-14">. . .</span>
          )}
          {data.totalPages > 1 && (
            <button
              onClick={() => handleSetPage(data.totalPages)}
              className={clsx('join-item btn', {
                'bg-[#f87272] hover:bg-[#fe7c7c]': currPage === data.totalPages,
              })}
            >
              {data.totalPages}
            </button>
          )}
          <button
            disabled={data.nextPage ? false : true}
            onClick={() => {
              handleNextPage(data.nextPage);
            }}
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterAdminList;
