import React from "react";
import NavBar from "../NavBarContainer/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="text-center pb-20 lg:pb-0">
        <Banner></Banner>
      </div>
      <div className="min-h-screen w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
