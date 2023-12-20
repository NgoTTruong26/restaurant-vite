import { yupResolver } from '@hookform/resolvers/yup';
import { Pagination } from '@nextui-org/react';
import useMediaQuery from 'hooks/useMediaQuery';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateRequireMessage } from 'utils/getValidateMessage';
import * as yup from 'yup';

interface Props {
  totalPages: number;
  currPage: number;
  handleSetPage: (page: number) => void;
}

export interface InputNavigatePage {
  page: number;
}

const FooterAdminList: React.FC<Props> = ({
  currPage,
  handleSetPage,
  totalPages,
}) => {
  const [showNavigatePage, setShowNavigatePage] = useState<boolean>(false);

  const { formState, handleSubmit, methods } = useFormNavigatePage(currPage);

  const { isSmSmaller, isXsSmaller } = useMediaQuery();

  const handleShowNavigatePage = useCallback(() => {
    setShowNavigatePage(true);
  }, []);

  const handleNavigatePage = useCallback((data: InputNavigatePage) => {
    handleSetPage(data.page);
    setShowNavigatePage(false);
  }, []);

  {
    /* <div className={clsx('bg-[#ffffff] py-2')}>
    <div className="flex justify-center">
      <div className="flex gap-1 join [&>button]:w-14 ">
        <button
          disabled={data.previousPage ? false : true}
          onClick={() => handlePreviousPage(data.previousPage)}
          className="join-item btn"
        >
          «
        </button>
        {!(isXsSmaller || isSmSmaller) ? (
          <>
            <button
              onClick={() => handleSetPage(1)}
              className={clsx('join-item btn', {
                'bg-[#f87272] hover:bg-[#fe7c7c]': currPage === 1,
              })}
            >
              1
            </button>
            {currPage - 2 > 1 && (
              <span className="flex items-end justify-center w-14">
                . . .
              </span>
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
              <span className="flex items-end justify-center w-14">
                . . .
              </span>
            )}
            {data.totalPages > 1 && (
              <button
                onClick={() => handleSetPage(data.totalPages)}
                className={clsx('join-item btn', {
                  'bg-[#f87272] hover:bg-[#fe7c7c]':
                    currPage === data.totalPages,
                })}
              >
                {data.totalPages}
              </button>
            )}
          </>
        ) : (
          <>
            {showNavigatePage && (
              <div
                className={clsx(
                  'z-30 absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[#0000002f] overflow-hidden ',
                )}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="z-30 px-5 max-w-[400px] w-full animate-drop-top opacity-100 transition-all duration-100"
                >
                  {data && (
                    <div className="relative overflow-y-auto bg-[#ffffff] rounded-lg shadow-lg max-h-[400px]">
                      <span
                        onClick={() => {
                          setShowNavigatePage(false);
                        }}
                        className="z-30 h-0 sticky float-right right-2 top-2 hover:cursor-pointer"
                      >
                        <GrFormClose size={25} />
                      </span>

                      <form
                        onSubmit={handleSubmit(handleNavigatePage)}
                        className={clsx(
                          'max-h-[310px] flex flex-col gap-3 p-3 overflow-y-auto',
                        )}
                      >
                        {Array(data.totalPages)
                          .fill('')
                          .map((val, idx) => (
                            <div key={idx} className="form-control">
                              <label className="flex label cursor-pointer gap-10 justify-normal">
                                <input
                                  type="radio"
                                  value={idx + 1}
                                  defaultChecked={idx + 1 === currPage}
                                  className="radio checked:bg-red-500"
                                  {...methods.register('page')}
                                />
                                <span className="label-text capitalize">
                                  Page {idx + 1}
                                </span>
                              </label>
                            </div>
                          ))}
                        {formState.errors.page && (
                          <p className="text-red pl-2 pt-1">
                            {formState.errors.page.message}
                          </p>
                        )}
                        <div className="flex justify-end py-2 px-5 ">
                          <button className="p-3 font-medium text-[#ffffff] bg-[#3d4451] rounded-xl cursor-pointer">
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={() => handleShowNavigatePage()}
              className="join-item btn !w-20"
            >
              Page {currPage}
            </button>
          </>
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
  </div> */
  }

  console.log(currPage);

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        color="primary"
        page={currPage}
        total={totalPages}
        variant="light"
        onChange={handleSetPage}
      />
      <span className="text-default-400 text-medium">
        {/* {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`} */}
        {`${4} of ${5} selected`}
      </span>
    </div>
  );
};

const formSchemaNavigatePage = yup.object({
  page: yup.number().label('Page').required(validateRequireMessage),
});

export function useFormNavigatePage(page: number) {
  const { formState, handleSubmit, ...methods } = useForm<InputNavigatePage>({
    defaultValues: {
      page: page,
    },
    resolver: yupResolver(formSchemaNavigatePage),
  });

  return {
    formState,
    handleSubmit,
    methods,
  };
}

export default FooterAdminList;
