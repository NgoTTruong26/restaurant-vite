import BannerSwiper from "./components/BannerSwiper";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import OurMenu from "./components/OurMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Bookings from "./components/bookings";

export default function Home() {
  return (
    <>
      <div id="home">
        <BannerSwiper />
        <AboutUs />
        <WhyUs />
      </div>
      <Banner srcImg="url('https://bootstrapmade.com/demo/templates/Yummy/assets/img/stats-bg.jpg')" />
      <OurMenu />
      <Events />
      <Bookings />
      <Gallery />
      <ContactUs />
    </>
  );
}
