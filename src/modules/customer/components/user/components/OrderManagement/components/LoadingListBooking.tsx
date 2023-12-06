import { Card, CardBody, Divider } from '@nextui-org/react';
import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingListBooking() {
  return (
    <div className="space-y-4">
      {Array(5)
        .fill('')
        .map((val, idx) => (
          <Card
            key={idx}
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
          >
            <CardBody>
              <div className="flex gap-4 justify-between max-sm:flex-col max-sm:items-center">
                <div className="h-[200px] min-w-[200px] rounded-lg overflow-hidden">
                  <SkeletonLoading />
                </div>

                <div className="flex-1 w-full flex flex-col justify-between">
                  <div className="flex flex-col space-y-1 max-sm:items-center">
                    <div className="w-3/5 h-4 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                    <div className="w-1/5 h-4 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                    <div className="w-2/5 h-4 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="w-full flex justify-between gap-3 max-md:flex-col">
                    <div className="w-full h-4 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
    </div>
  );
}
