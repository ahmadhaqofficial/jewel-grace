import React from "react";

import data from "../../src/data.json";
export default function Cards({ selectedNav }) {
  const filterdata = data.filter((item) => item.category === selectedNav);
  return (
    <>
      <div className="cards__main__container__content__wrapper">
        {filterdata.length === 0 && (
          <div className="cards__main__container__content__no__data">
            No Data Found
          </div>
        )}
        {filterdata.map((item) => (
          <div className="cards__main__container__content">
            <div className="cards__sub__container__content">
              <div className="cards__main__container__content__image">
                <img src={item.images} alt="" />
              </div>
              <div className="cards__main__container__content__price">
                Rs. {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
