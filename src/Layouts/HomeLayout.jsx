import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
