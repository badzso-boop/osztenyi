import React from "react";

import TimelineComponentVertical from "../Components/TimelineComponentVertical";

const ProfessionalExperience = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="text-4xl font-bold text-center">Szakmai tapasztalat</h1>

      <div className="mt-4">
        <TimelineComponentVertical
          left={false}
          title="Oktatás"
          content="Biológia és kémia gimnáziumi szóbeli felvételi és emelt szintű érettségi felkészítés"
          time="2018 - "
        />
        <TimelineComponentVertical
          left={true}
          title="Kutatási Aszisztens"
          content={
            <>
              <span>
                ELTE - PPK Emlékezet, Nyelv és Idegtudomány Kutatócsoport
              </span>
              <br />
              <span>
                Adatfelvétel lebonyolítása (EEG és eye-tracker használata),
                vizsgálati személyekkel kapcsolattartás, jegyzőkönyv készítése,
                adminisztráció. „Non-invazív agyi stimuláció (rTMS) hatása az
                implicit statisztikai tanulásra” c. projekt keretében.
              </span>
            </>
          }
          time="2021.szept. - 2023.máj."
        />
        <TimelineComponentVertical
          left={false}
          title="Tudományos referens"
          content="ELTE Pedagógiai és Pszichológiai Kar Hallgatói Önkormányzat"
          time="2023.szept. - 2024.febr"
        />
        <TimelineComponentVertical
          left={true}
          title="Tanulmányi Bizottság elnöke"
          content="ELTE Pedagógiai és Pszichológiai Kar Hallgatói Önkormányzat"
          time="2024.febr. - "
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
