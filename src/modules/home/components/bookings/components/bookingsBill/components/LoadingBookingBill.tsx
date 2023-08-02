import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingBookingBill() {
  return (
    <div className="fixed flex w-full h-full top-0 bg-[#0009] z-50 items-center justify-center px-5">
      <div className="relative bg-[#fff] max-w-[700px] max-h-[800px] w-full rounded-3xl p-8">
        <div className="flex justify-center">
          <div className="w-[40%] h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className="py-5">
          <div className="font-medium ">
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="flex justify-between mt-3 py-3 leading-8 bg-[#eee] px-5 rounded-2xl max-sm:flex-col">
              <div className="w-[40%] max-sm:w-full">
                <div className="flex items-center">
                  <div className="w-full h-3 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="flex items-center mt-1 ">
                  <div className="w-full h-3 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
              <div className="w-[40%] max-sm:pt-2 max-sm:w-full">
                <div className="flex items-center">
                  <div className="w-full h-3 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-full h-3 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3 py-3 px-5 bg-[#eee] rounded-2xl max-sm:flex-col">
              <div className="w-[40%] rounded-full overflow-hidden max-sm:w-full">
                <div className="h-3">
                  <SkeletonLoading />
                </div>
              </div>
              <div className="w-[40%] rounded-full overflow-hidden max-sm:mt-1 max-sm:w-full">
                <div className="h-3">
                  <SkeletonLoading />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 ">
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="px-5 h-full">
              <div className="flex pt-5 items-center h-full">
                <div
                  className={clsx(
                    "w-[40%] h-[24vw] max-h-[170px] rounded-lg overflow-hidden",
                    "max-sm:rounded-lg max-sm:h-[20vw]"
                  )}
                >
                  <div className="h-full">
                    <SkeletonLoading />
                  </div>
                </div>
                <div
                  className={clsx(
                    "flex gap-10 justify-between items-center w-full pl-5 font-medium",
                    "max-sm:flex-col max-sm:gap-0 max-sm:w-[40%]"
                  )}
                >
                  <div
                    className={clsx("w-[40%] pr-5", "max-sm:w-full max-sm:p-0")}
                  >
                    <div className="w-full rounded-full overflow-hidden">
                      <div className="h-2">
                        <SkeletonLoading />
                      </div>
                    </div>
                    <div className="w-full rounded-full overflow-hidden mt-1">
                      <div className="h-2">
                        <SkeletonLoading />
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] rounded-full overflow-hidden mt-1 max-sm:w-full">
                    <div className="h-2">
                      <SkeletonLoading />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-t leading-8 ">
          <div className="w-[40%] h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
          <div className="pl-5 pt-3 [&>div+div]:pt-3">
            <div className="w-[30%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="pl-5 [&>div+div]:pt-3">
              {Array(3)
                .fill("")
                .map((item, val) => (
                  <div key={val} className="flex justify-between gap-10">
                    <div className="w-[30%] h-2 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                    <div className="w-[20%] h-2 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-between gap-10">
              <div className="w-[30%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
              <div className="w-[40%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <div className="flex justify-between gap-10">
              <div className="w-[30%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
              <div className="w-[40%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
