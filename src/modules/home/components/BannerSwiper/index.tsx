import BannerDesSwiper from "./BannerDesSwiper";
import Banner from "./BannerSwiper";

export default function index() {
  return (
    <div className="flex bg-[#eee] pt-36 pb-16 justify-center">
      <div className="flex justify-between max-w-[1200px] w-full">
        <BannerDesSwiper />
        <Banner />
      </div>
    </div>
  );
}
