import SkeletonLoading from 'components/SkeletonLoading';
import LoadingListBooking from './LoadingListBooking';

export default function LoadingOrderManagement() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full h-10 rounded-full overflow-hidden">
        <SkeletonLoading />
      </div>
      <LoadingListBooking />
      <div className="w-3/5 h-8 rounded-full overflow-hidden">
        <SkeletonLoading />
      </div>
    </div>
  );
}
