import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingPreviewProfile() {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex justify-center">
        <div
          className={clsx(
            "flex justify-center w-12 h-12  rounded-full overflow-hidden"
          )}
        >
          <div className={clsx("w-full")}>
            <SkeletonLoading />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full [&>div+div]:pt-2">
          <div className="flex w-full items-center">
            <div className="w-full max-w-[300px] h-3 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
          <div className="flex  w-full items-center mt-1">
            <div className="w-full max-w-[300px] h-3 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
