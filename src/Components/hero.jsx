import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import crowd from "../images/crowd.jpeg";
import crowd2 from "../images/crowd2.jpeg";
import photobooth from "../images/photobooth.jpg";
import photobooth2 from "../images/photobooth2.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "95%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "4%" }}
      onClick={onClick}
    />
  );
}

function Hero() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="relative flex flex-col justify-center bg-center h-70v">
            <div className="absolute xl:top-1/3 xl:right-1/4 sm:top-1/3 sm:left-1/4 sm:right-1/4 top-1/4 left-1/5">
              <h1 className="flex justify-end pb-8 mb-16 ml-12 text-4xl font-semibold lg:ml-0 lg:text-6xl text-gold">
                SONORIZARI EVENIMENTE
              </h1>
              <h3 className="absolute text-3xl font-medium text-center text-white">
                ECHIPAMENTE SONORIZARE, ECHIPAMENTE DE LUMINI SI EFECTE SPECIALE
              </h3>
            </div>
            <img src={crowd} className="h-70v w-80v" alt="photobooth" />
          </div>
          <div className="relative flex flex-col justify-center bg-center h-70v">
            <div className="absolute xl:top-1/3 xl:right-1/4 sm:top-1/3 sm:left-1/4 sm:right-1/4 top-1/4 left-1/5">
              <h1 className="flex justify-center pb-8 text-6xl font-semibold text-pink">
                PHOTOBOOTH
              </h1>
            </div>
            <img src={photobooth2} className="h-70v w-80v" alt="photobooth" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;
