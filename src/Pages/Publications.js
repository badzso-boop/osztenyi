import React from "react";

import TimelineComponentVertical from "../Components/TimelineComponentVertical";

const Publications = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="text-4xl text-center font-bold">Publikációk</h1>

      <div className="mt-4">
        <TimelineComponentVertical
          left={false}
          title="Új Nemzeti Kiválóság Program"
          content="Felsőoktatási Alapképzés Hallgatói Kutatói Ösztöndí"
          time="2022/2023. tanév"
        />
        <TimelineComponentVertical
          left={true}
          title="III. hely - 36. Országos Tudományos Diákköri Konferencia"
          content="Pedagógiai, Pszichológiai, Andragógiai és Könyvtártudományi szekció, „Kognitív pszichológia I.” tagozat"
          time="2023. ápr. 11 - 13"
        />
        <TimelineComponentVertical
          left={false}
          title="NeuroFrance2023, Lyon, Franciaország - Poszter társszerző"
          content={
            <>
              <a
                className="underline text-cyan-500"
                href="https://m2.mtmt.hu/api/publication/34030698"
              >
                Hemispheric asymmetry in statistical learning - a non-invasive
                brain stimulation study
              </a>{" "}
              [Poszter-prezentáció]
            </>
          }
          time="2023. máj. 24 - 26"
        />
        <TimelineComponentVertical
          left={true}
          title="Magyar Pszichológiai Társaság XXX. Országos Tudományos Nagygyűlése - Szimpózium előadás"
          content={
            <>
              <a
                className="underline text-cyan-500"
                href="https://m2.mtmt.hu/api/publication/34030622"
              >
                Osztényi D. (2023). Frontoparietális théta-oszcillációk szerepe
                a statisztikai tanulásban
              </a>
              <br />
              <span>Szimpózium előadás</span>
            </>
          }
          time="2023. jún. 8 - 10."
        />
        <TimelineComponentVertical
          left={false}
          title="Új Nemzeti Kiválóság Program Zárókonferenciája - Előadás"
          content={
            <>
              <a
                className="underline text-cyan-500"
                href="https://m2.mtmt.hu/api/publication/34030622"
              >
                Osztényi D. (2023). Frontoparietális théta-oszcillációk szerepe
                a statisztikai tanulásban
              </a>
              <br />
              <span>
                Előadás az Új Nemzeti Kiválóság Program zárókonferenciáján
              </span>
            </>
          }
          time="2023. aug. 31."
        />
        <TimelineComponentVertical
          left={true}
          title="Nemzeti Felsőoktatási Ösztöndí"
          content=""
          time="2023/2024. tanév"
        />
      </div>
    </div>
  );
};

export default Publications;
