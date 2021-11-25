import React from "react";
import cover from "../images/crowd2.jpeg";

function Hero() {
  return (
    <>
      <div className="bg-crowd h-70v flex flex-col justify-center bg-center">
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
