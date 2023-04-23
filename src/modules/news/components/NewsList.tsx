import { NewsEntity } from "interfaces/entities/NewsEntity";

const data: NewsEntity[] = [
  {
    srcImg:
      "https://bedental.vn/wp-content/uploads/2022/12/Anh-Avatar-Doremon-dep-ngau-cute.jpg",
    alt: "3 CÁCH LÀM NƯỚC LẨU NGON TẠI NHÀ, DỄ LÀM ",
    content: "",
    date: "2.5.2021",
  },
  {
    srcImg:
      "https://chefdzung.com.vn/uploads/images/album/untitled-1-1200x676-9.jpg",
    alt: "CÁCH LÀM THỊT ĐÔNG ĐƠN GIẢN, CHUẨN VỊ TẾT ",
    content: "",
    date: "2.5.2021",
  },
  {
    srcImg:
      "https://chefdzung.com.vn/uploads/images/ngoc-linh/316546865-3427210420892546-1522379535338202690-n.jpg",
    alt: "TƯNG BỪNG KHAI TRƯƠNG – TẶNG CUA HOÀNG ĐẾ, TÔM HÙM CỰC KHỦNG ",
    content:
      "Trời ơi, tin được không? Hàng trăm suất KING CRAB, TÔM HÙM đã cập bể Chef Dzung nhân dịp khai trương để tặng miễn phí khách hàng từ ngày 9/12/2022 đến 15/12/2022.",
    date: "2.5.2021",
  },
  {
    srcImg: "https://chefdzung.com.vn/uploads/images/ngoc-linh/tiktok.jpg",
    alt: "BUFFET CHEF DZUNG ĐÃ CÓ MẶT TRÊN TIKTOK RỒI CẢ NHÀ ƠI! ",
    date: "2.5.2021",
  },
  {
    srcImg: "https://chefdzung.com.vn/uploads/images/ngoc-linh/mat-truoc.jpg",
    alt: "THÔNG BÁO KHỞI ĐỘNG TRỞ LẠI CHƯƠNG TRÌNH THẺ THÀNH VIÊN ",
    content: "Sau một thời gian tạm dừng thẻ thành viên, ",
    date: "2.5.2021",
  },
  {
    srcImg: "https://chefdzung.com.vn/uploads/images/buffet-la-gi(2).png",
    alt: "Cách đặt mua hải sản mang về tại Hà Nội bao tươi - bao chất ",
    date: "2.5.2021",
    content:
      "Nhà hàng Buffet Chef Dzung được đông đảo thực khách biết đến và lựa chọn là địa điểm ăn uống hải sản số 1 tại Hà Nội. Đặc biệt, ngoài phục vụ Quý khách ăn uống lẩu nướng,...",
  },
];

export default function NewsList() {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div key={index} className="flex w-[calc(100%/3)] mb-[30px] ">
          <div className="overflow-hidden flex flex-col bg-[#fdfdfd] mx-[20px] w-full hover:cursor-pointer [&>div>img]:hover:scale-105 shadow-lg border-2 rounded-lg">
            <div className=" overflow-hidden">
              <img
                src={item.srcImg}
                alt={item.content}
                className="max-h-[207px] w-full object-cover transition-transform"
              />
            </div>

            <div className="flex-1 px-[16px] pt-[26px] pb-[12px]">
              <div className="text-[#FF4500] font-medium">{item.date}</div>
              <div className="font-bold pt-1">{item.alt}</div>
              {item.content && <div className="pt-2">{item.content}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
