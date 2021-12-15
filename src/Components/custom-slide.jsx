import React from "react";
import Slider from "react-slick";

import potato01 from "../images/potato01.jpeg";
import potato02 from "../images/potato02.jpeg";
import potato03 from "../images/potato03.jpeg";
import potato04 from "../images/potato04.jpeg";

export const CustomSlide = ({ photo01, photo02, photo03, photo04 }) => {
  console.log(photo01);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            // src={require(`../images/potato0${i + 1}.jpeg`).default}
            // src={`potato0${i + 1}`}
            // src={`potato0${i + 1}`}
            // src={`photo0${i + 1}`}
            src={photo01}
            // src={(photo01, photo02)}
            // src={photo0}
            alt="sound"
          ></img>{" "}
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
          <img src={photo01} className=" w-80v h-30v sm:h-70v" />
        </div>
        <div>
          <img src={photo02} className=" w-80v h-30v sm:h-70v" />
        </div>
        <div>
          <img src={photo03} className=" w-80v h-30v sm:h-70v" />
        </div>
        <div>
          <img src={photo04} className=" w-80v h-30v sm:h-70v" />
        </div>
      </Slider>
    </div>
  );
};
