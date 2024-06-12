import React from "react";

import TimelineComponentVertical from "../Components/TimelineComponentVertical";

const Publications = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="border">Publikációk</h1>

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
          content={
            <>
              <span>
                Pedagógiai, Pszichológiai, Andragógiai és Könyvtártudományi
                szekció, „Kognitív pszichológia I.” tagozat
              </span>
              <br />
              <span>
                Osztényi D. (2023). A frontoparietális théta-oszcillációk
                deszinkronizációjának szerepe a statisztikai tanulásban. Előadás
                a 36. Országos Tudományos Diákköri Konferencián. Pécs, 2023.
                április 11. (Konzulensek: Dr. Németh Dezső, Pesthy Orsolya)
              </span>
            </>
          }
          time="2023. ápr. 11 - 13"
        />
        <TimelineComponentVertical
          left={false}
          title="NeuroFrance2023, Lyon, Franciaország - Poszter társszerző"
          content={
            <>
              <span>
                Pesthy, O., Vékony, T., Pesthy, Z.V., Osztényi, D., Janacsek,
                K., Fabó, D., Nemeth, D. (2023. május 24-26). Hemispheric
                asymmetry in statistical learning - a non-invasive brain
                stimulation study. [Poszter-prezentáció]. NeuroFrance2023, Lyon,
                Franciaország
              </span>
            </>
          }
          time="2023. máj. 24 - 26"
        />
        <TimelineComponentVertical
          left={true}
          title="Magyar Pszichológiai Társaság XXX. Országos Tudományos 
Nagygyűlése - Szimpózium előadás"
          content="Osztényi D. (2023). Frontoparietális théta-oszcillációk szerepe a 
statisztikai tanulásban. Szimpózium előadás a Magyar Pszichológiai 
Társaság XXX. Országos Tudományos Nagygyűlésén, Pécs, 2023. június 
8-10."
          time="2023. jún. 8 - 10."
        />
        <TimelineComponentVertical
          left={false}
          title="Új Nemzeti Kiválóság Program Zárókonferenciája - Előadás"
          content="Osztényi D. (2023). Frontoparietális théta-oszcillációk szerepe a 
statisztikai tanulásban. Előadás az Új Nemzeti Kiválóság Program 
zárókonferenciáján.
2023. augusztus 31"
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
