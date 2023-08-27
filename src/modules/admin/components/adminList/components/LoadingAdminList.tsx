import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingAdminList() {
  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr
          className={clsx(
            "[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2] [&>th]:uppercase"
          )}
        >
          <th>
            <div className="w-full h-6 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {Array(5)
          .fill("")
          .map((val, idx) => (
            <tr key={idx}>
              <th>
                <div className="w-full h-6 rounded-full overflow-hidden">
                  <SkeletonLoading />
                </div>
              </th>
            </tr>
          ))}
      </tbody>
      {/* foot */}
      <tfoot>
        <tr
          className={clsx(
            "[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2]"
          )}
        >
          <th className="flex justify-center">
            <div className="w-[40%] h-6 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
