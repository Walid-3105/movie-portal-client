import React, { useContext } from "react";
("use-client");
import banner1 from "../assets/Banner-1.jpg";
import banner2 from "../assets/Banner-2.jpg";
import banner3 from "../assets/Banner-3.jpg";
import banner4 from "../assets/Banner-4.jpg";
// import background from "../assets/background.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../Provider/AuthProvider";
import Skeleton from "react-loading-skeleton";

const Banner = () => {
  return (
    <div
      className="w-full h-[450px] relative"
      style={{
        // backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20 absolute inset-0 flex flex-col lg:flex-row w-11/12 mx-auto py-3 lg:py-0">
        <div className="w-full lg:w-1/2 flex items-center justify-start  lg:mr-10 ">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4 pt-10 lg:pt-0 px-4 lg:px-0 zoom-in">
              Movie Hive: Your Ultimate Movie Companion
            </h2>
            <p className="text-md opacity-90 hover:text-orange-500 max-w-md px-4 lg:px-0 mb-5 lg:mb-0 zoom-in">
              <TypeAnimation
                sequence={[
                  " Discover and explore your favorite movies with ease! Add, view, and manage movie details, build your personal favorites, and enjoy a seamless, user-friendly experience—all in one dynamic portal.",
                  1000,
                ]}
                speed={150}
                repeat={Infinity}
              ></TypeAnimation>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-3/6 flex items-center justify-center ml-0 lg:ml-14 px-2  ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="w-100%"
          >
            <SwiperSlide>
              <img
                src={banner1}
                className="w-full h-[250px] lg:h-[280px] rounded-xl object-cover"
                alt="Banner 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={banner3}
                className="w-full h-[250px] lg:h-[280px] rounded-xl object-cover"
                alt="Banner 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={banner2}
                className="w-full h-[250px] lg:h-[280px] rounded-xl object-cover"
                alt="Banner 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={banner4}
                className="w-full h-[250px] lg:h-[280px] rounded-xl object-cover"
                alt="Banner 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
