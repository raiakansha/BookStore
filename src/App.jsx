import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import BestBooks from "./components/bestBook/BestBooks";
import Banner from "./components/banner/Banner";
import AppStoreBanner from "./components/appStoreBanner/AppStoreBanner";
import TopBooks from "./components/topBooks/TopBooks";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
//aos import
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Popup from "./components/popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <BestBooks handleOrderPopup={handleOrderPopup} />
        <Banner />
        <AppStoreBanner />
        <TopBooks />
        <Testimonial />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      </div>
    </>
  );
};

export default App;
