import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../index.css";

export const Nav = () => {
  const [show, setShow] = useState(false);
  const [navbarOpen, setNabarOpen] = useState(false);

  const hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 mr-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
  return (
    <div className="flex justify-between items-center   bg-darkGrey ">
      <Link to="/" className="h-40 w-40">
        <img
          className="lg:h-full lg"
          src={require("../images/logo.png").default}
          alt="Feel Free Events Logo"
        ></img>
      </Link>
      <button
        className="block lg:hidden order-1"
        onClick={() => setNabarOpen(!navbarOpen)}
      >
        {hamburger}
      </button>
      <div
        className={
          "" +
          (navbarOpen
            ? " flex flex-col-reverse leading-10 md:flex md:flex-wrap md:max-h-24 md:w-96 md:leading-10 lg:flex "
            : "hidden lg:flex lg:justify-between xl:w-3/4 lg:w-full   ")
        }
      >
        <Link
          to="/"
          className="home order-2 md:order-none
        "
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOME
        </Link>
        <div
          className=" flex overflow-hidden float-left"
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(!show)}
        >
          <Link to="/photobooth" className="home flex  ">
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

/* className={
  "block lg:flex  lg:justify-between xl:w-3/4 lg:w-full md:w-full h-30v leading-10 items-center" +
  (navbarOpen ? " flex flex-col " : " hidden")
} */

// "leading-none md:flex md:flex-wrap max-h-24 w-96 lg:flex  lg:justify-between xl:w-3/4 lg:w-full md:w-full h-30v md:leading-10 items-center"
