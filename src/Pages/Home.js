import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

import dorikep from "../img/profilkep.jpg";

const Home = () => {
  return (
    <div className="mb-[70px]">
      <div className="w-full h-[800px]">
        <div className="w-full md:w-1/3 h-1/2 md:border mx-auto md:transform md:translate-y-1/2 rounded-xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="w-full">
              <img
                src={dorikep}
                alt="Rólam kép"
                className="rounded-lg shadow-lg mx-auto transform translate-y-1/2 w-3/4"
              />
            </div>
            <div className="text-center h-1/2 transform md:translate-y-2/4 translate-y-3/4 flex flex-col">
              <h3 className="text-center font-bold text-xl">Osztényi Dóra</h3>
              <div className="h-1/6 mt-1">
                <a className="ml-2 underline text-cyan-500" href="https://www.instagram.com/osztenyidori/">@osztenyidori</a>
              </div>
              <div className="h-1/6 mt-1">
                <i className="fa-brands fa-facebook"></i>
                <a className="ml-2 underline text-cyan-500" href="https://www.facebook.com/dora.osztenyi">Osztényi Dóri</a>
              </div>
              <div className="h-1/6 mt-1">
                <i className="fa-solid fa-phone"></i>
                <a className="ml-2 underline text-cyan-500" href="tel:+36204730126">+36 20/473-0126</a>
              </div>
              <div className="h-1/6 mt-1">
                <i className="fa-solid fa-envelope"></i>
                <a className="ml-2 underline text-cyan-500" href="mailto:norbert.ujj@gmail.com">nemtom az email címed</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 md:transform md:translate-y-0 translate-y-2/4">
            <div className="h-1/2 md:border">
              <div className="w-full flex flex-wrap transform translate-y-1/2">
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Név: </span>
                  <span>Osztényi Dóra</span>
                </div>
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Képzettség: </span>
                  <span>Pszichológustan hallgató</span>
                </div>
              </div>
              <div className="w-full flex flex-wrap transform translate-y-1/2">
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Önkéntes: </span>
                  <span>Amigos a gyerekekért Alapítvány</span>
                </div>
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Hangulat: </span>
                  <span>Mellette te is mosolyogsz!</span>
                </div>
              </div>
            </div>
            <div className="h-1/2 md:border p-2">
              <blockquote className="text-xl italic font-semibold p-2">
                <svg
                  className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>
                  "Ahhoz, hogy megnyíljak, olyan terapeutára van szükségem, aki
                  a hallgatásomba is meghallja a fájdalmat és a tagadás mögött
                  is megérzi az igazságot"
                </p>
                <span className="font-bold">- Christie Tate</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
