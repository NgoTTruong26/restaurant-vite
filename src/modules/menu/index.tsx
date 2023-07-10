import clsx from "clsx";
import Button from "components/Button";
import { Icons } from "interfaces/icons";
import { useEffect, useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { ImGlass } from "react-icons/im";
import LoadingDish from "./components/LoadingDish";
import Dish from "./components/Dish";
import LoadingMenuBuffet from "./components/LoadingMenuBuffet";
import SkeletonLoading from "components/SkeletonLoading";
import LoadingSetDish from "./components/LoadingSetDish";
import useGetDishes, { IPageParam } from "./hooks/useGetDishes";
import { queryClient } from "main";
import { IAxiosResponse } from "configs/api";
import { GetSetDishDTO } from "./dto/dish.dto";
import useGetListBuffetMenu from "./hooks/useGetBuffetMenu";

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

interface IQueryGetDishes {
  pageParams: IPageParam[];
  pages: IAxiosResponse<GetSetDishDTO>[];
}

export default function Menu() {
  const [buffet, setBuffet] = useState<string>();
  const [setDish, setSetDish] = useState<string>();
  const [offset, setOffset] = useState<string>("0");

  const { data, status } = useGetListBuffetMenu();

  const getDishes = useGetDishes();

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

  useEffect(() => {
    if (data) {
      const specialMenu = data.find((menu) => menu.id === buffet);
      const specialSetDish = specialMenu?.setDishes.find(
        (menu) => menu.special === true
      );
      setSetDish(specialSetDish?.id);
    }
  }, [buffet]);

  useEffect(() => {
    setOffset("0");
  }, [buffet, setDish]);

  useEffect(() => {
    (async () => {
      await getDishes.fetchNextPage({
        pageParam: {
          idBuffetMenu: buffet,
          idSetDish: setDish,
          limit: "3",
          offset: offset,
        } as IPageParam,
      });

      if (queryClient.getQueryData(["get_dishes"])) {
        const pageParams = queryClient.getQueryData<IQueryGetDishes>([
          "get_dishes",
        ])!.pageParams;
        if (pageParams.length >= 2) {
          console.log(
            parseInt(offset),
            parseInt(pageParams[pageParams.length - 1]?.offset!)
          );

          if (
            pageParams[pageParams.length - 2]?.idBuffetMenu !== buffet ||
            pageParams[pageParams.length - 2]?.idSetDish !== setDish
          ) {
            return queryClient.setQueryData(["get_dishes"], (data: any) => {
              if (
                parseInt(offset) <
                parseInt(pageParams[pageParams.length - 1]?.offset!)
              )
                return {
                  pages: [undefined],
                  pageParams: [undefined],
                };
              return {
                pages: data?.pages?.splice(-1),
                pageParams: data?.pageParams?.splice(-1),
              };
            });
          }
        }
      }
    })();
  }, [offset, buffet, setDish, data]);

  const handleSetBuffet = (buffet: string) => {
    setBuffet(buffet);
  };

  const handleSetSetDish = (setDish: string) => {
    setSetDish(setDish);
  };

  const handleGetDishes = () => {
    if (getDishes.data?.pages[getDishes.data?.pages.length - 1]?.nextPage) {
      setOffset((prevs) => (parseInt(prevs) + 3).toString());
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
            <div className="flex w-full pb-10">
              <div className="tabs bg-red rounded-xl">
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

          {status === "loading" ||
          (getDishes.isFetching &&
            buffet !==
              (getDishes?.data?.pageParams[0] as IPageParam)?.idBuffetMenu) ? (
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
                          "[&>div]:px-3 [&>div]:border-b-2 [&>div]:border-b-solid [&>div]:border-[#ce121280]"
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

                      <div className="py-10 w-full">
                        <div key={idx} className="flex flex-col items-center">
                          {getDishes.isFetching &&
                          setDish !==
                            (getDishes.data?.pageParams[0] as IPageParam)
                              ?.idSetDish ? (
                            <LoadingDish />
                          ) : (
                            <div className="flex flex-wrap w-full">
                              {getDishes.data?.pages?.map((page) =>
                                page?.dishes?.map((dish, idx) => (
                                  <Dish key={idx} dish={dish} />
                                ))
                              )}

                              {!getDishes.isFetchingNextPage || (
                                <LoadingDish numberOfDishes={3} />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}

          <Button
            className="btn bg-red hover:bg-[#f43434]"
            onClick={() => handleGetDishes()}
            disabled={
              !getDishes.data?.pages[getDishes.data?.pages.length - 1]?.nextPage
            }
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
