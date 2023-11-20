import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import srcLogoT12 from 'images/logoT12-2.png';

export default function Column1() {
  return (
    <div className="flex-1 flex flex-col px-4 font-medium">
      <div className="flex-col pb-5 border-b border-black border-dashed">
        <div className="font-bold">Nhà Hàng Buffet Lẩu & Nướng T12</div>
        <div className="max-w-[69px] w-full pt-2">
          <img src={srcLogoT12} alt="logo" />
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <div className="font-bold ">Cơ sở:</div>
        <div className="relative flex pt-1">
          <IoLocationOutline
            size={35}
            className="relative text-[#fb9a01] pr-[15px] top-[-3px]"
          />
          <div>670 Đ. Kim Giang, Thanh Liệt, Thanh Trì, Hà Nội</div>
        </div>
      </div>
      <div className="flex pt-2">
        <div className="relative flex ">
          <FiPhoneCall
            size={35}
            className="relative text-[#fb9a01] pr-[15px] top-[-3px]"
          />
          <a href="/">0988888888</a>
        </div>
      </div>
    </div>
  );
}
