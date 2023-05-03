import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone, BiTime } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

interface DataDishOrder {
  srcImg: string;
  name: string;
  prices: string;
}

interface Data {
  id: string;
  numberPeople: number;
  dish: DataDishOrder[];
  note?: string;
}

const data: Data = {
  id: "2193-asdakdasd-askd-3kaljsdal123-jhjhkjk1-3k",
  numberPeople: 3,
  dish: [
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      name: "Set 219k",
      prices: "219.000",
    },
  ],
  note: "cho mình bàn trên tầng",
};

interface Props {
  handleCloseOrder: () => void;
}

const OrderDetails: React.FC<Props> = ({ handleCloseOrder }) => {
  return (
    <div className="fixed flex w-full h-full top-0 bg-[#0009] z-50 items-center justify-center px-5">
      <div className="relative bg-[#eee] max-w-[700px] max-h-[800px] w-full rounded-3xl p-8">
        <div
          className="absolute top-0 right-0 p-5 cursor-pointer"
          onClick={() => handleCloseOrder()}
        >
          <IoMdClose size={25} />
        </div>
        <div className="text-[38px] font-medium text-center">My Order</div>
        <div className="py-5">
          <div className="font-medium ">
            <div className="text-[28px] font-medium">Order Detail</div>
            <div className="flex mt-3 py-3 leading-8 bg-[#dcdce1] pl-5 rounded-2xl">
              <div>
                <div className="flex items-center">
                  <BsCalendar2Date size={20} />
                  <div className="pl-2">Ngày tạo đơn: 02/05/2023</div>
                </div>
                <div className="flex items-center">
                  <BiTime size={20} />
                  <div className="pl-2">Giờ tạo đơn: 4:49 CH</div>
                </div>
              </div>
              <div className="pl-20">
                <div className="flex items-center">
                  <BsCalendar2Date size={20} />
                  <div className="pl-2">Ngày đặt bàn: 02/05/2023</div>
                </div>
                <div className="flex items-center">
                  <BiTime size={20} />
                  <div className="pl-2">Giờ đặt bàn: 8:49 CH</div>
                </div>
              </div>
            </div>
            <div className="flex mt-3 py-3 pl-5 bg-[#dcdce1] rounded-2xl">
              <div className="flex items-center">
                <AiOutlineUser size={20} />
                <div className="pl-2">Người đặt bàn: Nguyễn Văn A</div>
              </div>
              <div className="flex items-center pl-20">
                <BiPhone size={20} />
                <div className="pl-2">Số điện thoại: 0988888883</div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="text-[28px] font-medium">Order List</div>
            <div className="px-5">
              {data.dish.map((value, idx) => (
                <div key={idx} className="flex pt-3 items-center ">
                  <div className="w-[40%] bg-[#dcdce1] rounded-2xl">
                    <img src={value.srcImg} alt="dish" />
                  </div>
                  <div className="flex justify-between items-center w-full pl-5 font-medium">
                    <div>
                      <div>{value.name}</div>
                      <div>{value.prices}</div>
                    </div>
                    <div>SL: 3</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 border-t leading-8">
          <div className="flex justify-between">
            <div className="font-medium">Số lượng người:</div>
            <div className="pl-5">{data.numberPeople}</div>
          </div>
          {data.note && (
            <div className="flex justify-between">
              <div className="font-medium">Ghi chú:</div>
              <div className="pl-5">{data.note}</div>
            </div>
          )}
          <div className="flex justify-between">
            <div className="font-medium">ID Đơn hàng:</div>
            <div className="max-w-[400px] pl-5">{data.id}</div>
          </div>
          <div className="flex justify-between font-medium">
            <div>Hotline nhà hàng:</div>
            <div className="pl-5">0988888888</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
