import React from "react";
import clsx from "clsx";
import emailjs, { send } from "emailjs-com";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../../index.css";
const instagram = <FontAwesomeIcon icon={faInstagram} />;

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
          alert("Formular trimis cu succes!");
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
    } else;
    sendEmail();
  };

  return (
    <div className="flex-col pl-6 font-bold bg-center bg-no-repeat bg-cover text-gold bg-darkGrey w-80v">
      <h1 className="flex mt-12 text-6xl"> CONTACT</h1>
      <div className="flex flex-col xl:flex-row">
        <div className="flex-col">
          <h2 className="flex mt-12 text-3xl">
            Ne-ar face plăcere să vorbim cu tine!
          </h2>
          <h2 className="flex mt-3 text-2xl">Formular cerere ofertă</h2>
          <form
            ref={form}
            className="mr-24 w-5/5"
            onSubmit={handleSubmit}
            noValidate
          >
            <article className="flex flex-col sm:flex-row">
              <articleLeft className="mr-4 ">
                <label className="flex flex-col items-start mt-3 ">
                  Nume:
                  <input
                    className={clsx(
                      " w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.nume,
                      }
                    )}
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
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.email,
                      }
                    )}
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
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.data,
                      }
                    )}
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
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.tip,
                      }
                    )}
                    type="text"
                    name="tip"
                    value={tip}
                    onChange={handleChange}
                    placeholder="eg: Nunta, Botez, etc"
                  ></input>
                  <p className="text-red-500">{errors.tip}</p>
                </label>
              </articleLeft>
              <article-right className="flex flex-col w-2/4">
                <label className="flex flex-col items-start mt-3 ">
                  Telefon:
                  <input
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96  p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.number,
                      }
                    )}
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
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.locatie,
                      }
                    )}
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
                    className={clsx(
                      "w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 ",
                      {
                        "border-2 border-red-500": errors.ore,
                      }
                    )}
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
                    className="w-72 sm:w-full md:w-72 lg:w-96 p-2 mt-3 mb-3 "
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
                className="w-72 sm:w-full p-2 mt-3 mb-3 text-xl h-28"
                name="mesaj"
                value={mesaj}
                onChange={handleChange}
                placeholder="Mesajul tau..."
              ></textarea>
            </label>

            <button
              className="flex justify-center w-full px-4 py-2 my-8 font-bold text-black rounded-full sm:w-1/4 bg-gold hover:bg-black hover:text-gold"
              type="submit"
            >
              Trimite
            </button>
          </form>
        </div>
        <div className="flex flex-col h-48 mt-12 xl:justify-between">
          <h1 className="mb-8 text-4xl xl:mb-0">Date contact</h1>
          <div className="text-xl font-bold ">
            <p className="flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
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
                className="w-6 h-6 mr-2"
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
            <a
              href="https://www.instagram.com/feelfree__events/"
              className="flex"
            >
              <p className="w-6 h-6 mr-2">{instagram}</p>Follow us on instagram
            </a>
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
