import Button from "@/components/common/Button";
import LearnMore from "@/components/common/LearnMore";
import PageHeader from "@/components/common/PageHeader";
import VideoCard from "@/components/common/VideoCard";
import { useUserContext } from "@/context/UserContext";
import { yogaTypes } from "@/lib/yoga";
import axios from "axios";
import React, { useState } from "react";
const durations = [
  {
    title: "<4",
    value: "short",
  },
  {
    title: "4-20",
    value: "medium",
  },
  {
    title: ">20",
    value: "long",
  },
];

const Yoga = ({ allYoga }) => {
  const [yoga, setYoga] = useState(allYoga || []);
  const [selectedOptions, setSelectedOptions] = useState({
    searchValue: "",
    type: "none",
    length: "none",
    complexity: "none",
  });
  const { allFav } = useUserContext();

  const handleChangeApi = async () => {
    const searchType = `${selectedOptions.searchValue || "all"}${
      selectedOptions.type === "none" ? "" : "+" + selectedOptions.type
    }?complexity=${
      selectedOptions.complexity === "none"
        ? undefined
        : selectedOptions.complexity
    }&length=${
      selectedOptions.length === "none" ? undefined : selectedOptions.length
    }`;
    const res = await axios.get(
      `http://localhost:3000/api/youtube/yoga/${searchType}`
    );
    setYoga(res.data);
  };

  const handleChange = (name, value) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: value }));
    console.log(selectedOptions);
    setTimeout(async () => await handleChangeApi(), 500);
  };

  return (
    <div>
      <PageHeader title={"Discover Yoga"} desc={"labisdbvaidkaks"} />
      <div className="flex items-center justify-around container my-8 mx-auto">
        {/* Search */}
        <div>
          <input
            value={selectedOptions.searchValue}
            name="searchValue"
            type="text"
            placeholder="Search..."
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        {/* Select Type */}
        <div>
          <select onChange={(e) => handleChange("type", e.target.value)}>
            <option selected value="none">
              Type of Yoga
            </option>
            {yogaTypes.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>
        {/* Select Length */}
        <div>
          <select onChange={(e) => handleChange("length", e.target.value)}>
            <option selected value="none">
              Length of video
            </option>
            {durations.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>
        {/* Select Complexity */}
        <div>
          <select onChange={(e) => handleChange("complexity", e.target.value)}>
            <option selected value="none">
              Complexity Level
            </option>
            {["Beginner", "Intermediate", "Advanced"].map((item) => (
              <option key={item} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* Button */}
        <div>
          <Button primary>Learn More</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 container mx-auto">
        {yoga.map((item) => (
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
