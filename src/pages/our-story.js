import OurMission from "@/components/OurMission";
import OurStats from "@/components/OurStats";
import OurTeam from "@/components/OurTeam";
import PageHeader from "@/components/common/PageHeader";
import SubscribeSection from "@/components/common/SubscribeSection";
import React from "react";

const OurStory = () => {
  return (
    <div>
      <PageHeader title={"Our Story"} desc={"labisdbvaidkaks"} />
      <OurMission />
      <OurTeam />
      <OurStats />
      <SubscribeSection />
    </div>
  );
};

export default OurStory;
