import React from "react";
import { PngRed } from "@assets";
import { PngBlue } from "@assets";
import { PngWhite } from "@assets";
import { PngPearl } from "@assets";

export default function Cards() {
  return (
    <>
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
