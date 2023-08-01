import clsx from "clsx";

import Button from "components/Button";
import LoadingNewsList from "./LoadingNewsList";
import useGetNewsList from "../hooks/useGetNewsList";
import { useNavigate } from "react-router-dom";

export default function NewsList() {
  const navigate = useNavigate();

  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetNewsList();

  const handleGetDishes = () => {
    fetchNextPage();
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {status === "loading" ? (
          <LoadingNewsList />
        ) : (
          data?.pages.map((newsList, index) =>
            newsList?.newsList.map((news, idx) => (
              <div
                key={idx}
                onClick={() => {
                  navigate(`${news.id}`);
                }}
                className={clsx(
                  "flex w-[calc(100%/4)] mb-[30px] ",
                  "max-lg:w-[calc(100%/2)]",
                  "max-sm:w-full"
                )}
              >
                <div className="overflow-hidden flex flex-col bg-[#fdfdfd] mx-[20px] w-full hover:cursor-pointer [&>div>img]:hover:scale-105 shadow-lg border-2 rounded-lg">
                  <div
                    className={clsx(
                      "h-[180px] overflow-hidden",
                      "max-lg:h-[16vw]",
                      "max-md:h-[24vw]",
                      "max-sm:h-[38vw]"
                    )}
                  >
                    <img
                      src={news.srcImg}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform"
                    />
                  </div>

                  <div className="flex-1 px-[16px] pt-[26px] pb-[12px]">
                    <div className="text-[#FF4500] font-medium">
                      {new Date(news.createdAt).toLocaleDateString("en-GB")}
                    </div>
                    <div className="font-bold pt-1 line-clamp-2">
                      {news.title}
                    </div>
                    {news.introduce && (
                      <div className="pt-2 line-clamp-3">{news.introduce}</div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )
        )}
        {!isFetchingNextPage || <LoadingNewsList number={4} />}
      </div>

      <div className="flex justify-center">
        <Button
          className="btn bg-red hover:bg-[#f43434]"
          onClick={() => handleGetDishes()}
          disabled={!hasNextPage}
        >
          See more
        </Button>
      </div>
    </div>
  );
}
