import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingSetDish() {
  return (
    <div className="flex w-full pb-10 pt-3 justify-center">
      <div
        className={clsx(
          'w-[calc(100%/2)] min-w-[120px] h-[4vw] max-h-[35px] min-h-[18px] capitalize font-shantell text-[22px] rounded-2xl overflow-hidden',
        )}
      >
        <SkeletonLoading />
      </div>
    </div>
  );
}
