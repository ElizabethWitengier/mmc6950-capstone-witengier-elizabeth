import React from "react";

const SectionHeader = ({ black, white, color, title, desc }) => {
  const className = color
    ? `text-[${color}]`
    : black
    ? "text-black"
    : white
    ? "text-white"
    : "";
  return (
    <div className="text-center container mx-auto px-32">
      <h2 className={`text-2xl font-semibold ${className}`}>{title}</h2>
      <p className={` ${className}`}>{desc}</p>
    </div>
  );
};

export default SectionHeader;
