import NewsList from "./components/NewsList";
import PaginationNews from "./components/PaginationNews";

export default function News() {
  return (
    <div className="flex-1 justify-center bg-[url('https://fo4.garena.vn/wp-content/themes/fifa-online-4/img/bg-news.png')]">
      <div className="relative flex justify-center h-[calc(200vh/4)] bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat">
        <div className="absolute bottom-[10%] max-w-[1200px] w-full">
          <div className="text-[64px] font-bold">News</div>
          <div className="text-[18px] font-medium">
            Our offerings change from season to season. Try them before they are
            all gone.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full ">
          <NewsList />
          <PaginationNews />
        </div>
      </div>
    </div>
  );
}
