import Button from "components/Button";
import { BsPlayCircle } from "react-icons/bs";

export default function BannerDesSwiper() {
  return (
    <div className="flex w-[40%] items-center">
      <div className="flex flex-col">
        <div className="text-[64px] mb-4 font-amatic line whitespace-pre-line font-[600]">
          Enjoy Your Healthy{"\n"} Delicious Food
        </div>
        <div className="mb-4">
          Sed autem laudantium dolores. Voluptatem itaque ea consequatur
          eveniet. Eum quas beatae cumque eum quaerat.
        </div>
        <div className="flex items-center">
          <div>
            <Button className="bg-[#ce1212] rounded-full px-9 py-2 text-[#fff] shadow-xl shadow-[#ce121233] font-medium hover:bg-[#ce1212cc]">
              Book a Table
            </Button>
          </div>
          <div className="pl-6">
            <Button className="flex items-center btn-ghost hover:!text-[#ce1212]">
              <BsPlayCircle size={28} className="text-[#ce1212]" />
              <div className="pl-2 font-medium">Watch Video</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
