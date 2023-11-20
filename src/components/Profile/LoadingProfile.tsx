import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingProfile() {
  return (
    <div className="w-[50%] pr-6 pl-4 max-md:w-full">
      <div
        className={clsx(
          'flex text-lg pb-8 ',
          'max-sm:justify-center max-sm:pt-3 max-sm:bg-[#31b6e7] max-sm:text-[#ffffff] max-sm:rounded-t-3xl',
        )}
      >
        <div className="w-[40%] h-4 rounded-full overflow-hidden">
          <SkeletonLoading />
        </div>
      </div>

      <div>
        <div className={clsx('flex gap-7', 'max-sm:flex-col')}>
          <div className="flex justify-center max-sm:bg-gradient-to-b from-[#31b6e7] from-60% to-transparent to-60%">
            <div
              className={clsx(
                'flex justify-center h-28 w-28 rounded-full overflow-hidden',
                'max-sm:h-40 max-sm:w-40',
              )}
            >
              <div className={clsx('w-full')}>
                <SkeletonLoading />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center max-sm:pt-2 max-sm:w-full">
            <div className="w-full [&>div+div]:pt-2">
              <div className="flex w-full items-center">
                <div className="w-full max-w-[300px] h-5 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
              <div className="flex  w-full items-center mt-1">
                <div className="w-full max-w-[300px] h-5 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="[&>div]:pt-8 ">
          <div
            className={clsx(
              'flex items-center gap-8',
              'max-sm:items-start max-sm:flex-col',
              'max-xs:gap-3',
            )}
          >
            <div className="w-[30%]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                'w-full flex gap-3 [&>div]:max-w-[150px] [&>div]:flex-1 ',
              )}
            >
              <div className="w-full">
                <div className="h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
              <div className="w-full ">
                <div className="h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
              <div className="w-full ">
                <div className="h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-8 max-xs:flex-col max-xs:gap-3 max-xs:items-start">
            <div
              className={clsx(
                'w-full flex items-center gap-8',
                'max-sm:items-start',
                'max-xs:gap-3 max-xs:flex-col',
              )}
            >
              <div className="w-[30%]">
                <div className="h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
              <div
                className={clsx(
                  'w-full flex gap-3 [&>div]:max-w-[150px] [&>div]:flex-1',
                  'max-xs:flex-col max-xs:max-w-[100px]',
                )}
              >
                <div className="w-full">
                  <div className="h-4 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="w-full ">
                  <div className="h-4 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="w-full ">
                  <div className="h-4 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 max-sm:flex-col max-sm:gap-3">
            <div className="w-[30%]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div className={clsx('w-full')}>
              <div className="w-full">
                <div className="h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <div className="w-[80%] max-w-[250px]">
          <div className="h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
      </div>
    </div>
  );
}
