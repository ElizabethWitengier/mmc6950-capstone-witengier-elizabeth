import React from "react";

import Crystals from "@/assets/images/crystals.svg";

const OurMission = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 grid-cols-2 h-screen">
      <div className="flex items-center justify-center flex-col">
        <h2>Our Mission</h2>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <img src={Crystals.src} className="object-cover h-[95vh] m-auto" />
      </div>
    </div>
  );
};

export default OurMission;
