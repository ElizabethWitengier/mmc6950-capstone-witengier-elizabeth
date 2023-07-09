import React from "react";

import crystals from "@/assets/images/crystals.svg";
import Button from "./Button";

const SubscribeSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${crystals.src}')`,
      }}
      className={`h-[20vh] bg-cover bg-norepeat flex items-center justify-around`}
    >
      <h2>Subscribe to our Wisdom</h2>
      <Button primary link="coming-soon">
        Learn More
      </Button>
    </div>
  );
};

export default SubscribeSection;
