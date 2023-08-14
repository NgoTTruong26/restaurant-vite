import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingSecurity() {
  return (
    <div className="flex-1 pr-6 pl-4">
      <div className="[&>div+div]:pt-8 ">
        <div className="[&>div+div]:pt-5">
          <div className={clsx("flex ")}>
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
          <div className={clsx("flex pt-5 items-center gap-8", "max-sm:gap-3")}>
            <div className="w-[30%] max-w-[50px]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                "w-full gap-3 [&>div]:max-w-[300px] [&>div+div]:pt-3 [&>div]:flex-1 "
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
            </div>
            <div className="w-full max-w-[150px] ">
              <div className="h-6 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>

          <div className={clsx("flex pt-5 items-center gap-8", "max-sm:gap-3")}>
            <div className="w-[30%] max-w-[50px]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                "w-full gap-3 [&>div]:max-w-[300px] [&>div+div]:pt-3 [&>div]:flex-1 "
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
            </div>
            <div className="w-full max-w-[150px] ">
              <div className="h-6 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
        <div className="[&>div+div]:pt-5">
          <div className={clsx("flex ")}>
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>

          <div className={clsx("flex pt-5 items-center gap-8", "max-sm:gap-3")}>
            <div className="w-[30%] max-w-[50px]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                "w-full gap-3 [&>div]:max-w-[300px] [&>div+div]:pt-3 [&>div]:flex-1 "
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
            </div>
            <div className="w-full max-w-[150px] ">
              <div className="h-6 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
        <div className="[&>div+div]:pt-5">
          <div className={clsx("flex ")}>
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
          <div className={clsx("flex pt-5 items-center gap-8", "max-sm:gap-3")}>
            <div className="w-[30%] max-w-[50px]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                "w-full gap-3 [&>div]:max-w-[300px] [&>div+div]:pt-3 [&>div]:flex-1 "
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
            </div>
            <div className="w-full max-w-[150px] ">
              <div className="h-6 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>

          <div className={clsx("flex pt-5 items-center gap-8", "max-sm:gap-3")}>
            <div className="w-[30%] max-w-[50px]">
              <div className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div
              className={clsx(
                "w-full gap-3 [&>div]:max-w-[300px] [&>div+div]:pt-3 [&>div]:flex-1 "
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
            </div>
            <div className="w-full max-w-[150px] ">
              <div className="h-6 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
