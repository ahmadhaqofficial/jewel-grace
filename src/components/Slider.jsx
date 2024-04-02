import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PngHeader } from "@assets";
import React, { useState } from "react";
import { PngHeader1 } from "@assets";
import { PngHeader2 } from "@assets";
import { PngHeader3 } from "@assets";

export default function Slider({ selectedNav, setSelectedNav }) {
  const navList = [
    { name: "Earings" },
    { name: "Rings" },
    { name: "Clutch Bags" },
    { name: "Pendants" },
    { name: "Bracelets" },
    { name: "Sets" },
    { name: "Mens" },
    { name: "Religious Pendants" },
    { name: "Ethnic Jewellery" },
    { name: "Bridal Clutches" },
  ];

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="cards__main__container">
            <div className="cards__sub__container">
              <div className="cards__main__container__background">
                <img
                  className="cards__main__container__background__img"
                  src={PngHeader}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cards__main__container">
            <div className="cards__sub__container">
              <div className="cards__main__container__background">
                <img
                  className="cards__main__container__background__img"
                  src={PngHeader1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cards__main__container">
            <div className="cards__sub__container">
              <div className="cards__main__container__background">
                <img
                  className="cards__main__container__background__img"
                  src={PngHeader2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="cards__main__container">
            <div className="cards__sub__container">
              <div className="cards__main__container__background">
                <img
                  className="cards__main__container__background__img"
                  src={PngHeader3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="cards__main__container__content__scroll">
        <div className="cards__main__container__content__scroll__content">
          {navList.map((nav) => (
            <button
              className={`cards__main__container__content__scroll__content__button ${
                selectedNav === nav.name
                  ? "cards__main__container__content__scroll__content__button__active"
                  : " "
              }`}
              onClick={() => setSelectedNav(nav.name)}
              key={nav.name}
            >
              {nav.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
