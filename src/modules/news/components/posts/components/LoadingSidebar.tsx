import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingSidebar() {
  return (
    <div className="pt-2 [&>div+div]:mt-4">
      <div className="w-[50%] h-4 overflow-hidden rounded-lg">
        <SkeletonLoading />
      </div>
      {Array(4)
        .fill("")
        .map((item, idx) => (
          <div key={idx}>
            <div className="flex gap-3">
              <div className="w-[80%]">
                <div className="h-4 overflow-hidden rounded-lg">
                  <SkeletonLoading />
                </div>
                <div className="mt-2 w-[50%] h-4 overflow-hidden rounded-lg">
                  <SkeletonLoading />
                </div>
              </div>
              <div className="flex-1 overflow-hidden rounded-lg">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
