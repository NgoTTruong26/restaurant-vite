import { contacts } from "Layout/constant";
import clsx from "clsx";

export default function Footer() {
  return (
    <div
      className={clsx(
        "flex justify-center items-center bg-[#1f1f24] pt-16 pb-32 px-5",
        "max-md:pb-12"
      )}
    >
      <div className="flex flex-col justify-center items-center max-w-[1200px] w-full">
        <div
          className={clsx(
            "flex flex-wrap justify-between w-full",
            "max-lg:[&>div]:w-[50%]",
            "max-sm:[&>div]:w-full"
          )}
        >
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className={clsx("flex text-[#fff]", "max-sm:pl-0", {
                "max-lg:pl-5": idx % 2 !== 0,
                "max-lg:pt-8": idx > 1,
                "max-sm:pt-8": idx > 0,
              })}
            >
              {item.icons && <div className="pr-3">{item.icons}</div>}
              <div className="flex flex-col">
                <div className="font-bold">{item.title} :</div>
                <div className="pt-3 whitespace-pre-line">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
