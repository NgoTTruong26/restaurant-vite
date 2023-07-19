import BannerSwiper from "./components/BannerSwiper";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import OurMenu from "./components/OurMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Bookings from "./components/bookings";
import { useEffect, useState } from "react";
import NewsPreview from "./components/News/NewsPreview";

export default function Home() {
  const [slidesPerView, setSlidesPerView] = useState<number | null>(null);

  useEffect(() => {
    if (window.innerWidth <= 850) {
      if (window.innerWidth < 450) {
        setSlidesPerView(1);
        return;
      }

      setSlidesPerView(2);
      return;
    }
    setSlidesPerView(3);
  }, []);

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      if ((e.target as Window).innerWidth <= 850) {
        if ((e.target as Window).innerWidth < 450) {
          setSlidesPerView(1);
          return;
        }

        setSlidesPerView(2);
        return;
      }

      setSlidesPerView(3);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="main">
      <div id="home">
        <BannerSwiper />
        <AboutUs />
        <WhyUs />
      </div>
      <Banner srcImg="url('https://bootstrapmade.com/demo/templates/Yummy/assets/img/stats-bg.jpg')" />
      <OurMenu slidesPerView={slidesPerView} />
      <Events slidesPerView={slidesPerView} />
      <Bookings />
      <Gallery slidesPerView={slidesPerView} />
      <NewsPreview slidesPerView={slidesPerView} />
      <ContactUs />
    </div>
  );
}
