import React from "react";
import { Link } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const instagram = <FontAwesomeIcon icon={faInstagram} />;

function Footer() {
  return (
    <div className="mt-24 bg-cover bg-footer sm:h-40v w-80v">
      <div className="flex flex-col sm:flex-row sm:justify-evenly">
        <div className="flex flex-col items-center mt-12 ">
          <h2 className="ml-8 text-2xl font-medium text-dblue">HARTA SITE</h2>
          <ul className="text-xl text-dblue">
            <Link to="/photobooth">
              <li className="flex mt-6 hover:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3"
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
                  className="w-6 h-6 mr-3"
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
                  className="w-6 h-6 mr-3"
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
                  className="w-6 h-6 mr-3"
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
        <Link to="/">
          {" "}
          <img
            src={require("../images/logo.png").default}
            alt="Logo"
            className="hidden lg:block lg:h-40v lg:w-60"
          ></img>
        </Link>
        <div className="flex flex-col items-center mt-12 sm:items-baseline text-dblue">
          <h2 className="ml-8 text-2xl font-medium text-dblue">
            CONTACTEAZA-NE
          </h2>
          <p className="flex mt-6 text-xl text-dblue hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3 "
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
          <p className="flex mt-6 text-xl text-dblue hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            marian.raul@yahoo.com
          </p>
          <a
            href="https://www.instagram.com/feelfree__events/"
            className="flex mt-6 text-xl text-dblue hover:text-purple-400"
          >
            <p className="w-6 h-6 mr-2">{instagram}</p>Follow us on instagram
          </a>
          <Link
            to="/contact"
            className="flex mt-6 text-xl ml-9 text-dblue hover:text-purple-400 "
          >
            Formular Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
