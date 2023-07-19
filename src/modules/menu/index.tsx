import clsx from "clsx";
import { Icons } from "interfaces/icons";
import { useEffect, useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { ImGlass } from "react-icons/im";
import LoadingDish from "./components/LoadingDish";
import LoadingMenuBuffet from "./components/LoadingMenuBuffet";
import SkeletonLoading from "components/SkeletonLoading";
import LoadingSetDish from "./components/LoadingSetDish";
import useGetListBuffetMenu from "./hooks/useGetBuffetMenu";
import ListDish from "./components/ListDish";

const icons: Icons[] = [
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <ImGlass size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
];

export default function Menu() {
  const [buffet, setBuffet] = useState<string>();
  const [setDish, setSetDish] = useState<string>();

  const { data, status } = useGetListBuffetMenu();

  useEffect(() => {
    if (data) {
      const specialMenu = data.find((menu) => menu.special === true);
      const specialSetDish = specialMenu?.setDishes.find(
        (menu) => menu.special === true
      );

      setBuffet(specialMenu?.id);
      setSetDish(specialSetDish?.id);
    }
  }, [data]);

  const handleSetBuffet = (argBuffet: string) => {
    if (argBuffet !== buffet) {
      setBuffet(argBuffet);
      if (data) {
        const specialMenu = data.find((menu) => menu.id === argBuffet);
        const specialSetDish = specialMenu?.setDishes.find(
          (menu) => menu.special === true
        );
        setSetDish(specialSetDish?.id);
      }
    }
  };

  const handleSetSetDish = (argSetDish: string) => {
    if (argSetDish !== setDish) {
      setSetDish(argSetDish);
    }
  };

  return (
    <div className="flex-1 pb-10 min-h-screen">
      <div className="relative flex justify-center bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat ">
        <div className="w-full flex justify-center px-5 pt-[calc(200vh/6)]">
          <div className=" max-w-[1200px] w-full">
            <div className="text-[64px] font-bold">Dish Menu</div>
            <div className="text-[18px] font-medium">
              Our offerings change from season to season. Try them before they
              are all gone.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 px-5">
        <div className="flex flex-col items-center max-w-[1200px] w-full">
          {status === "loading" ? (
            <LoadingMenuBuffet />
          ) : (
            <div className={clsx("flex w-full pb-10")}>
              <div
                className={clsx(
                  "tabs bg-red rounded-xl",
                  "max-xs:flex-col max-xs:flex-nowrap max-xs:w-full max-xs:[&>div]:w-full"
                )}
              >
                {data?.map((buffetMenu, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSetBuffet(buffetMenu.id)}
                    className={clsx(
                      "flex items-center uppercase text-[24px] font-sansita h-full tab tab-lg tab-lifted text-[#fff] font-medium border-b-0 transition-none py-2",
                      {
                        "tab-active !text-red": buffetMenu.id === buffet,
                      }
                    )}
                  >
                    <span className="pt-1">{icons[idx].icons}</span>
                    <span className="pl-1">{buffetMenu.name}K</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex w-full justify-center">
            {status === "loading" ? (
              <div className=" max-w-[100px] w-full capitalize font-shantell text-[22px] h-[1vw] max-h-[16px] min-h-[12px] rounded-2xl overflow-hidden">
                <SkeletonLoading />
              </div>
            ) : (
              <div className="px-5">Menu</div>
            )}
          </div>

          {status === "loading" ? (
            <div className="w-full">
              <div className="flex flex-col items-center w-full">
                <LoadingSetDish />
                <LoadingDish />
              </div>
            </div>
          ) : (
            <div className="w-full">
              {data?.map(
                (buffetMenu, idx) =>
                  buffetMenu.id === buffet && (
                    <div
                      key={idx}
                      className="flex flex-col items-center w-full"
                    >
                      <div
                        className={clsx(
                          "flex leading-loose font-medium text-[28px] text-[#ce121280] ",
                          "[&>div]:px-3 [&>div]:border-b-2 [&>div]:border-b-solid [&>div]:border-[#ce121280]",
                          "max-xs:flex-col max-xs:flex-nowrap max-xs:max-w-[70%] max-xs:w-full max-xs:[&>div]:w-full max-xs:[&>div]:text-center "
                        )}
                      >
                        {buffetMenu.setDishes.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              handleSetSetDish(item.id);
                            }}
                            className={clsx("hover:text-red", {
                              "text-red !border-red": item.id === setDish,
                            })}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                      {buffet && setDish && (
                        <ListDish buffet={buffet} setDish={setDish} />
                      )}
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
