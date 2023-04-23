import clsx from "clsx";
import { Course } from "interfaces/entities/MenuEntity";

export default function Appetizer() {
  const data: Course[] = [
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
    {
      srcImg:
        "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
      alt: "Magnam Tiste",
      title: "Magnam Tiste",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-5 pb-10">
      <div className="capitalize">Menu</div>
      <div className="capitalize font-medium text-[36px] text-red leading-8 pb-20">
        Appetizer
      </div>
      <div className="flex">
        <div
          className={clsx(
            "flex flex-wrap",
            "max-sm:flex-col max-sm:items-center"
          )}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "w-[calc(100%/3)] px-14 pb-10 flex flex-col justify-center items-center",
                "max-md:w-[50%] max-md:px-4",
                "max-sm:w-[80%] max-sm:px-0",
                "max-sm:w-[90%]"
              )}
            >
              <div className="pb-2">
                <img src={item.srcImg} alt={item.alt} />
              </div>
              <div className="capitalize font-shantell text-[22px]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
