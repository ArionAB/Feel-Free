import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "../images";

import fum01 from "../images/fum.jpg";
import fum02 from "../images/laser.jpg";
import fum03 from "../images/schela-lumini.jpg";
import fum4 from "../images/lumini2.jfif";
import potato01 from "../images/potato01.jpeg";
import potato02 from "../images/potato02.jpeg";
import potato03 from "../images/potato03.jpeg";
import potato04 from "../images/potato04.jpeg";

const baseUrl = "../images";
// <img src={`${baseUrl}/potato0${i + 1}.jpeg`} />
//   <img src={`${potato0${...i+1 }}`} />

const photos = [
  {
    name: "potato01",
    src: "../images/potato01.jpeg",
  },
  {
    name: "potato02",
    src: "../images/potato02.jpeg",

    name: "potato03",
    src: "../images/potato03.jpeg",
  },
];

export const CustomSlide = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={require(`../images/potato0${i + 1}.jpeg`).default}></img>
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
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src={potato01} />
        </div>
        <div>
          <img src={potato02} />
        </div>
        <div>
          <img src={potato03} />
        </div>
        <div>
          <img src={potato04} />
        </div>
      </Slider>
    </div>
  );
};
// <div>
//   <img src={baseUrl + "/potato01.jpeg"} />
// </div>
// <div>
//   <img src={baseUrl + "/potato02.jpeg"} />
// </div>
// <div>
//   <img src={baseUrl + "/potato03.jpeg"} />
// </div>
// <div>
//   <img src={baseUrl + "/potato04.jpeg"} />
// </div>
