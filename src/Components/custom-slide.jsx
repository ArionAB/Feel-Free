import React from "react";
import Slider from "react-slick";

import potato01 from "../images/potato01.jpeg";
import potato02 from "../images/potato02.jpeg";
import potato03 from "../images/potato03.jpeg";
import potato04 from "../images/potato04.jpeg";

import styles from "../index.css";
function smallImg(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "red",
        width: "50",
      }}
      onClick={onClick}
    />
  );
}

export const CustomSlide = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={require(`../images/potato0${i + 1}.jpeg`).default}
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
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src={potato01} className=" w-80v h-40v" />
        </div>
        <div>
          <img src={potato02} className=" w-80v h-40v" />
        </div>
        <div>
          <img src={potato03} className=" w-80v h-40v" />
        </div>
        <div>
          <img src={potato04} className=" w-80v h-40v" />
        </div>
      </Slider>
    </div>
  );
};
