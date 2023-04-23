import { contacts } from "Layout/constant";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-[#1f1f24] pt-16 pb-32">
      <div className="flex flex-col justify-center items-center max-w-[1200px] w-full">
        <div className="flex justify-between w-full">
          {contacts.map((item, idx) => (
            <div key={idx} className="flex-1 flex text-[#fff]">
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
