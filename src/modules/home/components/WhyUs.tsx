import clsx from "clsx";
import Button from "components/Button";
import { BsClipboardData, BsGem, BsInboxes } from "react-icons/bs";

export default function WhyUs() {
  return (
    <div className="flex justify-center bg-[#eee] px-5">
      <div
        className={clsx(
          "flex max-w-[1200px] w-full py-20",
          "max-sm:px-0",
          "max-md:flex-col max-md:items-center max-md:px-8"
        )}
      >
        <div
          className={clsx(
            "w-[calc(100%/3)] pr-3",
            "max-sm:w-[90%]",
            "max-md:pr-0 max-md:w-[80%]"
          )}
        >
          <div className="bg-[#ce1212] p-7 text-[#fff]">
            <div className="text-[34px] pb-7 font-bold">Why Choose Yummy?</div>
            <div className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit Asperiores dolores sed et.
              Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio
              ad corporis.
            </div>
            <div className="flex justify-center">
              <Button className="rounded-full px-8 py-2 bg-[#ffffff4d] hover:bg-[#fff] hover:text-[#ce1212]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center max-sm:w-[90%] max-md:w-[80%] max-md:px-3">
          <div
            className={clsx(
              "flex-1 flex h-fit",
              "[&>div]:w-[calc(100%/3)]",
              "max-md:flex-col max-md:[&>div]:w-full max-md:[&>div]:pt-5 max-md:[&>div]:px-0 "
            )}
          >
            <div className=" px-3 scale-1 hover:scale-[1.1] cursor-pointer transition ease-in-out duration-150">
              <div className="flex flex-col text-center items-center p-7 bg-[#fff] h-full">
                <div className="flex pb-4 ">
                  <span className="bg-[#ce12121a] rounded-full p-5">
                    <BsClipboardData className="text-[30px] text-[#ce1212]" />
                  </span>
                </div>
                <div className="pb-5 text-[20px] font-medium">
                  Corporis voluptates officia eiusmod
                </div>
                <div className="pb-3">
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </div>
              </div>
            </div>
            <div className=" px-3 scale-1 hover:scale-[1.1] cursor-pointer transition ease-in-out duration-150">
              <div className="flex flex-col text-center items-center p-7 h-full bg-[#fff]">
                <div className="flex pb-4">
                  <span className="bg-[#ce12121a] rounded-full p-5">
                    <BsGem className="text-[30px] text-[#ce1212]" />
                  </span>
                </div>
                <div className="pb-5 text-[20px] font-medium">
                  Ullamco laboris ladore pan
                </div>
                <div className="pb-3">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </div>
              </div>
            </div>
            <div className=" pl-3 scale-1 hover:scale-[1.1] cursor-pointer transition ease-in-out duration-150">
              <div className="flex flex-col text-center items-center p-7 bg-[#fff] h-full">
                <div className="flex pb-4 ">
                  <span className="bg-[#ce12121a] rounded-full p-5">
                    <BsInboxes className="text-[30px] text-[#ce1212]" />
                  </span>
                </div>
                <div className="pb-5 text-[20px] font-medium">
                  Labore consequatur incidid dolore
                </div>
                <div className="pb-3">
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
