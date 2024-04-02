import { PngFooter } from "@assets";
import React from "react";

export default function Footer() {
  return (
    <div className="fotter__main__container">
      <div className="fotter__sub__container">
        {" "}
        <div className="fotter__img__container">
          <img
            className="fotter__main__container__img"
            src={PngFooter}
            alt=""
          />
        </div>
        <div className="fotter__main__container__both__Sides">
          <div className="fotter__main__container__left__side">Jewel Grace</div>
          <div className="fotter__main__container__right">HELP</div>
        </div>
      </div>
      <div className="fotter__main__container__info__both__sides">
        <div className="fotter__main__container__info">
          <div className="fotter__main__container__info__number">
            Contact Us: 042-111 801 802
          </div>
          <div className="fotter__main__container__info__number">
            Email: wecare@tesoro.pk
          </div>
          <div className="fotter__main__container__info__number">
            Address: 3-Z DHA Lahore
          </div>
          <div className="fotter__main__container__info__number">
            Available From: 11:00 AM to 7:00 PM (Mon-Sat)
          </div>
        </div>
        <div className="fotter__main__container__info__care">
          <div className="fotter__main__container__info__number">
            Jewellery Care
          </div>
          <div className="fotter__main__container__info__number">
            After Sales Service
          </div>
          <div className="fotter__main__container__info__number">About Us</div>
          <div className="fotter__main__container__info__number">
            Exchange Policy
          </div>
          <div className="fotter__main__container__info__number">
            Order & Shipping
          </div>
          <div className="fotter__main__container__info__number">Stores</div>
        </div>
      </div>
      <div className="fotter__main__container__info__number__privacy__policy__rights">
        Copyright © 2024 Jewel Grace. All rights reserved.
      </div>
    </div>
  );
}
