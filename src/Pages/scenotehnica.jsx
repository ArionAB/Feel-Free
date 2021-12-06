import React from "react";
import fum from "../images/fum.jpg";
import laser from "../images/laser.jpg";
import schela from "../images/schela-lumini.jpg";
import lumini from "../images/lumini2.jfif";
import { YoutubeEmbed } from "../Components/YoutubeEmbed";
import { CustomSlidePB } from "../Components/custom-slide-pb";

const Scenotehnica = () => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  const YellowArrow = (
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
  );
  return (
    <div className="bg-darkGrey bg-cover  h-full ">
      <h1 className="flex justify-center text-white text-6xl pt-8  mb-12 border-t-2 border-gold">
        Servicii sceno-tehnice
      </h1>
      <div className="flex">
        <div className="bg-white w-40v h-60v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Cameo Hydrabeam 400 RGBW</h1>
          <img
            className="h-auto w-auto"
            src={require("../images/cameo-hydrabeam.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
        <div className="bg-white w-40v h-60v ml-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Cameo Hydrabeam 400 RGBW </b>- sistem de lumini compus din 4
            moving-head-uri cu mișcare foarte rapidă, controlabile individual.
            Acestea sunt echipate cu LED-uri Cree de intensitate mare de 10W,
            care oferă o rază îngustă cu unghi de 11°. Moving-head-urile au o
            rotație orizontală de până la 540°, și verticală de 270° și sunt
            răcite cu ventilatoare cu zgomot extrem de redus. Sistemul poate fi
            controlat prin DMX cu 6-10-19 și 32 de canale, și poate fi folosit
            în mod master, slave sau standalone. 16 programe de miscare
            automatizate, si funcție stroboscop cu 30 de flash-uri / secundă.
            Prin control DMX, se pot selecta 6 variante de culoare a razei
            luminoase. Carcasă de metal / ABS, cu 6 butoane de control și
            display LED. Se alimentează la 100-240 v, și are un consum de putere
            redus de 100 W. Se livrează cu flanșă de montare pe trepied și 2
            cleme pentru montare pe grindă.
          </p>
          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}4 moving-head-uri RGBW cu mișcare foarte rapid
            </li>
            <li className="flex">
              {arrow}controlabile individual prin DMX, 16 programe de miscare,
              funcție strobe
            </li>
            <li className="flex bg-lightGrey">
              {arrow}rază îngustă de lumină cu unghi de 11°, LED-uri Cree de 10W
            </li>
          </ul>
        </div>
      </div>
      <div className=" overflow-hidden pb-96 relative h-0  ">
        <YoutubeEmbed embedId="c2tkXBbGLMY" />
      </div>
      <div className="flex mt-8">
        <div className="bg-white w-40v h-70v mr-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Athletic DJ-6R150</b>, stand de lucru pentru DJ și stativ de
            lumini cu înălțime reglabilă si transversală decotruss
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}înălțime suport lumini: 215 - 246 cm
            </li>
            <li className="flex">{arrow}înălțime pupitru: 93 cm</li>
            <li className="flex bg-lightGrey">{arrow}lățime pupitru: 182 cm</li>
            <li className="flex">{arrow}adâncime pupitru : 32 cm</li>
            <li className="flex bg-lightGrey">{arrow}construcție de oțel</li>
            <li className="flex">{arrow}culoarea neagră</li>
            <li className="flex bg-lightGrey">{arrow}greutate: 26 kg</li>
          </ul>
        </div>
        <div className="bg-white w-40v h-70v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Athletic DJ-6R150</h1>
          <img
            className="object-fit"
            src={require("../images/athletic-dj.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="bg-white w-40v h-60v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Cameo WOOKIE 400 RGB</h1>
          <img
            className="h-auto w-auto"
            src={require("../images/cameo-wookie.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
        <div className="bg-white w-40v h-60v ml-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Cameo WOOKIE 400 RGB </b>- efect de lumini laser ce oferă
            proiecții de raze laser în combinații de culori în spectru RGB
            (roșu, verde, albastru), la o putere de ieșire de 400 mW. Este un
            efect de lumini de tip Animation Laser cu surse de tip DPSS și
            diodă, care produc raze de 3 mm grosime, cu o divergență maximă de 2
            mrad. Oferă animații laser foarte vizibile și precise și 32 de
            preseturi. Este echipat cu motoare stepper de mare viteză de 5 Kpps,
            cu un unghi de scanare de 60°. Este controlabil via DMX prin
            conectorii cu 3 pini pentru control în moduri cu 3 și 9 canale. Are
            un microfon incorporat cu sensibilitate ajustabilă pentru control
            prin sunet. Poate opera în mod master, slave sau standalone. Carcasa
            solidă din aluminiu, este prevăzută cu un key switch pentru
            prevenirea utilizării neautorizate. Are un display luminos și 4
            taste pentru control manual, mufă de alimentare IEC, și montură
            reglabilă pentru prindere pe diverse suprafețe. Laserele din seria
            Wookie sunt controlabile și prin telecomanda cu infra roșu, inclusă.
          </p>
          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}Tipul produsului: Laser
            </li>
            <li className="flex">
              {arrow}Spectru de culori: RGB (roșu, verde, albastru)
            </li>
            <li className="flex bg-lightGrey">{arrow}Putere totală: 400mW</li>
            <li className="flex ">
              {arrow}Lungimea de undă: 447 nm, 650 nm, 532 nm
            </li>
            <li className="flex bg-lightGrey">
              {arrow}Specificațiile razei: aprox. 3 mm / divergență 2 mrad
            </li>
          </ul>
        </div>
      </div>
      <div className=" overflow-hidden pb-96 relative h-0  ">
        <YoutubeEmbed embedId="shnS5Gk709c" />
      </div>
      <div className="flex mt-8">
        <div className="bg-white w-40v h-70v mr-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Eurolite NSF-250 LED DMX</b>,- mașină de fum cu iluminare LED în
            spectru RGB, controlată prin telecomandă wireless sau prin interfața
            DMX 512, cu posibilitate de emisie de fum orizontală sau verticală.
            Beneficiază și de un buton adițional pentru control manual. Oferă
            schimbare de lumină automată sau continuă a LED-urilor și efect de
            tip strobe. Panou de control LED cu 4 butoane de operare. Este
            echipată cu senzor de lichid scăzut optoelectronic, detașabil,
            carcasă metalică prevăzută cu mâner.
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}Număr de LED-uri: 9 (3 x roșu, 3 x verde, 3 x albastru)
            </li>
            <li className="flex">{arrow}Consum de lichid: 70 ml/min.</li>
            <li className="flex bg-lightGrey">
              {arrow}Output: approx.800 m³/min.
            </li>
            <li className="flex">{arrow}Tipul LED-urilor: 3 W</li>
            <li className="flex bg-lightGrey">
              {arrow}Consum de putere: 1080 W
            </li>
            <li className="flex">{arrow}Voltaj de operare: 230 V</li>
          </ul>
        </div>
        <div className="bg-white w-40v h-70v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Eurolite NSF-250 LED DMX</h1>
          <img
            className="object-fit"
            src={require("../images/eurolite-nsf.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
      </div>
      <div className=" overflow-hidden pb-96 relative h-0  ">
        <YoutubeEmbed embedId="WOyDVz53BhU" />
      </div>

      <div className="flex mt-8">
        <div className="bg-white w-40v h-60v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Cameo Root PAR 4</h1>
          <img
            className="h-auto w-auto"
            src={require("../images/cameo-root.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
        <div className="bg-white w-40v h-60v ml-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Cameo Root PAR 4 </b>- Soluția optimă pentru efecte de iluminare
            sofisticate, profesionale și, de asemenea, ideală pentru locații de
            evenimente mai mici. Acest FLAT PAR are caracteristici inteligente,
            de obicei găsite doar pe dispozitive profesionale de calitate
            înaltă. În mod excepțional în clasa sa, acesta oferă funcții
            premium, cum ar fi un display OLED, delay patentat EZchase DMX și
            conexiuni de alimentare compatibile cu PowerCON. Acesta acceptă
            chiar și W-DMX prin intermediul unui stick iDMX opțional.{" "}
          </p>
          <p className="px-8 text-justify mb-4">
            Spectacole de lumini mari și vibrante pot fi create prin legarea
            daisy-chain a mai multor dispozitive. Posibilitățile dvs. creative
            sunt nelimitate. Semnalul DMX și intrarea / ieșirea de putere sunt
            conectate prin fiecare unitate. Acest lucru vă permite să exploatați
            pe deplin potențialul unic al caracteristicii de delay EXchase DMX
            patentat, să creați modele de lumină palpitante și schimbări de
            culoare cu o programare minimă.
          </p>
          <p className="px-8 text-justify mb-4">
            Culorile și setările sunt ușor reglabile fără telecomandă prin
            intermediul a patru butoane și a afișajului OLED. Controlul unității
            prin DMX în modul master-slave sau standalone este posibil. Un
            microfon încorporat pentru sincronizarea prin sunet este integrat. O
            telecomandă IR este, de asemenea, disponibilă opțional ca accesoriu.
          </p>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="bg-white w-40v h-70v mr-8 overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-8 mb-4">Specificatii Tehnice</h1>
          <p className="px-8 text-justify mb-4">
            <b>Eurolite SD-201 DMX</b>- mașină de bule controlabilă DMX,
            echipată cu două discuri pentru bule, cu adresare și setare prin
            switch-uri dip, cu operare permanentă sau controlată prin
            telecomandă. Controlul DMX se poate realiza prin orice controler DMX
            cu 2 canale.
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}Voltaj de operare: 230 V
            </li>
            <li className="flex">{arrow}Consum de putere: 40 W</li>
            <li className="flex bg-lightGrey">
              {arrow}Canale de control DMX: 2
            </li>
            <li className="flex">{arrow}Conector DMX512: XLR cu 3 pini</li>
            <li className="flex bg-lightGrey">
              {arrow}Capacitate rezervor: 1.8 l
            </li>
          </ul>
        </div>
        <div className="bg-white w-40v h-70v overflow-hidden gold-border">
          <h1 className="bg-gold py-2 px-4">Eurolite SD-201 DMX</h1>
          <img
            className="object-fit"
            src={require("../images/eurolite-sd.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
      </div>
      <CustomSlidePB />
      <div className="text-white text-xl font-medium text-justify w-60v m-auto mt-16">
        <p className="mb-6">
          Prezenta efectelor de lumini din cadrul oricarui eveniment este foarte
          importanta. Avand si un rol decorativ, lumina contribuie la
          imbunatatirea oricarui spatiu ales pentru desfasurarea evenimentului,
          incalzind sau racorind atmosfera.
        </p>
        <p className="mb-6">
          <span className="text-gold">Feel Free Events</span> va ofera
          consiliere si suport tehnic pentru orice tip de eveniment.
          Echipamentele de lumini oferite fac parte din cele mai cunoscute
          marci. In cadrul oricarui eveniment atmosfera ocupa primul loc, de
          aceea este important ca spatiul sa fie pus in valoare prin intermediul
          luminilor dinamice.
        </p>
        <p className="mb-6">
          Efectele de lumini sunt alese in functie de tipologia evenimentului
          astfel luminile arhitecturale sunt perfecte in cadrul evenimentelor
          private (nunti, botezuri, aniversari) oferindu-va o atmosfera de basm
          datorita luminilor proiectate pe peretii laterali ai incaperii. Veti
          oferi publicului dvs o seara speciala, relaxanta si plina de culori.
          <span className="text-gold"> Feel Free Events</span> va lasa sa
          alegeti dvs dintr-o gama foarte variata de sisteme lumini cromatice
          pentru a colora momentul din viata dvs dupa bunul plac. Show light
          (animatie) este nelipsit de la aproape orice eveniment, lumini
          folosite in special in cadrul concertelor sau spectacolelor. Echipa de
          profesionisti asigura si utilizarea de culori reprezentative pentru
          diverse organizatii, institutii sau companii.
        </p>
      </div>
      <div className="text-white w-60v m-auto ">
        <h3 className="text-gold font-semibold text-xl mt-16 mb-8">
          Feel Free Events dispune de urmatoarele echipamente de sceno-tehnica:
        </h3>
        <div className="flex mb-4">
          {YellowArrow}
          <p>Cameo Hydrabeam 400 RGBW</p>
        </div>
        <div className="flex mb-4">
          {YellowArrow}
          <p>Athletic DJ-6R150</p>
        </div>
        <div className="flex mb-4">
          {YellowArrow}
          <p>Cameo WOOKIE 400 RGB</p>
        </div>
        <div className="flex mb-4 ">
          {YellowArrow}
          <p>Eurolite NSF-250 LED DMX</p>
        </div>
        <div className="flex mb-4">
          {YellowArrow}
          <p>Cameo Root PAR 4</p>
        </div>
        <div className="flex mb-4 pb-12">
          {YellowArrow}
          <p>Eurolite SD-201 DMX</p>
        </div>
      </div>
    </div>
  );
};

export default Scenotehnica;
