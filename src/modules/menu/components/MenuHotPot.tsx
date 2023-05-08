import clsx from "clsx";
import { Course } from "interfaces/entities/MenuEntity";

interface Props {
  itemHotPot: Course;
}

const MenuHotPot: React.FC<Props> = ({ itemHotPot }) => {
  return (
    <div
      className={clsx(
        "w-[calc(100%/3)] px-14 pb-5 flex flex-col justify-center items-center text-[18px]",
        "max-md:w-[calc(100%/2)] max-md:px-10",
        " max-sm:px-3 "
      )}
    >
      <div className="pb-2">
        <img src={itemHotPot.srcImg} alt={itemHotPot.alt} />
      </div>
      <div className="capitalize font-shantell text-center">
        {itemHotPot.title}
      </div>
    </div>
  );
};

export default MenuHotPot;
