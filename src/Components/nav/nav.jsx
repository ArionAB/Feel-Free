import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";

export const Nav = () => {
  return (
    <div className="flex justify-between items-center r">
      <Link to="/">
        <img
          className="h-40 w-40"
          src={require("../../images/logo.png").default}
          alt="Feel Free Events Logo"
        ></img>
      </Link>
      <div className="flex text-red-600 justify-between w-2/4 ">
        <Link
          to="/"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          HOME
        </Link>
        <Link
          to="/despre-noi"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          DESPRE NOI
        </Link>
        <Link
          to="/echipamente"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          ECHIPAMENTE
        </Link>
        <Link
          to="/photobooth"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          PHOTOBOOTH
        </Link>
        <Link
          to="/contact"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          CONTACT
        </Link>
        <Link
          to="/oferta"
          className="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full"
        >
          CERE OFERTA
        </Link>
      </div>
    </div>
  );
};