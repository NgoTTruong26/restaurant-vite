import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingPost() {
  return (
    <>
      <div className="border-b-2 border-[#bababa] pb-5">
        <div className="h-8 rounded-full overflow-hidden">
          <SkeletonLoading />
        </div>
        <div className="mt-2 h-8 w-[50%] rounded-full overflow-hidden">
          <SkeletonLoading />
        </div>
        <div className="flex">
          <div className="mt-4 h-4 w-[10%] rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
          <div className="ml-2 mt-4 h-4 w-[10%] rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
      </div>
      <div className={clsx("pt-8")}>
        <div>
          <div className="h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
          <div className="mt-2 h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
          <div className="w-[50%] mt-2 h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className="mt-8 h-[60vw] max-h-[750px] rounded-2xl overflow-hidden">
          <SkeletonLoading />
        </div>
        <div className={clsx("pt-8", "[&>div+div]:mt-2")}>
          {Array(5)
            .fill("")
            .map((val, idx) => (
              <div key={idx} className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            ))}
          <div className="w-[50%] h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className={clsx("pt-8", "[&>div+div]:mt-2")}>
          {Array(5)
            .fill("")
            .map((val, idx) => (
              <div key={idx} className="h-4 rounded-full overflow-hidden">
                <SkeletonLoading />
              </div>
            ))}
          <div className="w-[50%] h-4 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
      </div>
    </>
  );
}
