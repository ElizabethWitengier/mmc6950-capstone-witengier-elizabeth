import { useRouter } from "next/router";
import React from "react";

const SingleVideo = () => {
  const router = useRouter();
  const { singleVideo } = router.query;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${singleVideo}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default SingleVideo;
