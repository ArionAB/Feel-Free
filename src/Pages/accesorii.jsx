import React from "react";
import AccSlide from "../Components/accesorii-slide";
import { PhotoLoop } from "../Components/photo-loop";
import { PropsSlide } from "../Components/props-slide";

export const Accesorii = () => {
  return (
    <div className="overflow-hidden">
      <div className="hidden bg-center bg-no-repeat bg-cover border-b-8 bg-accesorii w-80v h-80v border-gold"></div>
      <div className="flex-col lg:flex lg:flex-row">
        <article className="text-white bg-opacity-100 lg:w-40v bg-darkGrey">
          <h1 className="p-8 text-3xl text-gold">DESIGN & PERSONALIZARE</h1>
          <p className="px-8 sm:text-justify">
            Personalizate cu textele și culorile voastre și potrivite cu
            fundalurile de fotografiere, poți alege între formatele tip
            photostrip (5*15 cm), fotografie landscape (15*10 cm) sau fotografie
            pătrată (15*15/ 13*13 cm), cu una și până la patru fotografii
            incluse într-un layout. În plus putem adăuga filtre și efecte
            speciale peste fotografii, pentru modele deosebite. Sigur vei găsi
            cel puțin un model de care să te îndrăgostești în colecția noastră
            de tematici și designuri pentru fotografii. Nouă ne plac la nebunie
            toate! Consultanții noștri îți pot da și mai multe opțiuni din care
            să alegi. Și dacă ai o tematică deosebită ne bucurăm oricând să
            putem face împreună un concept nou pentru modelele fotografiilor!
          </p>
        </article>
        <div className="overflow-hidden  h-30v sm:h-40v lg:w-40v">
          <AccSlide />
        </div>
      </div>
      <div className=" flex-col-reverse lg:flex lg:flex-row">
        <div className="overflow-hidden h-30v sm:h-40v lg:w-40v">
          <PropsSlide />
        </div>
        <article className="text-white bg-opacity-100 bg-darkGrey lg:w-40v">
          <h1 className="p-8 text-3xl text-gold">ACCESORII ȘI PROPSURI</h1>
          <p className="px-8 text-justify">
            Fiecare pachet de petrecere vine cu accesorii de party sau adaptate
            ocaziei evenimentului, cum este cazul în celor de nuntă sau de
            botez. Sunt accesorii de calitate premium, buze și mustăți
            volumetrice, ochelari, pălării, peruci și obiecte funny care vor
            înveseli și mai mult atmosfera de la cabina foto! Dacă ai o tematică
            anume, putem pune la dispoziție și pachete de accesorii premium
            tematice.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Accesorii;
