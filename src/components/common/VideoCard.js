import React from "react";

const VideoCard = ({ title, description, imgSrc, isFav }) => {
  return (
    <div>
      <img src={imgSrc} />
      <div>{title}</div>
      <div>{description}</div>
      <button>Fav</button>
    </div>
  );
};

export default VideoCard;
