import React from "react";
import SectionHeader from "../common/SectionHeader";
import crystals from "@/assets/images/crystals.svg";

const OurStats = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="my-6">
        <SectionHeader title={"Statstics"} />
      </div>
      <div className="flex items-cente justify-center">
        {[1, 2, 3].map((item) => (
          <img src={crystals.src} className="h-[50vh]" />
        ))}
      </div>
    </div>
  );
};

export default OurStats;
