import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';

interface Props {
  number?: number;
}

export default function LoadingNewsList({ number = 8 }: Props) {
  return (
    <div className="flex flex-wrap w-full">
      {Array(number)
        .fill('')
        .map((value, idx) => (
          <div
            key={idx}
            className={clsx(
              'flex w-[calc(100%/4)] mb-[30px] ',
              'max-md:w-[calc(100%/2)]',
              'max-sm:w-full',
            )}
          >
            <div className="overflow-hidden flex flex-col bg-[#fdfdfd] mx-[20px] w-full shadow-lg border-2 rounded-lg">
              <div
                className={clsx(
                  'h-[16vw] max-h-[180px]',
                  'max-lg:h-[16vw]',
                  'max-md:h-[24vw]',
                  'max-sm:h-[38vw]',
                )}
              >
                <SkeletonLoading />
              </div>

              <div className="flex-1 px-[16px] pt-[26px] pb-[12px]">
                <div className="h-2 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
                <div className="mt-2 h-4 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>

                <div className="mt-2 h-2 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
