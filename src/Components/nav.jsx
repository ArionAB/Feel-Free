import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../index.css";

export const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between items-center r overflow-hidden bg-darkGrey">
      <Link to="/">
        <img
          className="h-40 w-40"
          src={require("../images/logo.png").default}
          alt="Feel Free Events Logo"
        ></img>
      </Link>
      <div className="flex  justify-between w-3/4 items-center ">
        <Link to="/" className="home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOME
        </Link>
        <div
          className="flex overflow-hidden float-left"
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(!show)}
        >
          <Link to="/photobooth" className="home flex">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            PHOTOBOOTH
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pl-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          {show ? (
            <div className=" block absolute bg-white w-40 z-10 mt-6 rounded-lg shadow-xl">
              <Link
                to="/photobooth"
                className=" float-none text-black py-4 px-4 block text-left hover:text-gold hover:bg-black "
              >
                Nunti
              </Link>
              <a
                href="#botez"
                className="float-none text-black py-4 px-4 block text-left hover:text-gold hover:bg-black"
              >
                Botez
              </a>
              <a
                href="#aniversari"
                className="float-none text-black py-4 px-4 block text-left hover:text-gold hover:bg-black"
              >
                Aniversari
              </a>
              <Link
                to="/accesorii"
                className="float-none text-black py-4 px-4 block text-left hover:text-gold hover:bg-black"
              >
                Accesorii & Personalizare
              </Link>
            </div>
          ) : null}
        </div>

        <Link to="/scenotehnica" className="home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SCENOTEHNICA
        </Link>
        <Link to="/sonorizare" className="home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SONORIZARE
        </Link>
        <Link to="/contact" className="home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          CONTACT
        </Link>
      </div>
    </div>
  );
};
