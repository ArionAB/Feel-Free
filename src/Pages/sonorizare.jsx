import React from "react";
import { CustomSlide } from "../Components/custom-slide";
import nav from "../images/nav.jpg";

const Sonorizare = () => {
  return (
    <div>
      <CustomSlide />
      <div className="text-white">
        <h1>SONORIZARI EVENIMENTE</h1>
        <img src={nav} alt="" className="w-30v h-20"></img>
      </div>
      <p>
        Sonorizari evenimente si inchirieri sisteme audio pentru sonorizari
        evenimente de orice gen – prezentari, conferinte, nunti, botezuri,
        petreceri etc.
      </p>
    </div>
  );
};

export default Sonorizare;
