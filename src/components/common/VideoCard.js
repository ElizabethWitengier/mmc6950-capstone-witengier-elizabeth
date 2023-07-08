import React from "react";
import he from "he";
import Link from "next/link";
import { useUserContext } from "@/context/UserContext";
function replaceEntities(inputString) {
  return he.decode(inputString);
}

const VideoCard = ({
  title,
  description,
  imgSrc,
  isFav,
  duration,
  videoId,
}) => {
  const { addFav, isAuthenticated, removeFav } = useUserContext();
  return (
    <div className="flex-[1_0_25%] rounded-lg text-center">
      <Link href={`/video/${videoId}`}>
        <img src={imgSrc} className="object-cover mx-auto" />
      </Link>
      <div>
        {replaceEntities(title.split(" ").slice(0, 6).join(" "))
          .replace(/[^\w\s]/gi, "")
          .replace(/\b\w/g, (match) => match.toUpperCase())}
      </div>
      <div>
        <span>{duration}</span>
      </div>
      <div>{description.slice(0, 100)}...</div>
      {isAuthenticated && isFav ? (
        <button onClick={() => removeFav(videoId)}>Already Fav</button>
      ) : (
        <button onClick={() => addFav(videoId)}>Fav</button>
      )}
    </div>
  );
};

export default VideoCard;
