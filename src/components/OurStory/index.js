import React from "react";
import crystalsImg from "@/assets/images/crystals.svg";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";

const OurStory = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <div className="my-8">
        <SectionHeader
          black
          title="Our Story"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "
        />
      </div>
      <div className="">
        <Button secondary link="/our-story">
          Learn More
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <SingleImage imgSrc={crystalsImg.src} />
        <SingleImage imgSrc={crystalsImg.src} />
        <SingleImage imgSrc={crystalsImg.src} />
        <SingleImage imgSrc={crystalsImg.src} />
      </div>
    </div>
  );
};

const SingleImage = ({ imgSrc, alt }) => (
  <div>
    <img src={imgSrc} alt={alt} />
  </div>
);

export default OurStory;
