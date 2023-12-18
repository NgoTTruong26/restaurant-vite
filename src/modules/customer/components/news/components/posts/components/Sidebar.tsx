import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import useGetLatestNewsList from '../hooks/useGetLatestNewsList';
import LoadingSidebar from './LoadingSidebar';

interface Props {
  idPost: string;
}

export default function Sidebar({ idPost }: Props) {
  const navigate = useNavigate();

  const { data, status, isLoading } = useGetLatestNewsList({
    idPost,
  });

  return (
    <div className="p-3 bg-[#eee] rounded-lg sticky top-24 font-semibold">
      {status === 'loading' ? (
        <LoadingSidebar />
      ) : (
        <>
          <div className="capitalize text-black">latest news</div>
          <div className="pt-2 [&>div+div]:pt-4">
            {data?.map((item, idx) => (
              <div key={idx}>
                <div
                  onClick={() => {
                    navigate(`/news/${item.id}`);
                  }}
                  className={clsx(
                    'flex justify-between gap-2 h-[48px]',
                    ' hover:cursor-pointer hover:text-red',
                    'max-sm:h-[40px]',
                  )}
                >
                  <div className="w-[70%] line-clamp-2">{item.title}</div>
                  <div className="w-[48px]">
                    <img
                      className="w-full max-h-[65px] h-full rounded-lg"
                      src={item.srcImg}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
