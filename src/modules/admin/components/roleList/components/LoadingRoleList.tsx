import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';

export default function LoadingRoleList() {
  return (
    <table className="table w-full flex-1">
      <tbody>
        {/* row 1 */}
        {Array(6)
          .fill('')
          .map((val, idx) => (
            <tr key={idx}>
              <th>
                <div className="w-full h-8 rounded-full overflow-hidden">
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
            '[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2]',
          )}
        >
          <th className="flex justify-center">
            <div className="w-[40%] h-8 rounded-full overflow-hidden">
              <SkeletonLoading />
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
