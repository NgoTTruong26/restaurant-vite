import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingReOrder() {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 w-full border shadow-xl p-10 rounded-xl',
        'max-sm:p-0 max-sm:py-3',
        'max-md:flex max-md:flex-col',
      )}
    >
      <div
        className={clsx(
          'flex-1 flex flex-col px-4 max-md:pt-3',
          '[&>div+div]:pt-8',
        )}
      >
        <div className="flex flex-col ">
          <div className="flex w-full items-center">
            <div className="w-full h-5 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
        <div className="flex justify-between max-sm:flex-col max-md:pt-3">
          <div
            className={clsx(
              'w-[45%] flex flex-col',
              'max-sm:w-full max-sm:mr-0',
            )}
          >
            <div className="flex w-full items-center">
              <div className="w-full h-5 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'w-[45%] flex flex-col',
              'max-sm:w-full max-sm:mr-0 max-sm:pt-3',
            )}
          >
            <div className="flex w-full items-center">
              <div className="w-full h-5 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-full items-center">
            <div className="w-full h-5 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>

        <div className="flex flex-col max-md:pt-3">
          <div className="flex w-full items-center">
            <div className="w-full h-5 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'flex-1 flex flex-col px-4',
          '[&>div+div]:pt-8',
          'max-md:pt-3',
        )}
      >
        <div className="flex flex-col">
          <div className="flex justify-between gap-4 max-md:pt-4">
            <div className="flex w-full items-center">
              <div className="w-full h-5 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full items-center">
            <div className="w-full h-5 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-md:pt-3">
          <div className="flex w-full items-center">
            <div className="w-full h-5 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-full h-5 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
      </div>
    </div>
  );
}
