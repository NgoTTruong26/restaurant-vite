import { Link, useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import clsx from "clsx";
import Sidebar from "./Sidebar";
import LoadingPost from "./LoadingPost";

export default function Post() {
  const { id } = useParams<{ id: string }>();

  const { data, status } = useGetPost(id);

  return (
    <div className="flex-1 flex justify-center bg-[#eee] pt-36 pb-16 px-5">
      <div
        className={clsx(
          "flex gap-10 justify-between max-w-[1200px] w-full",
          "max-md:flex-col"
        )}
      >
        <div className={clsx("w-[65%]", "max-md:w-full")}>
          {status === "loading" ? (
            <LoadingPost />
          ) : (
            data && (
              <>
                <div className="text-xl">
                  <Link
                    to={"/news"}
                    className="hover:cursor-pointer hover:text-red hover:border-b"
                  >
                    Tin tức
                  </Link>
                  <span>{" > Bài viết"}</span>
                </div>
                <div className="border-b-2 border-[#bababa] py-5">
                  <h1 className="font-bold">{data?.title}</h1>
                  <div className="pt-2">
                    Ngày đăng:{" "}
                    {new Date(data.createdAt).toLocaleDateString("en-GB")}
                  </div>
                </div>
                <div className={clsx("pt-8", "[&>div+div]:pt-4")}>
                  <div className="font-bold">
                    TPO - Tỷ tỷ đạp gió rẽ sóng có bản Việt, Song Hye Kyo bật
                    khóc khi thắng giải thưởng danh giá... là những tin tức đáng
                    chú ý ngày 20/7.
                  </div>
                  <div>
                    Ngày 20/7, BTC concert BlackPink tại Việt Nam tiếp tục lên
                    tiếng về danh sách biểu diễn của 4 cô gái trong hai đêm diễn
                    tại Việt Nam. BTC trích lại thông báo của YG Entertainment
                    hôm 4/7: “Danh mục các bài hát được lan truyền trên mạng là
                    không chính xác. Chương trình sẽ được diễn ra với quy mô
                    tương tự như toàn bộ các buổi biểu diễn khác trong hành
                    trình lưu diễn Born Pink trên toàn cầu”.
                  </div>
                  <div>
                    “Theo chia sẻ này, người hâm mộ hoàn toàn có thể yên tâm về
                    việc số lượng màn trình diễn trong mỗi đêm cũng như chất
                    lượng âm nhạc sẽ thỏa mãn và đáp ứng kỳ vọng người hâm mộ” –
                    BTC concert BlackPink cho hay.
                  </div>
                  <div>
                    <div>
                      <img
                        className="w-full"
                        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1e7rWx.img?w=1920&h=1080&q=60&m=2&f=jpg"
                        alt="Showbiz 20/7: Danh sách ca khúc BlackPink trình diễn tại Việt Nam"
                      />
                    </div>
                    <div className="text-[12px]">
                      Showbiz 20/7: Danh sách ca khúc BlackPink trình diễn tại
                      Việt Nam
                    </div>
                  </div>
                  <div>
                    Ngoài ra BTC khẳng định các thành viên BlackPink sẽ có sân
                    khấu solo. Jisoo diễn Flower, Jennie trình bày bản nhạc You
                    & Me, Rosé tỏa sáng với Gone & On the ground và Lisa thể
                    hiện Money và Lalisa. Những bản phối tại lễ hội âm nhạc
                    Coachella cũng được mang đến concert Mỹ Đình, Hà Nội.
                  </div>
                  <div>
                    Trước đó, BTC thông báo đã tập hợp đội ngũ các chuyên gia
                    quốc tế hàng đầu đến từ Hàn Quốc, Mỹ, Canada, Singapore và
                    Thái Lan để cùng với những chuyên gia hàng đầu Việt Nam, đảm
                    bảo làm chủ khối lượng thiết bị khổng lồ với 80% được nhập
                    từ nước ngoài nhằm đảm bảo chất lượng cao nhất.
                  </div>
                  <div>
                    Chỉ còn hơn chục ngày nữa, BlackPink sẽ diễn ra hai đêm tại
                    Việt Nam. Hiện tại, nhà phân phối vé chưa công bố lượng vé
                    đã bán ra.
                  </div>
                </div>
              </>
            )
          )}
        </div>

        <div
          className={clsx(
            "flex-1 min-w-[300px] bg-[#ddd] rounded-lg p-6",
            "max-md:min-w-0"
          )}
        >
          {id && <Sidebar idPost={id} />}
        </div>
      </div>
    </div>
  );
}
