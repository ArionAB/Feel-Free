import React from "react";
import { Link } from "react-router-dom";
import { CustomSlidePB } from "../Components/custom-slide-pb";

export const Photobooth = () => {
  return (
    <div>
      <div className="bg-black pb-2 px-6">
        <h1 className="text-gold text-5xl font-medium py-16 ">
          CABINA FOTO NUNTĂ
        </h1>
        <p className="text-white text-justify pr-6">
          Nunta și invitații voștri merită un photo booth și distracție pe
          măsură. Așa că transformă-ți ziua specială în cea mai tare petrecere a
          anului! Cabinele noastre sunt concepute ca studiouri foto mobile,
          astfel încât voi să aveți poze de calitate, cu lumini și culori
          grozave, gata de trimis pe E-Mail, iar de acolo pe Facebook, sau de
          pus acasă pe frigider. Și nu știm pe nimeni până acum care să aibă
          prea multe fotografii magnetice pe frigider! Ai la dispoziție o
          multitudine de fundaluri foto și modele de design pentru fotografii,
          din care să alegi și să personalizezi exact ce se potrivește pentru
          locația și stilul nunții tale.
        </p>
        <Link
          to="/contact"
          className=" flex justify-center bg-gold  hover:bg-black  hover:text-gold text-black hover:border-solid border-4 border-gold  font-bold py-2 px-8 my-8 rounded-full w-1/6"
        >
          Cere Oferta
        </Link>
      </div>
      <CustomSlidePB />
      <div className="bg-black pb-2 px-6">
        <h1 id="botez" className="text-gold text-5xl font-medium py-16 ">
          CABINA FOTO BOTEZ
        </h1>
        <p className="text-white text-justify pr-6">
          Fiecare petrecere de botez se dorește a fi specială. Și noi știm cum!
          Vrem să oferim ce este mai bun pentru micuțul nostru, organizăm în cel
          mai mic detaliu marea lui petrecere și ne dorim ca invitații să se
          distreze și să rămână cu amintiri superbe. Cabina foto este noul trend
          și soluția cea mai bună pentru acel WOW al evenimentului. În general,
          alegem o tematică și încercăm să punem o amprentă a micuței vedete pe
          tot parcursul petrecerii. Nu va ști el ce să zică dar clar noi, ca
          părinți, știm ce îl caracterizează.
        </p>
        <Link
          to="/contact"
          className=" flex justify-center bg-gold  hover:bg-black  hover:text-gold text-black hover:border-solid border-4 border-gold  font-bold py-2 px-8 my-8 rounded-full w-1/6"
        >
          Cere Oferta
        </Link>
      </div>
      <CustomSlidePB />
      <div className="bg-black pb-2 px-6">
        <h1 id="aniversari" className="text-gold text-5xl font-medium py-16 ">
          CABINA FOTO ANIVERSĂRI
        </h1>
        <p className="text-white text-justify pr-6">
          Petrecerea de majorat este unică, este momentul în care ești special
          si vrei să strălucești iar prietenii și colegii să vorbească tot anul
          despre cât de tare a fost la petrecere. Este un moment important în
          viața ta și vrei să îți păstrezi cele mai frumoase amintiri. Probabil
          că ai luat în calcul toate lucrurile pentru o organizare perfectă și
          te-ai gândit la cele mai mici detalii. Ai bifat locația, invitații,
          cel mai cool playlist, ținuta (out of ordinary), meniul și tortul.
          Totul pare pregătit și totuși ar mai fi ceva ce s-ar potrivi.
        </p>
        <Link
          to="/contact"
          className=" flex justify-center bg-gold  hover:bg-black  hover:text-gold text-black hover:border-solid border-4 border-gold  font-bold py-2 px-8 my-8 rounded-full w-1/6"
        >
          Cere Oferta
        </Link>
      </div>
      <CustomSlidePB />
    </div>
  );
};
