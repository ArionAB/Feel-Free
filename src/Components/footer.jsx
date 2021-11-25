import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-24 bg-footer h-40v w-80v">
      <div className="flex justify-evenly">
        <div className="mt-12 flex flex-col">
          <h2 className=" ml-8 text-dblue font-medium text-2xl">HARTA SITE</h2>
          <ul className="text-dblue text-xl">
            <Link to="/photobooth">
              <li className="flex mt-6 hover:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Photobooth
              </li>
            </Link>
            <Link to="/scenotehnica">
              <li className="flex mt-3 hover:text-purple-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Scenotehnica
              </li>
            </Link>
            <Link to="/sonorizare">
              <li className="flex mt-3 hover:text-purple-400 ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Sonorizare
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex mt-3 hover:text-purple-400">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <img
          src={require("../images/logo.png").default}
          alt="Logo"
          className="h-40v w-60"
        ></img>
        <div className="mt-12 flex flex-col text-dblue">
          <h2 className=" ml-8 text-dblue font-medium text-2xl">
            CONTACTEAZA-NE
          </h2>
          <p className="flex mt-6 text-dblue text-xl hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            07522248261
          </p>
          <p className="flex mt-6 text-dblue text-xl hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Luni-Vineri 9:00-18:00
          </p>
          <Link
            to="/contact"
            className="flex mt-6 ml-9 text-dblue text-xl hover:text-purple-400"
          >
            Formular Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
