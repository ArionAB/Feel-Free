import React from "react";
import { Link } from "react-router-dom";
import { CustomSlidePB } from "../Components/custom-slide-pb";
import { YoutubeEmbed } from "../Components/YoutubeEmbed";

export const Photobooth = () => {
  return (
    <div>
      <div className=" overflow-hidden pb-96 relative h-0">
        <YoutubeEmbed embedId="tKSsJeCzV3Y?autoplay=1" />
      </div>

      <div className="flex">
        <div className="mr-8 bg-white text-justify w-40v h-60v border-2 border-gold">
          <h1 className="bg-gold pl-8 py-2 mb-7">Informatii</h1>
          <p className="px-8 mb-5">
            <b>Cabina foto OGLINDĂ</b> este un produs de ultimă generație,
            oferind o interfață mult mai interactivă și foarte atractivă. Se
            încadrează perfect pentru orice tip de eveniment datorită aspectului
            elegant. Experiența utilizatorului este una deosebită prin
            utilizarea touch-screen-ului direct pe suprafața oglinzii, prin
            animațiile colorate dar şi prin realizarea fotografiilor de o
            calitate superioara.
          </p>
          <p className="px-8 mb-5">
            <b>Cutia</b> cu un design unic, realizată cu maxim de atenție din
            placaj mesteacan acoperit cu PVC striat negru. Toate componentele
            cabinei foto sunt atent asamblate în interiorul carcasei. Cutiile
            sunt executate la standarde ridicate, toate componentele folosite
            fiind importate din Germania.
          </p>
          <p className="px-8 mb-5">
            <b>Geam oglinda two way Germania</b> cu grosimea de 6mm, securizat,
            acesta oferind o claritate maximă de 100% și nu influentează
            calitatea fotografiilor.
          </p>
        </div>
        <div className="bg-white w-40v h-60v border-2 border-gold overflow-hidden">
          <h1 className="bg-gold pl-8 py-2 ">FOTO</h1>
          <div className="h-full w-full">
            <img
              className="w-full h-full"
              src={require("../images/magic-mirror.jpg").default}
              alt="photobooth"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-30v  mt-10 ">
        <div className="flex flex-col border-2 border-gold bg-white">
          <h1 className="bg-gold pl-8 py-2">Ecran</h1>
          <p className="px-8 mb-5 text-justify py-5">
            Touch IR multipunct de 65 inch de ultima generație. Ecranul este un
            display LED full HD 108 cm. Imaginile arată mai bine datorită
            culorilor și luminozității realiste.
          </p>
        </div>

        <div className="flex flex-col h-30v ml-8 border-2 border-gold bg-white">
          <h1 className="bg-gold pl-8 py-2">Aparat FOTO</h1>
          <p className="px-8 mb-5 text-justify py-5">
            Camera foto Nikon D3500 este o cameră foto profesională DSLR
            însoțita de un obiectiv cu zoom. Camera foto realizează fotografii
            de o calitate superioară.
          </p>
        </div>

        <div className="flex flex-col h-30v ml-8 border-2 border-gold bg-white">
          <h1 className="bg-gold pl-8 py-2">Blitz profesional studio</h1>
          <p className="px-8 mb-5 text-justify py-5">
            Folosim un blitz profesional care este alegerea ideală pentru o
            cabină foto sigură și vine însoțit de umbrelă pentru ca lumina să
            fie perfectă.
          </p>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="mr-8 bg-white text-justify w-40v h-60v overflow-hidden border-2 border-gold">
          <h1 className="bg-gold pl-8 py-2">Foto</h1>
          <div className="h-full w-full ">
            <img
              className="w-full h-full"
              src={require("../images/magic-mirror2.jpg").default}
              alt="photobooth"
            ></img>
          </div>
        </div>
        <div className=" bg-white text-justify w-40v h-60v border-2 border-gold">
          <h1 className="bg-gold pl-8 py-2 mb-7">Informatii</h1>
          <p className="px-8 mb-5">
            <b>Ramă decorativă.</b>
          </p>
          <p className="px-8 mb-5">
            <b>Soft profesional</b> cabină foto cu animații în limba română și
            engleză care oferă posibilitatea semnării fotografiei, partajarea pe
            rețelele de socializare, green screen, trimitere de sms-uri cu link
            pentru descărcarea fotografiilor, QR code. Invitații pot să lase
            mesaje video pentru sarbatoriți/miri/organizatori. Softul are
            posibiliatea să realizeze gif-uri cu overlay (logo-ul
            dumneavoastră). Puteți realiza template-uri pe loc simplu și rapid.
            Semnatura fotografii.
          </p>
          <p className="px-8 mb-5">
            <b>Imprimantă profesională</b> Mitsubishi D80 sau DNP DS-RX1
            printează fotografii de cea mai bună calitate la dimensiunea 5×15
            cm, 10×15 cm dar si 20×15 cm. Viteza de printare este redusă, mai
            exact de doar 12 secunde pentru o fotografie. Fotografiile pot fi
            customizate astfel încât pe o singură fotografie să fie afişate
            între 1 şi 4 cadre, se pot seta sigle, logo-uri, mesaje text care să
            apară pe fiecare fotografie în parte.
          </p>
        </div>
      </div>
      <div className="bg-darkGrey pb-2 px-6">
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
      <div className="bg-darkGrey pb-2 px-6">
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
      <div className="bg-darkGrey pb-2 px-6">
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
