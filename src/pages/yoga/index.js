import PageHeader from "@/components/common/PageHeader";
import VideoCard from "@/components/common/VideoCard";
import React from "react";

const Yoga = () => {
  return (
    <div>
      <PageHeader title={"Discover Yoga"} desc={"labisdbvaidkaks"} />
      <div className="flex flex-wrap justify-between items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <VideoCard title={item} description={item} />
        ))}
      </div>
    </div>
  );
};

export default Yoga;
