import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingMenuBuffet() {
  return (
    <div className="flex w-full pb-10">
      <div
        className={clsx(
          "w-[calc(100%/2)] min-w-[140px] h-[4vw] max-h-[60px] min-h-[30px] capitalize font-shantell text-[22px] rounded-2xl overflow-hidden"
        )}
      >
        <SkeletonLoading />
      </div>
    </div>
  );
}
