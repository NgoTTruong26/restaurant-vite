import BannerDesSwiper from './BannerDesSwiper';
import Banner from './BannerSwiper';

export default function index() {
  return (
    <div className="flex bg-[#eee] pb-16 justify-center px-5">
      <div className="flex justify-between max-w-[1200px] w-full max-md:flex-col max-md:items-center">
        <BannerDesSwiper />
        <Banner />
      </div>
    </div>
  );
}
