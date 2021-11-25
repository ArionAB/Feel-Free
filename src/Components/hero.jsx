import React, { useState } from "react";
import Carousel from "./carousel";
import crowd from "../images/crowd.jpeg";
import crowd2 from "../images/crowd2.jpeg";

function Hero() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const images = [crowd, crowd2];

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };
  return (
    <>
      <div className="bg-crowd h-70v flex flex-col justify-center bg-center">
        <Carousel
          images={images}
          setWidth={setWidth}
          xPosition={xPosition}
          handleClickPrev={handleClickPrev}
          handleClicknext={handleClicknext}
        />
        <h1 className=" text-6xl flex justify-center text-gold pb-8 font-semibold">
          SONORIZARI EVENIMENTE
        </h1>
        <h3 className="text-3xl text-white font-medium flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 order-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          ECHIPAMENTE SONORIZARE, ECHIPAMENTE DE LUMINI SI EFECTE SPECIALE
        </h3>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div
        className="flex justify-end
        "
      ></div>
    </>
  );
}

export default Hero;
