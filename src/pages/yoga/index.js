import Button from "@/components/common/Button";
import LearnMore from "@/components/common/LearnMore";
import PageHeader from "@/components/common/PageHeader";
import VideoCard from "@/components/common/VideoCard";
import { useUserContext } from "@/context/UserContext";
import axios from "axios";
import React from "react";

const Yoga = ({ allYoga }) => {
  const { allFav } = useUserContext();

  console.log(allYoga, allFav);
  return (
    <div>
      <PageHeader title={"Discover Yoga"} desc={"labisdbvaidkaks"} />
      <div className="flex items-center justify-around container my-8 mx-auto">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <select>
            <option disabled selected>
              Type of Yoga
            </option>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select>
            <option disabled selected>
              Length of video
            </option>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select>
            <option disabled selected>
              Complexity Level
            </option>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button primary>Learn More</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 container mx-auto">
        {allYoga.map((item) => (
          <VideoCard
            key={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            imgSrc={item.snippet.thumbnails.default.url}
            videoId={item.id.videoId}
            duration={item.duration}
            isFav={allFav.some((favItem) => favItem.id === item.id.videoId)}
          />
        ))}
      </div>
      <LearnMore videoUrl={"https://www.youtube.com/embed/gMPOdUN7pKE"} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/youtube/yoga/all");
  return {
    props: {
      allYoga: res.data,
    },
  };
};
export default Yoga;
