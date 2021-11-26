import React from "react";

import "../../index.css";

export const Contact = () => {
  return (
    <div class="flex-col font-bold text-gold bg-footer2 bg-no-repeat bg-cover bg-center pl-6">
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
                class="text-xl p-2 mt-3 mb-3 w-full h-28"
                // cols="82"
                // rows="7"
                placeholder="Mesajul tau..."
              ></textarea>
            </label>
            <button
              class="flex justify-center bg-gold  hover:bg-black  hover:text-gold text-black font-bold py-2 px-4 my-8 rounded-full w-1/4"
              type="submit"
            >
              Trimite
            </button>
          </form>
        </div>
        <div class="mt-12 flex flex-col justify-between h-48">
          <h1 class="text-4xl">Date contact</h1>
          <div class="text-xl font-bold ">
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0752248261
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              marian.raul@yahoo.com
            </p>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>Luni-Vineri 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
