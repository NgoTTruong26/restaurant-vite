import clsx from "clsx";
import Button from "components/Button";
import { BsPlayCircle } from "react-icons/bs";

export default function BannerDesSwiper() {
  return (
    <div className="flex w-[40%] items-center max-sm:w-[90%] max-md:w-[80%]">
      <div className="flex flex-col">
        <div className="text-[64px] mb-4 font-amatic line whitespace-pre-line font-[600] max-xs:text-[40px] max-sm:text-[42px]">
          Enjoy Your Healthy{"\n"} Delicious Food
        </div>
        <div className="mb-4">
          Sed autem laudantium dolores. Voluptatem itaque ea consequatur
          eveniet. Eum quas beatae cumque eum quaerat.
        </div>
        <div className="flex items-center justify-evenly max-sm:flex-col">
          <div>
            <Button
              className={clsx(
                "bg-[#ce1212] w-full rounded-full px-9 py-2 text-[#fff] shadow-xl shadow-[#ce121233] font-medium hover:bg-[#ce1212cc]"
              )}
            >
              Book a Table
            </Button>
          </div>
          <div>
            <Button
              className={clsx(
                "flex items-center btn-ghost hover:!text-[#ce1212] rounded-xl",
                "max-sm:mt-3"
              )}
            >
              <BsPlayCircle className="text-[#ce1212] text-[28px] max-xs:text-[20px]" />
              <div className="pl-2 font-medium">Watch Video</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
