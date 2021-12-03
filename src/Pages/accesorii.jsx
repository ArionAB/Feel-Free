import React from "react";
import AccSlide from "../Components/accesorii-slide";
import { PhotoLoop } from "../Components/photo-loop";
import { PropsSlide } from "../Components/props-slide";

const Accesorii = () => {
  return (
    <div>
      <div className="bg-accesorii w-80v h-80v  bg-center bg-cover bg-no-repeat border-b-8 border-gold"></div>
      <div className="flex ">
        <article className="text-white w-40v bg-gradient-to-b from-black via-third to-black bg-opacity-100">
          <h1 className="text-gold text-3xl p-8">DESIGN & PERSONALIZARE</h1>
          <p className="text-justify px-8">
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
        <div className="w-40v">
          <AccSlide />
        </div>
      </div>
      <div className="flex ">
        <div className="w-40v">
          <PropsSlide />
        </div>
        <article className="text-white w-40v bg-gradient-to-b from-black via-third to-black bg-opacity-100">
          <h1 className="text-gold text-3xl p-8">ACCESORII ȘI PROPSURI</h1>
          <p className="text-justify px-8">
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
