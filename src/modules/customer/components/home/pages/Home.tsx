import { NavBarId } from 'Layout/constant';
import { useEffect, useState } from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import BannerSwiper from '../components/BannerSwiper';
import ContactUs from '../components/ContactUs';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import NewsPreview from '../components/News/NewsPreview';
import OurMenu from '../components/OurMenu';
import WhyUs from '../components/WhyUs';
import Bookings from '../components/bookings';

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

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="main">
      <div id={NavBarId.HOME}>
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
