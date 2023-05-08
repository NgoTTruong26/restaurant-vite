import clsx from "clsx";
import { Course } from "interfaces/entities/MenuEntity";

interface Props {
  itemGrilled: Course;
}

const MenuGrilled: React.FC<Props> = ({ itemGrilled }) => {
  return (
    <div
      className={clsx(
        "w-[calc(100%/3)] px-14 pb-5 flex flex-col justify-center items-center text-[18px]",
        "max-md:w-[calc(100%/2)] max-md:px-12",
        " max-sm:px-3 "
      )}
    >
      <div className="pb-2">
        <img src={itemGrilled.srcImg} alt={itemGrilled.alt} />
      </div>
      <div className="capitalize font-shantell">{itemGrilled.title}</div>
    </div>
  );
};

export default MenuGrilled;
