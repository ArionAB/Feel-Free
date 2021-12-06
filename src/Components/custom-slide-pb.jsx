import React from "react";
import Slider from "react-slick";

import arc01 from "../images/arc01.jpg";
import arc02 from "../images/arc02.jpg";
import arc03 from "../images/arc03.jpg";

export const CustomSlidePB = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={require(`../images/arc0${i + 1}.jpg`).default}
            alt="sound"
          ></img>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-36">
      <Slider {...settings}>
        <div>
          <img src={arc01} className=" w-80v h-60v " />
        </div>
        <div>
          <img src={arc02} className=" w-80v h-60v " />
        </div>
        <div>
          <img src={arc03} className=" w-80v h-60v " />
        </div>
      </Slider>
    </div>
  );
};
