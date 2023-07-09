import React from "react";
import SectionHeader from "../common/SectionHeader";
import crystals from "@/assets/images/crystals.svg";

const OurTeam = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="my-6">
        <SectionHeader title={"Meet Our Team"} />
      </div>
      <div className="flex items-cente justify-center">
        {[1, 2, 3, 4].map((item) => (
          <img src={crystals.src} className="h-[50vh]" />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
