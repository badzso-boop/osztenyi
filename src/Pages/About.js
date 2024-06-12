import React from "react";

import dorikep from '../img/profilkep.jpg'

const About = () => {
  return (
    <div className="mb-[70px]">
      <div class="max-w-4xl mx-auto p-6">
        <div class="flex flex-col md:flex-row items-center mb-6">
            <div class="w-full md:w-1/2 p-4">
                <img src={dorikep} alt="Rólam kép" class="rounded-lg shadow-lg" />
            </div>
            <div class="w-full md:w-1/2 p-4">
                <h1 class="text-3xl font-bold mb-4 text-center">Rólam</h1>
                <p class="text-lg">
                    Üdvözöllek az oldalamon! Az ELTE pszichológia mesterszakos hallgatójaként mély szenvedéllyel fordulok a pszichológia világa felé. Szeretem az embereket, és mindig is arra törekedtem, hogy segítsek másokon, ezért rendszeresen önkénteskedem pszichiátriákon és kórházakban, ahol beteg gyerekekkel játszom, hogy egy kis boldogságot és reményt hozzak az életükbe.
                </p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p class="text-lg mb-4">
                Számos kutatásban veszek részt, mert hiszem, hogy az új tudományos eredmények segíthetnek jobban megérteni az emberi lélek mélységeit. Emellett a Hallgatói Önkormányzat egyik elnökeként aktívan részt veszek a közösségi élet szervezésében és a hallgatók érdekeinek képviseletében.
            </p>
            <p class="text-lg mb-4">
                Vidám és élettel teli személyiség vagyok, aki szereti a közösséget és mindig nyitott új emberek megismerésére. Szeretek beszélgetni és megismerni mások történeteit, mert minden ember egy különleges világ, amelyből rengeteget lehet tanulni.
            </p>
            <p class="text-lg">
                Pszichológusként fontosnak tartom, hogy a szakmám ismereteit a mindennapi életben is hasznosítani tudjam. Számomra ez nem csupán egy munka, hanem hivatás, amellyel értékes segítséget nyújthatok azoknak, akiknek szükségük van rá. Mindig is arra törekszem, hogy a legjobb tudásom szerint támogassam a körülöttem lévőket.
            </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Kapcsolatfelvétel</h2>
            <p class="text-lg">Ha szeretnél többet megtudni rólam, vagy érdekel bármilyen együttműködés, ne habozz kapcsolatba lépni velem!</p>
        </div>
    </div>
    </div>
  );
};

export default About;
