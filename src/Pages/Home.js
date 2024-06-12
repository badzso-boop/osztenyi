import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

import dorikep from "../img/profilkep.jpg";

const Home = () => {
  return (
    <div className="mb-[70px]">
      <div className="w-full h-[800px]">
        <div className="w-1/3 h-1/2 border mx-auto transform translate-y-1/2 rounded-xl flex flex-wrap">
          <div className="w-1/3 border h-full">
            <img
              src={dorikep}
              alt="Rólam kép"
              class="rounded-lg shadow-lg mx-auto transform translate-y-1/2 w-3/4"
            />
          </div>
          <div className="w-2/3">
            <div className="h-1/2 border">
              <div className="w-full flex flex-wrap transform translate-y-1/2">
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Név: </span>
                  <span>Osztényi Dóra</span>
                </div>
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Képzettség: </span>
                  <span>Majd egyszer pszichológus leszek :D</span>
                </div>
              </div>
              <div className="w-full flex flex-wrap transform translate-y-1/2">
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Név: </span>
                  <span>Osztényi Dóra</span>
                </div>
                <div className="p-2 w-1/2 h-[20%]">
                  <span className="font-bold">Képzettség: </span>
                  <span>Majd egyszer pszichológus leszek :D</span>
                </div>
              </div>
            </div>
            <div className="h-1/2 border p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
