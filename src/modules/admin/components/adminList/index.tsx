import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { HiMiniPlusCircle } from "react-icons/hi2";

export default function AdminList() {
  // logic checked all dùng hàm every check theo idx của hàm every

  return (
    <div className="mt-16">
      <div className="flex gap-10 justify-between items-center">
        <h1 className="text-5xl">Admin</h1>
        <div className="text-[#ffffff]">
          <button className="capitalize flex items-center gap-2 btn btn-error text-[#ffffff]">
            <span>
              <HiMiniPlusCircle size={22} />
            </span>
            Add Admin
          </button>
        </div>
      </div>
      <div className="border-2 border-[#d8d8d8] rounded-lg py-5 mt-10 bg-[#ffffff] shadow-lg">
        <div className="flex items-center gap-10 justify-between px-5 pb-5">
          <h2 className="capitalize text-3xl">Admin List</h2>
          <div className="flex gap-5">
            <div className="flex items-center gap-2 border-2 border-[#d8d8d8] rounded-lg py-1 px-3">
              <span className="border rounded-lg p-1 text-[#37944c] bg-[#eaf4ec]">
                <HiUserGroup size={25} />
              </span>
              <div className="flex flex-col">
                <span className="capitalize whitespace-nowrap">
                  Total Admin
                </span>
                <span className="capitalize whitespace-nowrap text-xl text-[#37944c]">
                  60
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={clsx(
                  "flex px-2 bg-[#ffffff] w-full items-center border shadow-xl rounded-xl overflow-hidden"
                )}
              >
                <div className="flex items-center pr-4">
                  <GoSearch />
                </div>

                <div className="flex w-full items-center">
                  <input
                    className=" w-full py-2"
                    placeholder="Search..."
                    type="text"
                    id="search"
                    /* {...methods.register("idBooking")} */
                  />
                  {/* {methods.watch("idBooking") && (
                        <div
                          className={clsx(
                            "px-4 font-medium underline underline-offset-4 text-[18px] cursor-pointer",
                            "max-sm:hidden max-sm:text-[14px]"
                          )}
                          onClick={() => methods.setValue("idBooking", "")}
                        >
                          Clear
                        </div>
                      )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr
                className={clsx(
                  "[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2] [&>th]:uppercase"
                )}
              >
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Male</td>
                <td>26/12/2001</td>
                <td>
                  <span className="badge badge-ghost badge-md">
                    Desktop Support Technician
                  </span>
                </td>
                <td>tiennhannaruto@gmail.com</td>
                <td>0389912304</td>
                <th>
                  <button className="outline outline-success btn btn-ghost btn-xs">
                    details
                  </button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
            <tfoot>
              <tr className="[&>th]:bg-[#ffffff] [&>th]:border-y-2 [&>th]:border-y-[#f2f2f2]">
                <th colSpan={8}>
                  <div className="flex justify-center">
                    <div className="flex gap-1 join [&>button]:w-14 ">
                      <button className="join-item btn">«</button>
                      <button className="join-item btn">1</button>
                      <button className="join-item btn">2</button>
                      <span className="flex items-end justify-center w-14">
                        . . .
                      </span>
                      <button className="join-item btn">99</button>
                      <button className="join-item btn">100</button>
                      <button className="join-item btn">»</button>
                    </div>
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
