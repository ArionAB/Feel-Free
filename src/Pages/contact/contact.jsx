import React from "react";

import "../../index.css";

export const Contact = () => {
  return (
    <div class="flex-col font-bold text-red-900">
      <h1 class="flex text-6xl mt-12">CONTACT</h1>
      <div class="flex">
        <div class="flex-col">
          <h2 class="flex mt-12">Ne-ar face plăcere să vorbim cu tine!</h2>
          <h2 class="flex mt-3">Formular cerere ofertă</h2>
          <form class="w-4/5">
            <article class="flex">
              <article-left class="flex flex-col items-start">
                <label class="flex flex-col items-start">
                  Nume:
                  <input
                    type="text"
                    name="nume"
                    placeholder="Nume si prenume"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Email:
                  <input type="email" name="email" placeholder="Email"></input>
                </label>
                <label class="flex flex-col items-start">
                  Data evenimentului:
                  <input
                    type="date"
                    name="data"
                    placeholder="Alege data"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Tip eveniment:
                  <input
                    type="text"
                    name="tip"
                    placeholder="eg: Nunta, Botez, etc"
                  ></input>
                </label>
              </article-left>
              <article-right class="flex flex-col items-start">
                <label class="flex flex-col items-start">
                  Telefon:
                  <input
                    type="number"
                    name="telefon"
                    placeholder="Telefon"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Locație:
                  <input
                    type="text"
                    name="locatie"
                    placeholder="Locatie"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Număr de ore:
                  <input
                    type="text"
                    name="ore"
                    placeholder="Numar de ore"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Număr invitați:
                  <input
                    type="text"
                    name="invitati"
                    placeholder="Numar de invitati"
                  ></input>
                </label>
              </article-right>
            </article>
            <label class="flex flex-col items-start">
              Mesajul tău
              <textarea
                cols="100"
                rows="7"
                placeholder="Mesajul tau..."
              ></textarea>
            </label>
            <button type="submit">Trimite</button>
          </form>
        </div>
        <div class="mt-12">
          <h1>Date contact</h1>
          <p>0752248261</p>
          <p>marian.raul@yahoo.com</p>
          <div>
            <p>Program:</p>
            <p>Luni-Vineri 9:00-18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
