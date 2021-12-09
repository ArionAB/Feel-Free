import React from "react";
import { Link } from "react-router-dom";

function Dcnoi() {
  return (
    <div className="p-8 mt-8 bg-center bg-crowd2">
      <div className="mt-24">
        <div className="flex flex-col items-center text-gold">
          <h1 className="mb-8 text-6xl font-bold">Serviciile noastre</h1>
          <p className="text-lg font-bold text-justify text-white lg:text-xl w-50v lg:text-center">
            Alege serviciul care ți se potrivește sau alege-le pe toate.
            Creează-ți petrecerea visurilor tale, iar noi îți garantăm că
            invitații tăi nu vor rămâne mult timp pe scaune.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-24 lg:flex lg:flex-row lg:justify-between">
          <Link to="/photobooth">
            <div className="flex items-center justify-center text-4xl font-bold text-white bg-no-repeat bg-cover bg-cabina h-30v lg:w-25v lg:bg-center">
              Photobooth
            </div>
          </Link>
          <Link to="/sonorizare">
            <div className="flex items-center justify-center text-4xl font-bold text-white bg-center bg-no-repeat bg-cover bg-sonor h-30v lg:w-25v">
              Sonorizare
            </div>
          </Link>
          <Link to="/scenotehnica">
            <div className="flex items-center justify-center text-4xl font-bold text-white bg-center bg-no-repeat bg-cover bg-sceno h-30v lg:w-25v">
              Scenotehnica
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full mt-16 sm:flex-row ">
        <div className="flex flex-col lg:w-3/4 lg:flex-row lg:flex">
          <Link to="/contact">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-hero "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h3 className="icon-text">Evenimente Corporate</h3>
            </div>
          </Link>
          <div className="flex justify-center md:justify-between ">
            <Link to="/contact">
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-hero"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
                <h3 className="icon-text">Evenimente Private</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:w-3/5 lg:justify-evenly lg:flex lg:flex-row">
          <Link to="/contact">
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-hero"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
              <h3 className="icon-text">Botezuri</h3>
            </div>
          </Link>
          <div className="flex justify-center md:justify-between ">
            <Link to="/contact">
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-hero"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
                <h3 className="icon-text">Nunti</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/*  <div className="flex flex-col lg:flex lg:flex-row">
           <Link to="/contact">
             <div className="flex flex-col items-center justify-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="icon-hero"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                 />
               </svg>
               <h3 className="icon-text">Botezuri</h3>
             </div>
           </Link>
           <Link to="/contact">
             <div className="flex flex-col items-center justify-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="icon-hero"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                 />
               </svg>
               <h3 className="icon-text">Nunti</h3>
             </div>
           </Link>
         </div> */
export default Dcnoi;

/* <div className="flex flex-col mt-16 ">
      <div className="flex justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-hero "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-64 text-red-500 icon-hero"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-64 icon-hero"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-64 icon-hero"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      </div>
      <div className="flex text-4xl text-gold justify-evenly ">
        <h3 className="m">Evenimente Corporate</h3>
        <h3 className="">Evenimente Private</h3>
        <h3 className="">Botezuri</h3>
        <h3 className="">Nunti</h3>
      </div>
    </div> */
