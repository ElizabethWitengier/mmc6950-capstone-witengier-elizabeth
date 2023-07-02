import React from "react";
import he from "he";
function replaceEntities(inputString) {
  return he.decode(inputString);
}

const VideoCard = ({ title, description, imgSrc, isFav, duration }) => {
  return (
    <div className="flex-[1_0_25%] rounded-lg text-center">
      <img src={imgSrc} className="object-cover mx-auto" />
      <div>
        {replaceEntities(title.split(" ").slice(0, 6).join(" "))
          .replace(/[^\w\s]/gi, "")
          .replace(/\b\w/g, (match) => match.toUpperCase())}
      </div>
      <div>
        <span>{duration}</span>
      </div>
      <div>{description.slice(0, 100)}...</div>
      <button>Fav</button>
    </div>
  );
};

export default VideoCard;
