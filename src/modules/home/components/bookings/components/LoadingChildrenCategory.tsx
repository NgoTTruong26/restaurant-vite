import SkeletonLoading from "components/SkeletonLoading";

export default function LoadingChildrenCategory() {
  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th className="w-[10%]">
            <div className="h-6 w-6 overflow-hidden rounded-md">
              <SkeletonLoading />
            </div>
          </th>
          <th className="w-[60%]">
            <div className="h-4 overflow-hidden rounded-md">
              <SkeletonLoading />
            </div>
          </th>
          <th>
            <div className="h-4 overflow-hidden rounded-md">
              <SkeletonLoading />
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        {Array(2)
          .fill("")
          .map((item, idx) => (
            <tr key={idx}>
              <th>
                <div className="h-6 w-6 overflow-hidden rounded-md">
                  <SkeletonLoading />
                </div>
              </th>
              <td>
                <div className="h-4 overflow-hidden rounded-md">
                  <SkeletonLoading />
                </div>
              </td>
              <td>
                <div className="h-4 overflow-hidden rounded-md">
                  <SkeletonLoading />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
