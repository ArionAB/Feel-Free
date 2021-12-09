import React from "react";

import { YoutubeEmbed } from "../Components/YoutubeEmbed";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 "
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

const Sonorizare = () => {
  return (
    <>
      <div className="flex items-center justify-center h-20 py-20 text-xl text-white border-t-2 md:py-0 bg-darkGrey border-gold ">
        <p>
          Sonorizari evenimente si inchirieri sisteme audio pentru sonorizari
          evenimente de orice gen – prezentari, conferinte, nunti, botezuri,
          petreceri etc.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="overflow-hidden bg-white lg:w-40v h-70v gold-border">
          <h1 className="px-4 py-2 bg-gold">2x Bose F1 Model 812</h1>
          <img
            className="w-auto h-auto"
            src={require("../images/bose-f1.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
        <div className="overflow-scroll bg-white lg:ml-8 lg:w-40v h-70v gold-border">
          <h1 className="px-8 py-2 mb-4 bg-gold">Specificatii Tehnice</h1>
          <p className="px-8 mb-4 text-justify">
            <b>Bose F1 Model 812</b>, boxă activă de tip șir vertical, prin
            mișcarea modulelor de înalte/medii permite crearea de diferite
            modele de acoperire verticală, iar sistemul își schimbă automat
            egalizarea pentru a menține balansul tonal optim pentru fiecare
            model de acoperire. Tehnologia FLEX array are 4 modele predefinite
            de acoperire, “Drept”, “C”, “J” sau “J inversat” care permit
            multiple aplicații. Indiferent dacă veți cânta de la nivelul
            podelei, pe o scenă sau în fața unui public dispus pe o suprafață
            înclinată de tip amfiteatru ori tribune sportive, acum puteți adapta
            sistemul dumneavoastră astfel încât să se potrivească încăperii.
          </p>
          <ul className="px-8">
            <li className="flex bg-lightGrey">{arrow}1 x woofer de 12”</li>
            <li className="flex">
              {arrow}șir de 8 x drivere înalte/medii, fiecare de 2.25"
            </li>
            <li className="flex bg-lightGrey">{arrow}amplificare de 1000W</li>
            <li className="flex">
              {arrow}2 canale de intrare cu control independent al volumului
            </li>
            <li className="flex bg-lightGrey">
              {arrow}comutator pentru nivel de linie sau microfon pe Canalul 1
            </li>
            <li className="flex">
              {arrow}acoperire standard: 100° orizontal x 40° vertical (poziția
              C)
            </li>
            <li className="flex bg-lightGrey">
              {arrow}nivel maxim de presiune sonoră: 132 dB SPL
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-8 lg:flex-row">
        <div className="overflow-scroll bg-white lg:mr-8 lg:w-40v h-70v gold-border">
          <h1 className="px-8 py-2 mb-4 bg-gold">Specificatii Tehnice</h1>
          <p className="px-8 mb-4 text-justify">
            <b>Subwoofer activ</b>, compact, ideal pentru extinderea
            frecvențelor joase într-un sistem Bose F1. Standul de mondtare
            pentru satelitul Bose F1 Model 812 este integrat chiar în corpul
            subwoofer-ului, ca să-l aveți întotdeauna la îndemână, repede și
            simplu de instalat. Standul include canale pentru cabluri, pentru a
            masca firele.
          </p>
          <p className="px-8 mb-4 text-justify">
            EQ-ul pe ieșire setează ieșirea subwoofer-ului F1 pe un filtru
            trece-sus sau full-range, ceea ce permite selectarea ușoară a
            frecvenței de crossover atunci când este folosit cu o boxă
            principală.
          </p>
          <ul className="px-8">
            <li className="flex bg-lightGrey">{arrow}amplificare: 1000W</li>
            <li className="flex">{arrow}2 x difuzoare de cursă mare de 10”"</li>
            <li className="flex bg-lightGrey">
              {arrow}nivel maxim de presiune sonoră: 130 dB
            </li>
            <li className="flex">{arrow}plajă de frecvențe:</li>
            <li className="flex bg-lightGrey">
              {arrow}la -3 db: 40 Hz – 250 Hz
            </li>
            <li className="flex">{arrow}la -10 dB: 38 Hz – 250 Hz</li>
          </ul>
        </div>
        <div className="overflow-hidden bg-white lg:w-40v h-70v gold-border">
          <h1 className="px-4 py-2 bg-gold">2x Bose F1 Sub</h1>
          <img
            className="object-fit"
            src={require("../images/bose-f1-sub.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
      </div>
      <div className="relative h-0 overflow-hidden pb-96">
        <YoutubeEmbed embedId="vKDjIgjcFhA" />
      </div>
      <div className="flex flex-col mt-8 lg:flex-row">
        <div className="overflow-hidden bg-white lg:w-40v h-70v gold-border">
          <h1 className="px-4 py-2 mb-8 bg-gold">Pioneer DJ DDJ-1000</h1>
          <img
            src={require("../images/pioneer-dj.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>

        <div className="overflow-scroll bg-white lg:ml-8 lg:w-40v h-70v gold-border">
          <h1 className="px-8 py-2 mb-4 bg-gold">Specificatii Tehnice</h1>
          <p className="px-8 mb-4 text-justify">
            <b>Pioneer DDJ-1000 - Controler DJ cu 4 canale </b> cu mixer
            standalone și joguri moștenite direct de la CDJ2000NXS2. Mixerul
            dispune de o mare parte din funcțiile unui mixer DJM900NXS2, iar în
            interior se găsesc două plăci de sunet pentru posibilitate de b2b
            rapid împreună cu un alt DJ. Cea mai mare schimbare de până acum
            sunt ecranele din interiorul jogurilor. Sunt full color și afișează
            toți parametrii de care ai nevoie pentru a nu mai fi atent la
            laptop. Oferă waveformuri, cuepointuri, bpm, durata piesei, poziția
            piesei, key, artwork deck-urile active, etc. Pe fiecare deck sunt
            deja clasicele paduri RGB, 8 la număr pentru fiecare parte. Mixerul
            are ecran pentru Beat FX și efectele proprietare Sound Color FX.
            Microfonul are secțiune separată cu egalizator, sampler-ul are
            propriul knob, iar vu-metrele masterului apar alături de knob-ul
            principal. Permite sincronizarea key-urilor, funcția Quantize, și
            posibilitatea de accesare a librăriei de muzică independent pe
            fiecare deck. La capitolul conectivitate oferă conectori pentru boxe
            cu XLR sau RCA, compatibilitate DVS, 2 intrări de microfon cu XLR
            combo și jack de 6.3 mm și cele 2 porturi USB.
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}4 canale cu mixer standalone
            </li>
            <li className="flex">{arrow}2 joguri</li>
            <li className="flex bg-lightGrey">{arrow}2 plăci de sunet</li>
            <li className="flex">{arrow}Plaja de frecvente: 20 - 20.000 Hz</li>
            <li className="flex bg-lightGrey">
              {arrow}2 ecrane full color în interiorul jogurilor
            </li>
          </ul>
        </div>
      </div>
      <div className="relative h-0 overflow-hidden pb-96">
        <YoutubeEmbed embedId="hqlX5o5oxn0" />
      </div>
      <div className="flex flex-col mt-8 lg:flex-row">
        <div className="overflow-scroll bg-white lg:mr-8 lg:w-40v h-70v gold-border">
          <h1 className="px-8 py-2 mb-4 bg-gold">Specificatii Tehnice</h1>
          <p className="px-8 mb-4 text-justify">
            <b>U306 HHD -</b>, Set wireless cu microfon de mâna, sistem
            Diversity UHF cu tehnologie FM cu 12 canale, recomandat pentru
            aplicații semi-profesionale:
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}bandă UHF: 655 - 679 MHz
            </li>
            <li className="flex">
              {arrow}rază de operare 100m în câmp deschis
            </li>
            <li className="flex bg-lightGrey">
              {arrow}permite utilizarea a 6 sisteme simultane
            </li>
            <li className="flex">
              {arrow}sincronizare transmițător/receptor prin infraroșu, ASC
            </li>
            <li className="flex bg-lightGrey">{arrow}squelch pilot tone</li>
            <li className="flex">
              {arrow}capsulele de microfon de la U500 sunt compatibile cu
              transmițătoarele U300
            </li>
            <li className="flex bg-lightGrey">
              {arrow}plajă de frecvențe audio (+/-3 dB): 50 Hz - 16 kHz
            </li>
            <li className="flex">{arrow}microfon dinamic, cardioid</li>
            <li className="flex bg-lightGrey">
              {arrow}transmițător cu putere de 10 mW, alimentare cu 2 x baterii
              AA, operare: aproximativ 10 ore
            </li>
            <li className="flex">{arrow}ieșire XLR și jack pentru receptor</li>
          </ul>
        </div>
        <div className="overflow-hidden bg-white lg:w-40v h-70v gold-border">
          <h1 className="px-4 py-2 bg-gold">LD Systems U306 HHD</h1>
          <img
            className="object-fit"
            src={require("../images/ld-systems.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>
      </div>
      <div className="flex flex-col mt-8 lg:flex-row">
        <div className="overflow-hidden bg-white lg:w-40v h-70v gold-border">
          <h1 className="px-4 py-2 mb-8 bg-gold">Pioneer DJ HDJ-X10</h1>
          <img
            className=""
            src={require("../images/pioneer-dj-casti.jpg").default}
            alt="Boxe Bose"
          ></img>
        </div>

        <div className="overflow-scroll bg-white lg:ml-8 lg:w-40v h-70v gold-border">
          <h1 className="px-8 py-2 mb-4 bg-gold">Specificatii Tehnice</h1>
          <p className="px-8 mb-4 text-justify">
            <b>HDJ-X10 - </b> căști profesionale de monitorizare DJ, dinamice,
            echipate cu drivere de 50mm ce oferă un sunet audio de o foarte
            înaltă calitate și permit o monitorizare clară chiar și la volum
            ridicat. Beneficiază de cablu detașabil, ce are o structură gândită
            în așa fel încât separarea canalelor să fie la nivel superior. Se
            livrează cu un cablu spiralat de 1.2m și un cablu drept 1.6m. Cupele
            sunt rotative și pliabile, și permit monitorizare cu o singură cască
            și un transport și depozitare ușoare. Includ adaptor la jack stereo
            6.3 mm și husă pentru transport.
          </p>

          <ul className="px-8">
            <li className="flex bg-lightGrey">
              {arrow}Diametru drivere: 50 mm
            </li>
            <li className="flex">{arrow}Gama de frecvențe: 5 - 40,000 Hz</li>
            <li className="flex bg-lightGrey">
              {arrow}Putere de intrare maxima: 3500 mW
            </li>
            <li className="flex">{arrow}SPL: 106 dB</li>
            <li className="flex bg-lightGrey">{arrow}Impedanța: 32 Ω</li>
            <li className="flex ">
              {arrow}Cablu: spiralat 1.2m și drept 1.6m, detașabil cu mini XLR
            </li>
            <li className="flex bg-lightGrey">
              {arrow}Conector: jack TRS 3.5mm
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sonorizare;
