import React from "react";

import TimelineComponentVertical from "../Components/TimelineComponentVertical";

const Education = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="text-4xl text-center font-bold">Oktatás és Képzés</h1>

      <TimelineComponentVertical left={false} title="Érettségi" content="ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium" time="2013 - 2017" />
      <TimelineComponentVertical left={true} title="Egyetem" content="Semmelweis Egyetem Fogorvostudományi Kar" time="2017 - 2019" />
      <TimelineComponentVertical left={false} title="Pszichológia BA" content={<><span>Viselkedéselemző diploma</span><br /><span>Eötvös Loránd Tudományegyetem Pedagógiai és Pszichológiai Kar</span><br /><span>Szakdolgozat címe:    A frontoparietális théta-oszcillációk szinkronizálásának 
        és deszinkronizálásának hatása a statisztikai tanulásra</span></>} time="2020 - 2023" />
        <TimelineComponentVertical left={true} title="Szondi-teszt elmélete és gyakorlata (32 óra)" content="dr. Szondi Lipót Emlékalapítvány" time="2023. szept. - 2024. ápr." />
        <TimelineComponentVertical left={false} title="Autogén tréning sajátélmény (30 óra)" content="Magyar Relaxációs és Szimbólumterápiás Egyesület" time="2024. ápr. - 2024. júl." />
      <TimelineComponentVertical left={true} title="Pszichológia MA" content={<><span>Klinikai és egészségpszichológia specializáció</span><br /><span>Eötvös Loránd Tudományegyetem Pedagógiai és Pszichológiai Kar</span></>} time="2023 - 2025" />
    </div>
  );
};

export default Education;
