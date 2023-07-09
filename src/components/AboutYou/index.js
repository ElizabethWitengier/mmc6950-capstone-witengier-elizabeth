import React from "react";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";

const AboutYou = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center flex-col justify-center">
      <div className="my-8">
        <SectionHeader
          black
          title="About You"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna "
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Button primary link="/coming-soon">
            item #{item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AboutYou;
