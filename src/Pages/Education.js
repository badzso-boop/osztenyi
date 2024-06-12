import React from "react";

import TimelineComponents from "../Components/TimelineComponent";

const Education = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="text-4xl text-center font-bold">Oktatás és Képzés</h1>

      <div className="w-3/4 mx-auto mt-5 border flex flex-wrap grid grid-cols-4">
        <TimelineComponents
          title="Érettségi"
          content="ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium"
          time="2013 - 2017"
        />

        <TimelineComponents
          title="Egyetem"
          content="Semmelweis Egyetem Fogorvostudományi Kar"
          time="2017 - 2019"
        />

        <TimelineComponents
          title="Pszichológia BA"
          content={
            <>
              <span className="italic">Viselkedéselemző diploma</span>
              <br />
              <span>
                Eötvös Loránd Tudományegyetem Pedagógiai és Pszichológiai Kar
              </span>
              <br />
              <br />
              <span>
                Szakdolgozat címe:{" "}
                <span className="italic">
                  A frontoparietális théta-oszcillációk szinkronizálásának és
                  deszinkronizálásának hatása a statisztikai tanulásra
                </span>
              </span>
            </>
          }
          time="2020 - 2023"
        />

        <TimelineComponents
          title="Pszichológia MA"
          content="Klinikai és egészségpszichológia specializáció Eötvös Loránd
              Tudományegyetem Pedagógiai és Pszichológiai Kar"
          time="2023-2025"
        />
      </div>
    </div>
  );
};

export default Education;
