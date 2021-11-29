import React from "react";
import fum from "../images/fum.jpg";
import laser from "../images/laser.jpg";
import schela from "../images/schela-lumini.jpg";
import lumini from "../images/lumini2.jfif";

const Scenotehnica = () => {
  return (
    <div className="bg-sceno2 bg-cover bg-no-repeat w-full h-full ">
      <h1 className="flex text-white text-6xl pt-8 pl-48">
        Servicii sceno-tehnice
      </h1>
      <div className="flex flex-col p-16">
        <div className="flex justify-center gap-x-9 mb-7">
          <img src={fum} alt="" className="w-30v h-30v"></img>
          <img src={laser} alt="" className="w-30v h-30v"></img>
        </div>
        <div className="flex justify-center gap-x-9">
          <img src={schela} alt="" className="w-30v h-30v"></img>
          <img src={lumini} alt="" className="w-30v h-30v"></img>
        </div>
      </div>
      <div className="text-white text-xl font-medium text-justify w-60v m-auto">
        <p className="mb-6">
          Prezenta efectelor de lumini din cadrul oricarui eveniment este foarte
          importanta. Avand si un rol decorativ, lumina contribuie la
          imbunatatirea oricarui spatiu ales pentru desfasurarea evenimentului,
          incalzind sau racorind atmosfera.
        </p>
        <p className="mb-6">
          Firma Sing Grup va ofera consiliere si suport tehnic pentru orice tip
          de eveniment. Echipamentele de lumini oferite fac parte din cele mai
          cunoscute marci, D&B audiotehnik fiind o companie de top in lume. In
          cadrul oricarui eveniment atmosfera ocupa primul loc, de aceea este
          important ca spatiul sa fie pus in valoare prin intermediul luminilor
          dinamice.
        </p>
        <p className="mb-6">
          Efectele de lumini sunt alese in functie de tipologia evenimentului
          astfel luminile arhitecturale sunt perfecte in cadrul evenimentelor
          private (nunti, botezuri, aniversari) oferindu-va o atmosfera de basm
          datorita luminilor proiectate pe peretii laterali ai incaperii. Veti
          oferi publicului dvs o seara speciala, relaxanta si plina de culori.
          Firma Sing Grup va lasa sa alegeti dvs dintr-o gama foarte variata de
          sisteme lumini cromatice pentru a colora momentul din viata dvs dupa
          bunul plac. Show light (animatie) este nelipsit de la aproape orice
          eveniment, lumini folosite in special in cadrul concertelor sau
          spectacolelor. Echipa de profesionisti asigura si utilizarea de culori
          reprezentative pentru diverse organizatii, institutii sau companii.
        </p>
      </div>
      <div className="text-white w-60v m-auto ">
        <h3 className="text-gold font-semibold text-xl mt-16 mb-8">
          Feel Free Events dispune de urmatoarele echipamente de sceno-tehnica:
        </h3>
        <div className="flex mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gold mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <p>FUTURELIGHT PLB 130 MOVING HEAD</p>
        </div>
        <div className="flex mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gold mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <p>FUTURELIGHT EYE -19 RGBW ZOOM MOVING HEAD WASH</p>
        </div>
        <div className="flex mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gold mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <p>DTS STROBOSKOP STROBO DMX 1500</p>
        </div>
        <div className="flex mb-4 pb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gold mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <p>AUDIENCE BLINDER 4X50W LED COB 3200K</p>
        </div>
      </div>
    </div>
  );
};

export default Scenotehnica;
