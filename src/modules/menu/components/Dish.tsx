import clsx from "clsx";
import { GetDishDTO } from "../dto/dish.dto";

interface Props {
  dish: GetDishDTO;
}

const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <div
      className={clsx(
        "w-[calc(100%/4)] px-5 pb-5 flex flex-col justify-center items-center text-[18px]",
        "max-md:w-[calc(100%/2)] max-md:px-10",
        " max-sm:px-3 "
      )}
    >
      <div className="pb-2">
        <img src={dish.image} alt={dish.name} />
      </div>
      <div className="capitalize font-shantell text-center">{dish.name}</div>
    </div>
  );
};

export default Dish;
