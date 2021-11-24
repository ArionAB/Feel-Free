import React from "react";

import "../../index.css";

export const Contact = () => {
  return (
    <div class="flex-col font-bold text-pink box-border">
      <h1 class="flex text-6xl mt-12">CONTACT</h1>
      <div class="flex">
        <div class="flex-col">
          <h2 class="flex mt-12 text-3xl">
            Ne-ar face plăcere să vorbim cu tine!
          </h2>
          <h2 class="flex mt-3 text-2xl">Formular cerere ofertă</h2>
          <form class="w-5/5 mr-24">
            <article class="flex">
              <article-left class="flex flex-col items-start w-96 text-xl mr-6">
                <label class="flex flex-col items-start mt-3 ">
                  Nume:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="nume"
                    placeholder="Nume si prenume"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Email:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="email"
                    name="email"
                    placeholder="Email"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Data evenimentului:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="date"
                    name="data"
                    placeholder="Alege data"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Tip eveniment:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="tip"
                    placeholder="eg: Nunta, Botez, etc"
                  ></input>
                </label>
              </article-left>
              <article-right class="flex flex-col items-start w-96 text-xl">
                <label class="flex flex-col items-start mt-3">
                  Telefon:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="number"
                    name="telefon"
                    placeholder="Telefon"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Locație:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="locatie"
                    placeholder="Locatie"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Număr de ore:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="ore"
                    placeholder="Numar de ore"
                  ></input>
                </label>
                <label class="flex flex-col items-start">
                  Număr invitați:
                  <input
                    class="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="invitati"
                    placeholder="Numar de invitati"
                  ></input>
                </label>
              </article-right>
            </article>
            <label class="flex flex-col items-start text-xl">
              Mesajul tău
              <textarea
                class="text-xl p-2 mt-3 mb-3"
                cols="82"
                rows="7"
                placeholder="Mesajul tau..."
              ></textarea>
            </label>
            <button
              class="bg-black hover:bg-pink text-white font-bold py-2 px-4 rounded-full w-1/4"
              type="submit"
            >
              Trimite
            </button>
          </form>
        </div>
        <div class="mt-12 flex flex-col justify-between h-48">
          <h1 class="text-4xl">Date contact</h1>
          <div class="text-xl font-bold ">
            <p>0752248261</p>
            <p>marian.raul@yahoo.com</p>
            <div>
              <p>Program:</p>
              <p>Luni-Vineri 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
