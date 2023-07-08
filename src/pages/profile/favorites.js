import PageHeader from "@/components/common/PageHeader";
import VideoCard from "@/components/common/VideoCard";
import { useUserContext } from "@/context/UserContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const { allFav, user } = useUserContext();

  if (!user?._id) {
    return "404 not found";
  }
  return (
    <div>
      <PageHeader title={"Favorites"} desc={"labisdbvaidkaks"} />
      <div className="flex flex-wrap justify-between items-center gap-4 container mx-auto">
        {allFav.map((item) => (
          <VideoCard
            key={item.id}
            isFav={true}
            title={item.snippet.title}
            description={item.snippet.description}
            imgSrc={item.snippet.thumbnails.default.url}
            videoId={item.id}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
