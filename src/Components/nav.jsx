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
      className="mr-4 text-white h-14 w-14"
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
    <div className="sticky top-0 z-50 flex items-center justify-between bg-darkGrey ">
      <Link to="/" className="w-40 h-40">
        <img
          className="lg:h-full lg"
          src={require("../images/logo.png").default}
          alt="Feel Free Events Logo"
        ></img>
      </Link>
      <button
        className="order-1 block lg:hidden"
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
          className="order-2 home md:order-none "
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOME
        </Link>
        <div
          className="flex float-left overflow-hidden "
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(!show)}
        >
          <Link to="/photobooth" className="flex home ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            PHOTOBOOTH
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 pl-2"
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
            <div className="absolute z-10 block w-40 mt-6 bg-white rounded-lg shadow-xl ">
              <Link
                to="/photobooth"
                className="block float-none px-4 py-4 text-left text-black  hover:text-gold hover:bg-black"
              >
                Nunti
              </Link>
              <a
                href="#botez"
                className="block float-none px-4 py-4 text-left text-black hover:text-gold hover:bg-black"
              >
                Botez
              </a>
              <a
                href="#aniversari"
                className="block float-none px-4 py-4 text-left text-black hover:text-gold hover:bg-black"
              >
                Aniversari
              </a>
              <Link
                to="/accesorii"
                className="block float-none px-4 py-4 text-left text-black hover:text-gold hover:bg-black"
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
