import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingOrderDetail() {
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
            <div className="flex justify-between mt-3 py-3 leading-8 bg-[#eee] px-5 rounded-2xl">
              <div className="w-[40%]">
                <div className="flex items-center">
                  <div className="w-full h-2 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <div className="w-full h-2 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
              <div className="w-[40%]">
                <div className="flex items-center">
                  <div className="w-full h-2 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <div className="w-full h-2 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3 py-3 px-5 bg-[#eee] rounded-2xl">
              <div className="w-[40%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
              <div className="w-[40%] h-2 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="w-[40%] h-4 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="px-5">
              <div className="flex pt-5 items-center">
                <div className="w-[40%] h-40 rounded-3xl overflow-hidden">
                  <SkeletonLoading />
                </div>
                <div className="flex justify-between items-center w-full pl-5 font-medium">
                  <div className="w-[80%] pr-5">
                    <div className="w-full h-2 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden mt-3">
                      <SkeletonLoading />
                    </div>
                  </div>
                  <div className="flex-1 h-2 rounded-full overflow-hidden">
                    <SkeletonLoading />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 border-t leading-8">
          <div className="flex justify-between">
            <div className="w-[60%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="w-[20%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>

          <div className="flex justify-between pt-3">
            <div className="w-[30%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="w-[50%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>

          <div className="flex justify-between pt-3">
            <div className="w-[30%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="w-[50%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
          <div className="flex justify-between font-medium pt-3">
            <div className="w-[60%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
            <div className="w-[20%] h-2 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
