import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingHeaderAdminList() {
  return (
    <div className="flex w-full items-center gap-10 justify-between px-5 py-5 bg-[#ffffff]">
      <h2 className="w-[20%] capitalize text-3xl">
        <div className="w-full h-6 rounded-full overflow-hidden">
          <SkeletonLoading />
        </div>
      </h2>
      <div className="grid items-center grid-cols-4 gap-5 max-w-2xl w-full">
        <div className="flex items-center gap-2 rounded-lg py-1 px-3">
          <div className="w-full h-6 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg py-1 px-3">
          <div className="w-full h-6 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg py-1 px-3">
          <div className="w-full h-6 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full h-6 rounded-full overflow-hidden">
            <SkeletonLoading />
          </div>
        </div>
      </div>
    </div>
  );
}
