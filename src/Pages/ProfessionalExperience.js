import React from "react";

import TimelineComponentVertical from "../Components/TimelineComponentVertical";

const ProfessionalExperience = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="border">Szakmai tapasztalat</h1>


      <TimelineComponentVertical left={false} title="Érettségi" content="ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium" time="2013 - 2017" />
      <TimelineComponentVertical left={true} title="Egyetem" content="Semmelweis Egyetem Fogorvostudományi Kar" time="2017 - 2019" />
      <TimelineComponentVertical left={false} title="Pszichológia BA" content={<><span>Viselkedéselemző diploma</span><br /><span>Eötvös Loránd Tudományegyetem Pedagógiai és Pszichológiai Kar</span><br /><span>Szakdolgozat címe:    A frontoparietális théta-oszcillációk szinkronizálásának 
        és deszinkronizálásának hatása a statisztikai tanulásra</span></>} time="2013 - 2017" />
      <TimelineComponentVertical left={true} title="Pszichológia MA" content={<><span>Klinikai és egészségpszichológia specializáció</span><br /><span>Eötvös Loránd Tudományegyetem Pedagógiai és Pszichológiai Kar</span></>} time="2013 - 2017" />
    </div>
  );
};

export default ProfessionalExperience;
