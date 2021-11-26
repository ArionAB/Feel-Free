import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

export const Nav = () => {
  return (
    <div className="flex justify-between items-center r">
      <Link to="/">
        <img
          className="h-40 w-40"
          src={require("../images/logo.png").default}
          alt="Feel Free Events Logo"
        ></img>
      </Link>
      <div className="flex  justify-between w-3/4 ">
        <Link to="/" className="btn-nav">
          HOME
        </Link>
        <Link to="/despre-noi" className="btn-nav">
          DESPRE NOI
        </Link>
        <Link to="/scenotehnica" className="btn-nav">
          SCENOTEHNICA
        </Link>
        <Link to="/sonorizare" className="btn-nav">
          SONORIZARE
        </Link>
        <Link to="/photobooth" className="btn-nav">
          PHOTOBOOTH
        </Link>
        <Link to="/contact" className="btn-nav">
          CONTACT
        </Link>
        <Link to="/oferta" className="btn-nav">
          CERE OFERTA
        </Link>
      </div>
    </div>
  );
};
