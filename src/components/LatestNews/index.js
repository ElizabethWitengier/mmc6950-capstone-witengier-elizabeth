import React from "react";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";

const LatestNews = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center flex-col justify-center">
      <div className="my-8">
        <SectionHeader
          black
          title="Latest News"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <SingleCard
            key={item}
            title="Title"
            date="24 july 2022"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed turpis. Ornare arcu dui vivamus arcu felis bibendum ut tristique. In iaculis nunc sed augue lacus viverra vitae congue eu. At varius vel pharetra vel turpis nunc eget. Turpis nunc eget lorem dolor sed viverra ipsum nunc. "
          />
        ))}
      </div>
      <div className="">
        <Button secondary link="/coming-soon">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const SingleCard = ({ title, desc, date }) => (
  <div className="border border-black border-1 rounded-lg p-3">
    <div>{desc}</div>
    <hr />
    <div>
      <h3 className="text-lg">{title}</h3>
      <p>{date}</p>
    </div>
  </div>
);

export default LatestNews;
