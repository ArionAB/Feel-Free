import React from "react";
import clsx from "clsx";
import emailjs, { send } from "emailjs-com";
import { useState, useRef } from "react";

import "../../index.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    nume: "",
    email: "",
    data: "",
    tip: "",
    number: "",
    locatie: "",
    ore: "",
    invitati: "",
    mesaj: "",
  });
  const [errors, setErrors] = useState({
    nume: "",
    email: "",
    data: "",
    tip: "",
    number: "",
    locatie: "",
    ore: "",
    invitati: "",
    mesaj: "",
  });

  const { nume, email, data, tip, number, locatie, ore, invitati, mesaj } =
    contact;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });

    const newErrors = { ...errors };
    newErrors[name] = "";
    setErrors(newErrors);
  };

  const form = useRef();
  function sendEmail() {
    emailjs
      .sendForm(
        "service_p9wp0in",
        "template_gy0awri",
        form.current,
        "user_LtmtuFMqwYiemrPoY0qJc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setContact("");
    form.current.reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    let newErrors = { ...errors };

    if (!email) {
      hasErrors = true;
      newErrors.email = "Adauga adresa de email";
    }

    if (email && !email.includes("@")) {
      hasErrors = true;
      newErrors.email = "Adresa trebuie sa contina '@'";
    }

    if (email && email.includes("@") && !email.includes(".")) {
      hasErrors = true;
      newErrors.email = "Adresa trebuie sa contina '.'";
    }

    if (!nume) {
      hasErrors = true;
      newErrors.nume = "Adauga numele";
    }

    if (!data) {
      hasErrors = true;
      newErrors.data = "Adauga data evenimentului";
    }
    if (!tip) {
      hasErrors = true;
      newErrors.tip = "Adauga tipul evenimentului";
    }

    if (!number) {
      hasErrors = true;
      newErrors.number = "Adauga numarul de telefon";
    }
    if (number && number.length < 10) {
      hasErrors = true;
      newErrors.number = "Trebuie sa contina 10 cifre";
    }

    if (!locatie) {
      hasErrors = true;
      newErrors.locatie = "Adauga locatia";
    }

    if (!ore) {
      hasErrors = true;
      newErrors.ore = "Adauga numarul de ore";
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    } else console.log("aa");
    sendEmail();
  };

  return (
    <div className="flex-col font-bold text-gold bg-darkGrey bg-no-repeat bg-cover bg-center pl-6">
      <h1 className="flex text-6xl mt-12">CONTACT</h1>
      <div className="flex">
        <div className="flex-col">
          <h2 className="flex mt-12 text-3xl">
            Ne-ar face plăcere să vorbim cu tine!
          </h2>
          <h2 className="flex mt-3 text-2xl">Formular cerere ofertă</h2>
          <form
            ref={form}
            className="w-5/5 mr-24"
            onSubmit={handleSubmit}
            noValidate
          >
            <article className="flex">
              <article-left className="">
                <label className="flex flex-col items-start mt-3 ">
                  Nume:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.nume,
                    })}
                    type="text"
                    name="nume"
                    value={nume}
                    onChange={handleChange}
                    placeholder="Nume"
                  ></input>
                  <p className="text-red-500">{errors.nume}</p>
                </label>
                <label className="flex flex-col items-start">
                  Email:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.email,
                    })}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                  ></input>
                  <p className="text-red-500">{errors.email}</p>
                </label>
                <label className="flex flex-col items-start">
                  Data evenimentului:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.data,
                    })}
                    type="date"
                    name="data"
                    value={data}
                    onChange={handleChange}
                    placeholder="Alege data"
                  ></input>
                  <p className="text-red-500">{errors.data}</p>
                </label>
                <label className="flex flex-col items-start">
                  Tip eveniment:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.tip,
                    })}
                    type="text"
                    name="tip"
                    value={tip}
                    onChange={handleChange}
                    placeholder="eg: Nunta, Botez, etc"
                  ></input>
                  <p className="text-red-500">{errors.tip}</p>
                </label>
              </article-left>
              <article-right className="">
                <label className="flex flex-col items-start mt-3 ">
                  Telefon:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.number,
                    })}
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    placeholder="Telefon"
                  ></input>
                  <p className="text-red-500">{errors.number}</p>
                </label>
                <label className="flex flex-col items-start">
                  Locație:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.locatie,
                    })}
                    type="text"
                    name="locatie"
                    value={locatie}
                    onChange={handleChange}
                    placeholder="Locatie"
                  ></input>
                  <p className="text-red-500">{errors.locatie}</p>
                </label>
                <label className="flex flex-col items-start">
                  Număr de ore:
                  <input
                    className={clsx("w-96 p-2 mt-3 mb-3 ", {
                      "border-2 border-red-500": errors.ore,
                    })}
                    type="text"
                    name="ore"
                    value={ore}
                    onChange={handleChange}
                    placeholder="Numar de ore"
                  ></input>
                  <p className="text-red-500">{errors.ore}</p>
                </label>
                <label className="flex flex-col items-start">
                  Număr invitați:
                  <input
                    className="w-96 p-2 mt-3 mb-3 "
                    type="text"
                    name="invitati"
                    value={invitati}
                    onChange={handleChange}
                    placeholder="Numar de invitati"
                  ></input>
                </label>
              </article-right>
            </article>
            <label className="flex flex-col items-start text-xl">
              Mesajul tău
              <textarea
                className="text-xl p-2 mt-3 mb-3 w-full h-28"
                name="mesaj"
                value={mesaj}
                onChange={handleChange}
                placeholder="Mesajul tau..."
              ></textarea>
            </label>

            <button
              className="flex justify-center  bg-gold  hover:bg-black  hover:text-gold text-black font-bold py-2 px-4 my-8 rounded-full w-1/4"
              type="submit"
            >
              Trimite
            </button>
          </form>
        </div>
        <div className="mt-12 flex flex-col justify-between h-48">
          <h1 className="text-4xl">Date contact</h1>
          <div className="text-xl font-bold ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

/* {nume.length < 3 ? (
  <p className="text-red-600">
    Name must be at least 3 characters
  </p>
) : (
  ""
)} */

/* {number.length < 10 ? (
  <p className="text-red-600">
    Telefonul trebuie sa contina 10 cifre
  </p>
) : (
  ""
)} */
