import Slider from "react-slick";

import props from "../images/props.jpeg";
import props1 from "../images/props1.jpg";
import props3 from "../images/props3.jpg";
import props4 from "../images/props4.jpg";
import props5 from "../images/props5.jpg";
import props6 from "../images/props6.jpg";

export const PropsSlide = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div className=" h-40v ">
            <img
              src={props}
              alt="photbooth images"
              className="h-full w-full object-contain"
            />
          </div>
          <div className=" h-40v">
            <img
              src={props1}
              alt="photbooth images"
              className="h-full w-full object-contain"
            />
          </div>
          <div className=" h-40v">
            <img
              src={props3}
              alt="photbooth images"
              className="h-full w-full object-contain"
            />
          </div>
          <div className=" h-40v">
            <img
              src={props4}
              alt="photbooth images"
              className="h-full w-full object-contain"
            />
          </div>
          <div className=" h-40v ">
            <img
              src={props5}
              alt="photbooth images"
              className=" h-full w-full object-contain
                "
            />
          </div>
          <div className=" h-40v ">
            <img
              src={props6}
              alt="photbooth images"
              className=" h-full w-full object-contain
                "
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
