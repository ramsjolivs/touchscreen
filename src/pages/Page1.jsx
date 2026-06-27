import { useState } from "react";
import SecondaryNavbarPage1 from "../components/SecondaryNavbarPage1";

function Page1() {
  const [activeTab, setActiveTab] = useState("mat_intrepeneur");

  const iframes = {
    mat_intrepeneur: {
      src: "https://docs.google.com/presentation/d/e/2PACX-1vSbePoCRqgrhKZxy2RrCRxD-VXVS7njGPmZMc55ao8VFbi0hgn_nhX3Maw9OgIJfvaim-bcvxFRLPnE/pubembed?start=false&loop=true&delayms=60000",
    },
    mat_tempo: {
      src: "https://www.tempo.se/butiker/tempo-los-gruvbyvagen/",
    },
    section3: {
      src: "https://docs.google.com/presentation/d/e/2PACX-1vRaJ-0E07iJBopoFD1Pvkd8B_uikCzU7tHTHpaAnpNvMZqdpgGA6r6wVy7Fg6DqZkgmNblqgH9sP09H/pubembed?start=false&loop=false&delayms=3000",
    },
  };

  return (
    <>
      <SecondaryNavbarPage1 activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container">
        <iframe
          src={iframes[activeTab].src}
          frameBorder="0"
          width="1080"
          height="1949"
          allowFullScreen={true}
          mozAllowFullScreen={true}
          webkitAllowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
}

export default Page1;
