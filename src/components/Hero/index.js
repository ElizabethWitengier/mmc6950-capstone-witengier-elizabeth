import React from "react";

import HeroImage from "@/assets/images/hero_image.png";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img
        src={HeroImage.src}
        alt="Hero Image"
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default Hero;
