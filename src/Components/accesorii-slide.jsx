import Slider from "react-slick";
import custom2 from "../images/custom-design2.jpg";
import custom3 from "../images/custom-3.jpg";
import custom4 from "../images/custom-4.jpg";
import custom5 from "../images/custom-5.jpg";
import photobooth2 from "../images/photobooth2.jpg";

function AccSlide() {
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
              src={custom2}
              alt="photbooth images"
              className="h-full w-full "
            />
          </div>
          <div className=" h-40v">
            <img
              src={custom3}
              alt="photbooth images"
              className="h-full w-full "
            />
          </div>
          <div className=" h-40v">
            <img
              src={custom4}
              alt="photbooth images"
              className="h-full w-full "
            />
          </div>
          <div className=" h-40v">
            <img
              src={custom5}
              alt="photbooth images"
              className="h-full w-full "
            />
          </div>
          <div className=" h-40v flex flex-col justify-center bg-center relative">
            <img
              src={photobooth2}
              alt="photbooth images"
              className=" h-full w-full 
            "
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default AccSlide;
