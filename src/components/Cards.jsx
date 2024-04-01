import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PngHeader } from "@assets";
import React from "react";
import { PngHeader1 } from "@assets";
import { PngHeader2 } from "@assets";
import { PngHeader3 } from "@assets";
import { PngRed } from "@assets";
import { PngBlue } from "@assets";
import { PngWhite } from "@assets";
import { PngPearl } from "@assets";

export default function Cards() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
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

      <div className="cards__main__container__content">
        <div className="cards__sub__container__content">
          <div className="cards__main__container__content__image">
            <img src={PngRed} alt="" />
          </div>
          <div className="cards__main__container__content__price">
            Rs. 2,250
          </div>
        </div>
        <div className="cards__sub__container__content">
          <div className="cards__main__container__content__image">
            <img src={PngBlue} alt="" />
          </div>
          <div className="cards__main__container__content__price">
            Rs. 2,950
          </div>
        </div>
        <div className="cards__sub__container__content">
          <div className="cards__main__container__content__image">
            <img src={PngWhite} alt="" />
          </div>
          <div className="cards__main__container__content__price">
            Rs. 12,400
          </div>
        </div>
        <div className="cards__sub__container__content">
          <div className="cards__main__container__content__image">
            <img src={PngPearl} alt="" />
          </div>
          <div className="cards__main__container__content__price">
            Rs. 2,850
          </div>
        </div>
      </div>
    </>
  );
}
