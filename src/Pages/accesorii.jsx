import React from "react";

const Accesorii = () => {
  return (
    <div>
      <div className="bg-accesorii w-80v h-80v  bg-center bg-cover bg-no-repeat">
        <h1>ACCESORII & PERSONALIZARE</h1>
      </div>
      <div className="flex bg-gradient-to-b from-black to-red-700">
        <article className="text-white w-40v bg-blue">
          <h1>ACCESORII ȘI PROPSURI</h1>
          <p>
            Fiecare pachet de petrecere vine cu accesorii de party sau adaptate
            ocaziei evenimentului, cum este cazul în celor de nuntă sau de
            botez. Sunt accesorii de calitate premium, buze și mustăți
            volumetrice, ochelari, pălării, peruci și obiecte funny care vor
            înveseli și mai mult atmosfera de la cabina foto! Dacă ai o tematică
            anume, putem pune la dispoziție și pachete de accesorii premium
            tematice.
          </p>
        </article>
        <div className="w-50v">
          <img src={require("../images/props.jpg").default} alt="props"></img>
        </div>
      </div>
      <div className="w-52 h-40v bg-gradient-to-b from-black via-gray-700 to-gray-500 text-gold">
        CEVA
      </div>
    </div>
  );
};

export default Accesorii;
