import NewsList from './components/news/components/NewsList';

export default function News() {
  return (
    <div className="flex-1 flex flex-col items-center pb-10">
      <div className="relative w-full flex justify-center bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat">
        <div className="w-full flex justify-center px-5 pt-[calc(100vw/10)]">
          <div className="max-w-[1200px] w-full">
            <div className="text-[64px] font-bold text-primary">News</div>
            <div className="text-[18px] font-medium">
              Our offerings change from season to season. Try them before they
              are all gone.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 px-5 w-full">
        <div className="max-w-[1200px] w-full ">
          <NewsList />
        </div>
      </div>
    </div>
  );
}
