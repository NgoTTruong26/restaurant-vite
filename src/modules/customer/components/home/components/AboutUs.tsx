import clsx from 'clsx';
import { ImPlay2 } from 'react-icons/im';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

export default function AboutUs() {
  return (
    <div className="flex justify-center py-16 px-5">
      <div className="flex flex-col max-w-[1200px] items-center w-full">
        <div className="flex flex-col items-center pb-10 max-sm:w-[90%]">
          <div className="capitalize">About us</div>
          <div className="capitalize text-[48px] font-amatic text-center max-xs:text-[38px]">
            {'Learn More '}
            <span className="text-primary text-[48px] max-xs:text-[38px]">
              About Us
            </span>
          </div>
        </div>
        <div className="flex justify-between max-md:flex-col max-md:items-center">
          <div
            className={clsx(
              "relative w-[58%] bg-[url('https://bootstrapmade.com/demo/templates/Yummy/assets/img/about.jpg')] bg-no-repeat bg-cover min-h-[400px]",
              'max-sm:w-[90%] max-sm:min-h-[300px]',
              'max-md:w-[80%]',
            )}
          >
            <div className="flex flex-col absolute bottom-[10%] right-[10%] left-[10%] items-center bg-[#fff] p-6">
              <div className="text-[24px] font-bold pb-1 max-sm:text-[16px]">
                Book a Table
              </div>
              <div
                className={clsx(
                  'text-primary text-[28px] font-bold pb-2',
                  'max-sm:text-[16px]',
                  'max-md:text-[22px]',
                )}
              >
                +1 5589 55488 55
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'w-[38%] flex flex-col',
              ' max-sm:w-[90%]',
              ' max-md:w-[80%] max-md:pt-14',
            )}
          >
            <div className="italic pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="pb-6">
              <ul>
                <li className="flex pb-3">
                  <span className="pr-1">
                    <IoCheckmarkDoneOutline className="text-[20px] text-primary" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="flex pb-3">
                  <span className="pr-1">
                    <IoCheckmarkDoneOutline className="text-[20px] text-primary" />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li className="flex pb-3">
                  <span className="pr-1">
                    <IoCheckmarkDoneOutline className="text-[20px] text-primary" />
                  </span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
            </div>
            <div className="pb-8">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </div>
            <div className="relative bg-[url('https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg')] bg-no-repeat bg-cover [&:hover>.video]:opacity-100">
              <img
                className="relative invisible opacity-0"
                src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg "
                alt="image"
              />
              <div className="flex items-center justify-center absolute bottom-0 w-full h-full">
                <ImPlay2 size={70} color="#ce1212" className="text-primary" />
              </div>
              <div className="opacity-0 video absolute bottom-0 w-full h-full">
                {/* <iframe
                  className="w-full h-full "
                  src="https://www.youtube.com/embed/rcctLyl8YKM?list=RDrcctLyl8YKM"
                  title="Đạt G - Anh Tự Do Nhưng Cô Đơn | Live at #DearOcean @DatGMusic ​"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
