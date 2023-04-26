import clsx from "clsx";
import { contacts } from "../constant";

export default function ContactUs() {
  return (
    <div id="address" className="flex justify-center items-center py-16 px-5">
      <div className="max-w-[1200px] w-full flex flex-col justify-center items-center">
        <div className="uppercase">Contact</div>
        <div className="font-amatic text-[48px] pb-5 text-center max-xs:text-[38px]">
          {"Need Help? "}
          <span className="text-red max-xs:text-[38px]">Contact Us</span>
        </div>
        <div className="flex w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.8447665479248!2d105.82215883116828!3d20.964979539018373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2a706a64006e34c!2sBuffet%20l%E1%BA%A9u%20T12!5e0!3m2!1svi!2s!4v1673294855338!5m2!1svi!2s"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="relative rounded-[12px] w-full h-[350px]"
          ></iframe>
        </div>
        <div
          className={clsx(
            "flex flex-wrap w-full ",
            "max-md:flex-nowrap max-md:flex-col"
          )}
        >
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex w-[50%] pt-5 ",
                "max-md:w-full max-md:px-0 ",
                {
                  "pl-4": idx % 2 !== 0,
                  "pr-4": idx % 2 === 0,
                }
              )}
            >
              <div className="flex w-full bg-[#eee] p-7 rounded-md">
                <div className="flex p-3 justify-center items-center bg-red text-[#fff] rounded-full">
                  {item.icons}
                </div>
                <div className="pl-3">
                  <div className="uppercase font-bold">{item.title}</div>
                  <div>{item.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
