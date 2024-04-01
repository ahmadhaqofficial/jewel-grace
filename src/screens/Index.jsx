import React, { useLayoutEffect } from "react";
import { Cards } from "@components";

export default function Index() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <div className="jewel__main__container__header">
        <div className="jewel__sub__container__header">
          <div className="jewel__main__container__header__buttons">
            Free Shipping
          </div>
          <div className="jewel__main__container__header__button__prices">
            Best Prices in 2009!
          </div>
          <div className="jewel__main__container__header__button__store">
            {" "}
            <a href=""> Store</a>
          </div>
        </div>
        <div className="jewel__main__container__header__marquee__line__main">
          {" "}
          <div className="jewel__main__container__header__marquee__line">
            <marquee direction="left" loop>
              Note: Prices exclude GST. Newly levied 3% GST will be applied at
              checkout
            </marquee>
          </div>
        </div>
      </div>
      <div
        className="header"
        style={
          isScrolling ? { boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" } : null
        }
      >
        <div className="header__content">
          <div className="header__content__logo">Jewel Grace</div>
          <div className="header__content__nav__link__double">
            <input
              className="header__content__nav__input "
              type="text"
              placeholder="Search Products"
            />
            <div className="header__content__nav__input__svg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <button
            className="header__content__nav__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title="Menu"
          >
            {isOpen ? (
              <Close size="24" color="white" />
            ) : (
              <Menu size="24" color="white" />
            )}
          </button>
          {isOpen ? (
            <div className="header__content__nav">
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Login
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Register
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </a>
              <a
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__button header__content__nav__button__primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </a>
            </div>
          ) : null}
        </div>
        <Cards />
      </div>
    </>
  );
}

function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
