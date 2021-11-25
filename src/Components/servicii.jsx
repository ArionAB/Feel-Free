import React from "react";
import { Link } from "react-router-dom";

function Servicii() {
  return (
    <div className="mt-24">
      <div className="flex flex-col text-gold items-center">
        <h1 className="text-6xl font-bold mb-8">Serviciile noastre</h1>
        <p className="text-xl text-dblue bg-gray-300 font-bold w-50v text-center">
          Alege serviciul care ți se potrivește sau alege-le pe toate.
          Creează-ți petrecerea visurilor tale, iar noi îți garantăm că
          invitații tăi nu vor rămâne mult timp pe scaune.
        </p>
      </div>
      <div className="mt-24 flex justify-between">
        <Link to="/photobooth">
          <div className="bg-cabina h-30v w-25v bg-center bg-cover bg-no-repeat flex justify-center items-center text-white text-4xl font-bold">
            Photobooth
          </div>
        </Link>
        <Link to="/sonorizare">
          <div className="bg-sonor h-30v w-25v bg-center bg-cover bg-no-repeat flex justify-center items-center text-white text-4xl font-bold">
            Sonorizare
          </div>
        </Link>
        <Link to="/scenotehnica">
          <div className="bg-sceno h-30v w-25v bg-center bg-cover bg-no-repeat flex justify-center items-center text-white text-4xl font-bold">
            Scenotehnica
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Servicii;
